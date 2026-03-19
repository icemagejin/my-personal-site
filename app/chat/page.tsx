'use client';

import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SAMPLE_MINDMAP = `graph TB
    A["产品拆解分析"]
    A --> B["用户需求"]
    A --> C["核心功能"]
    A --> D["商业价值"]
    A --> E["竞争优势"]

    B --> B1["Who: 目标用户"]
    B --> B2["What: 用户痛点"]
    B --> B3["Why: 使用动机"]

    C --> C1["功能一"]
    C --> C2["功能二"]
    C --> C3["功能三"]

    D --> D1["收益模式"]
    D --> D2["成本结构"]
    D --> D3["增长机制"]

    E --> E1["技术优势"]
    E --> E2["用户体验"]
    E --> E3["生态建设"]`;

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content: '你好！欢迎来到产品拆解工作室。我可以帮你深度分析产品的设计逻辑、用户价值和商业模式。试试输入一个产品名称，比如"分析微信的核心功能"。',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [showMindmap, setShowMindmap] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setShowMindmap(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: messages.length + 2,
        role: 'assistant',
        content: `很好的问题！关于"${input}"的拆解分析，我已经为你生成了思维导图。你可以在右侧看到详细的分析框架，包括用户需求、核心功能、商业价值和竞争优势等几个维度。\n\n继续提问来深化分析，比如："该产品的关键成功要素是什么？"`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">产品拆解</h1>
        <p className="text-gray-600">深度分析产品设计与商业逻辑</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-20rem)]">
        <div className="lg:col-span-2 flex flex-col border border-gray-200 rounded-lg bg-white overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md rounded-lg px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap text-sm md:text-base">{message.content}</p>
                  <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 p-4 md:p-6 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="输入产品名称或问题..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
              <button
                onClick={handleSend}
                className="px-4 md:px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden flex flex-col">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
            <h2 className="font-semibold text-sm md:text-base">思维导图</h2>
            <p className="text-xs text-gray-600 mt-1">分析框架展示</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            {showMindmap ? (
              <div className="bg-gray-50 rounded-lg p-4 text-xs md:text-sm">
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">产品拆解分析</p>
                    <div className="ml-3 space-y-1">
                      <p className="text-gray-600">├ 用户需求分析</p>
                      <p className="text-gray-600">├ 核心功能设计</p>
                      <p className="text-gray-600">├ 商业价值模式</p>
                      <p className="text-gray-600">└ 竞争优势评估</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center text-gray-400">
                <p>对话中生成思维导图</p>
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
            <p className="text-xs font-semibold text-gray-900 mb-3">拆解要点</p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-black flex-shrink-0">•</span>
                <span>分析产品的核心价值</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-black flex-shrink-0">•</span>
                <span>理解用户需求映射</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-black flex-shrink-0">•</span>
                <span>评估商业可持续性</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
