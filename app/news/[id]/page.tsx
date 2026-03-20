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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <Link href="/news" className="flex items-center text-gray-600 hover:text-black mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        回到列表
      </Link>

      <article className="space-y-8">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {news.category}
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{news.date}</span>
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">{news.title}</h1>
        </div>

        <div className="prose prose-sm md:prose-base max-w-none">
          {news.content.split('\n').map((paragraph: string, idx: number) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">
                  {paragraph.replace(/^## /, '')}
                </h2>
              );
            }
            if (paragraph.startsWith('###')) {
              return (
                <h3 key={idx} className="text-xl font-semibold mt-6 mb-3">
                  {paragraph.replace(/^### /, '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <li key={idx} className="ml-6 text-gray-700 leading-relaxed">
                  {paragraph.replace(/^- /, '')}
                </li>
              );
            }
            if (paragraph.trim()) {
              return (
                <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </div>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="text-sm text-gray-600">
            <p className="mb-2">文章发布于 {news.date}</p>
            <p>分类：<span className="font-medium text-gray-900">{news.category}</span></p>
          </div>
        </div>
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/news" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回文章列表
        </Link>
      </div>
    </div>
  );
}
