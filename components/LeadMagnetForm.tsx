'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { chatHistoryManager, UserInfo } from '@/lib/chatHistory';

interface LeadMagnetFormProps {
  onClose: () => void;
  onSubmit: (info: UserInfo) => void;
}

export default function LeadMagnetForm({ onClose, onSubmit }: LeadMagnetFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('请输入有效的邮箱地址');
      return;
    }

    if (!password || password.length < 6) {
      setError('密码至少需要6个字符');
      return;
    }

    const userInfo: UserInfo = {
      email,
      password,
      unlocked: true,
    };

    chatHistoryManager.saveUserInfo(userInfo);
    onSubmit(userInfo);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">让我知道怎么联系你</h2>
          <p className="text-gray-600 text-sm">
            继续使用完整功能，包括历史记录保存和脑图下载
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              邮箱
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1.5">
              密码
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="至少6个字符"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm px-3 py-2 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            解锁完整功能
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          我们重视你的隐私，信息仅用于联系和功能解锁
        </p>
      </div>
    </div>
  );
}
