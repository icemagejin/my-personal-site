'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, History, Plus, Trash2 } from 'lucide-react';
import { chatHistoryManager, ChatMessage, ChatConversation } from '@/lib/chatHistory';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import MermaidDiagram from '@/components/MermaidDiagram';

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content: '你好！欢迎来到产品拆解工作室。我可以帮你深度分析产品的设计逻辑、用户价值和商业模式。试试输入一个产品名称，比如"分析微信的核心功能"。',
  timestamp: Date.now(),
};

const SAMPLE_MERMAID = `graph TB
    A["产品拆解分析"]
    A --> B["用户需求"]
    A --> C["核心功能"]
    A --> D["商业价值"]
    A --> E["竞争优势"]

    B --> B1["目标用户画像"]
    B --> B2["核心痛点"]
    B --> B3["使用场景"]

    C --> C1["基础功能"]
    C --> C2["特色功能"]
    C --> C3["增值服务"]

    D --> D1["收益模式"]
    D --> D2["成本结构"]
    D --> D3["增长引擎"]

    E --> E1["技术壁垒"]
    E --> E2["用户体验"]
    E --> E3["网络效应"]`;

export default function ChatPage() {
  const [conversations, setConversations] = useState<ChatConversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentMermaid, setCurrentMermaid] = useState<string | null>(null);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loaded = chatHistoryManager.getConversations();
    setConversations(loaded);
    const currentId = chatHistoryManager.getCurrentConversationId();

    if (loaded.length > 0 && currentId) {
      setCurrentConversationId(currentId);
      const current = loaded.find(c => c.id === currentId);
      if (current) {
        const lastMermaid = [...current.messages].reverse().find(m => m.mermaidCode);
        if (lastMermaid?.mermaidCode) {
          setCurrentMermaid(lastMermaid.mermaidCode);
        }
      }
    } else {
      const newConv = chatHistoryManager.createConversation();
      setConversations([newConv]);
      setCurrentConversationId(newConv.id);
    }

    setIsUnlocked(chatHistoryManager.isUnlocked());
  }, []);

  const currentConversation = conversations.find((c) => c.id === currentConversationId);
  const messages = currentConversation?.messages || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || !currentConversationId) return;

    const newUserMessageCount = userMessageCount + 1;
    setUserMessageCount(newUserMessageCount);

    if (newUserMessageCount >= 2 && !isUnlocked) {
      setShowLeadForm(true);
      return;
    }

    const userMessage: ChatMessage = {
      id: `msg_${Date.now()}_user`,
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    chatHistoryManager.addMessage(currentConversationId, userMessage);
    setInput('');

    setTimeout(() => {
      const assistantContent = `很好的问题！关于"${input}"的拆解分析，我已经为你生成了思维导图。

你可以在右侧看到详细的分析框架：
- 用户需求：目标用户、核心痛点、使用场景
- 核心功能：基础功能、特色功能、增值服务
- 商业价值：收益模式、成本结构、增长引擎
- 竞争优势：技术壁垒、用户体验、网络效应

\`\`\`mermaid
${SAMPLE_MERMAID}
\`\`\`

继续提问来深化分析，比如："该产品的关键成功要素是什么？"`;

      const mermaidCode = chatHistoryManager.extractMermaidCode(assistantContent);

      const assistantMessage: ChatMessage = {
        id: `msg_${Date.now()}_assistant`,
        role: 'assistant',
        content: assistantContent,
        timestamp: Date.now(),
        mermaidCode: mermaidCode || undefined,
      };

      chatHistoryManager.addMessage(currentConversationId, assistantMessage);

      if (mermaidCode) {
        setCurrentMermaid(mermaidCode);
      }

      const updatedConvs = chatHistoryManager.getConversations();
      setConversations(updatedConvs);
    }, 800);

    const updatedConvs = chatHistoryManager.getConversations();
    setConversations(updatedConvs);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewChat = () => {
    const newConv = chatHistoryManager.createConversation();
    setConversations(chatHistoryManager.getConversations());
    setCurrentConversationId(newConv.id);
    setCurrentMermaid(null);
    setShowHistory(false);
  };

  const handleSelectConversation = (id: string) => {
    setCurrentConversationId(id);
    chatHistoryManager.setCurrentConversationId(id);

    const conv = conversations.find(c => c.id === id);
    if (conv) {
      const lastMermaid = [...conv.messages].reverse().find(m => m.mermaidCode);
      if (lastMermaid?.mermaidCode) {
        setCurrentMermaid(lastMermaid.mermaidCode);
      } else {
        setCurrentMermaid(null);
      }
    }
    setShowHistory(false);
  };

  const handleDeleteConversation = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    chatHistoryManager.deleteConversation(id);
    const updated = chatHistoryManager.getConversations();
    setConversations(updated);

    if (currentConversationId === id) {
      if (updated.length > 0) {
        setCurrentConversationId(updated[0].id);
      } else {
        const newConv = chatHistoryManager.createConversation();
        setConversations([newConv]);
        setCurrentConversationId(newConv.id);
      }
    }
  };

  const handleDownloadClick = () => {
    if (!isUnlocked) {
      setShowLeadForm(true);
    }
  };

  const handleFormSubmit = () => {
    setIsUnlocked(true);
    setShowLeadForm(false);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-1 flex overflow-hidden">
        <div className="w-[40%] flex flex-col border-r border-gray-200 bg-white">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <h2 className="font-semibold text-sm">产品拆解</h2>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors relative"
                title="历史记录"
              >
                <History className="w-4 h-4" />
              </button>
              <button
                onClick={handleNewChat}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                title="新对话"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {showHistory && (
            <div className="absolute left-0 top-12 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10 ml-4 max-h-96 overflow-y-auto">
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-500 px-2 py-1.5">历史对话</div>
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => handleSelectConversation(conv.id)}
                    className={`px-2 py-2 hover:bg-gray-50 rounded cursor-pointer text-sm flex items-center justify-between group ${
                      currentConversationId === conv.id ? 'bg-gray-100' : ''
                    }`}
                  >
                    <span className="truncate flex-1">{conv.title}</span>
                    <button
                      onClick={(e) => handleDeleteConversation(conv.id, e)}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-opacity"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-lg px-4 py-3 bg-gray-100 text-gray-900">
                  <p className="leading-relaxed text-sm">{WELCOME_MESSAGE.content}</p>
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-wrap text-sm">
                      {message.content.replace(/```mermaid[\s\S]*?```/g, '').trim()}
                    </p>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="输入产品名称或问题..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-[60%] flex flex-col">
          {currentMermaid ? (
            <MermaidDiagram code={currentMermaid} onDownloadClick={handleDownloadClick} />
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
              对话中将自动生成思维导图
            </div>
          )}
        </div>
      </div>

      {showLeadForm && (
        <LeadMagnetForm
          onClose={() => setShowLeadForm(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}
