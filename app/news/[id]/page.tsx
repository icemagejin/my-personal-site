import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import { getNewsArticleById } from '@/lib/newsLoader';
import { notFound } from 'next/navigation';

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const news = getNewsArticleById(params.id);

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/news" className="inline-flex items-center text-gray-600 hover:text-black mb-12 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回列表
        </Link>

        <article className="space-y-8">
          <header className="border-b-2 border-black pb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                {news.category}
              </span>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                <time>{news.date}</time>
              </div>
            </div>
            <h1 className="text-4xl font-bold leading-tight">{news.title}</h1>
          </header>

          <div className="space-y-6 text-gray-800 leading-relaxed">
            {news.content.split('\n').map((paragraph: string, idx: number) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
                    {paragraph.replace(/^## /, '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={idx} className="text-xl font-semibold mt-8 mb-3">
                    {paragraph.replace(/^### /, '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={idx} className="ml-6 text-gray-700 leading-relaxed list-disc">
                    {paragraph.replace(/^- /, '')}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={idx} className="text-gray-700 leading-relaxed text-base">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          <footer className="border-t border-gray-200 pt-8 mt-16">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div>
                发布于 <time className="font-medium text-gray-900">{news.date}</time>
              </div>
              <div>
                分类：<span className="font-medium text-gray-900">{news.category}</span>
              </div>
            </div>
          </footer>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/news" className="inline-flex items-center text-gray-700 hover:text-black transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回文章列表
          </Link>
        </div>
      </div>
    </div>
  );
}
