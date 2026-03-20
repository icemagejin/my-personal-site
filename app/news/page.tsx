import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { getNewsArticles } from '@/lib/newsLoader';

export default function NewsPage() {
  const newsItems = getNewsArticles().slice(0, 10);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">行业动态</h1>
        <p className="text-gray-600 text-lg">记录产品思考与行业洞察</p>
      </div>

      <div className="space-y-6">
        {newsItems.map((news) => {
          const summary = news.content.substring(0, 150).replace(/[#*\n]/g, ' ').trim() + '...';

          return (
            <Link key={news.id} href={`/news/${news.id}`}>
              <article className="group cursor-pointer">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
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

                  <h2 className="text-lg font-semibold group-hover:underline transition-all">
                    {news.title}
                  </h2>

                  <p className="text-gray-700 leading-relaxed text-sm">
                    {summary}
                  </p>

                  <div className="flex items-center text-gray-700 font-medium text-sm gap-2 group-hover:gap-3 transition-all">
                    阅读全文
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="border-b border-gray-200 mt-6"></div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
