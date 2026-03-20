export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  mermaidCode?: string;
}

export interface ChatConversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: number;
  updatedAt: number;
}

export interface UserInfo {
  email: string;
  password: string;
  unlocked: boolean;
}

const STORAGE_KEYS = {
  CONVERSATIONS: 'chat_conversations',
  CURRENT_CONVERSATION: 'current_conversation_id',
  USER_INFO: 'user_info',
};

export const chatHistoryManager = {
  getConversations(): ChatConversation[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEYS.CONVERSATIONS);
    return data ? JSON.parse(data) : [];
  },

  saveConversations(conversations: ChatConversation[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.CONVERSATIONS, JSON.stringify(conversations));
  },

  getCurrentConversationId(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(STORAGE_KEYS.CURRENT_CONVERSATION);
  },

  setCurrentConversationId(id: string): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.CURRENT_CONVERSATION, id);
  },

  createConversation(firstMessage?: string): ChatConversation {
    const id = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const conversation: ChatConversation = {
      id,
      title: firstMessage || '新对话',
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const conversations = this.getConversations();
    conversations.unshift(conversation);
    this.saveConversations(conversations);
    this.setCurrentConversationId(id);

    return conversation;
  },

  updateConversation(id: string, updates: Partial<ChatConversation>): void {
    const conversations = this.getConversations();
    const index = conversations.findIndex((c) => c.id === id);
    if (index !== -1) {
      conversations[index] = {
        ...conversations[index],
        ...updates,
        updatedAt: Date.now(),
      };
      this.saveConversations(conversations);
    }
  },

  addMessage(conversationId: string, message: ChatMessage): void {
    const conversations = this.getConversations();
    const conversation = conversations.find((c) => c.id === conversationId);
    if (conversation) {
      conversation.messages.push(message);
      conversation.updatedAt = Date.now();

      if (conversation.messages.length === 1 && message.role === 'user') {
        conversation.title = message.content.slice(0, 30);
      }

      this.saveConversations(conversations);
    }
  },

  deleteConversation(id: string): void {
    const conversations = this.getConversations().filter((c) => c.id !== id);
    this.saveConversations(conversations);

    if (this.getCurrentConversationId() === id) {
      const newCurrent = conversations[0]?.id || null;
      if (newCurrent) {
        this.setCurrentConversationId(newCurrent);
      } else {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_CONVERSATION);
      }
    }
  },

  getUserInfo(): UserInfo | null {
    if (typeof window === 'undefined') return null;
    const data = localStorage.getItem(STORAGE_KEYS.USER_INFO);
    return data ? JSON.parse(data) : null;
  },

  saveUserInfo(info: UserInfo): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(info));
  },

  isUnlocked(): boolean {
    const userInfo = this.getUserInfo();
    return userInfo?.unlocked || false;
  },

  extractMermaidCode(text: string): string | null {
    const mermaidRegex = /```mermaid\n([\s\S]*?)```/;
    const match = text.match(mermaidRegex);
    return match ? match[1].trim() : null;
  },
};
