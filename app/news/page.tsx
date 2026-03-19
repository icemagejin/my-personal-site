import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'AI 原生产品设计的五个关键原则',
    date: '2024-03-15',
    category: '产品思考',
    summary: '探讨如何在大模型时代设计真正的 AI Native 产品，而非简单的功能叠加。',
    readTime: 8,
    image: 'https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: '从千问到 Wan：视觉生成模型的产品化之路',
    date: '2024-03-10',
    category: '技术洞察',
    summary: '分享视觉生成模型从技术到产品的完整历程，以及如何超越竞争对手。',
    readTime: 10,
    image: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: '出海产品本地化的实战经验',
    date: '2024-03-05',
    category: '国际化',
    summary: '基于 Lazada 的实战经验，分享跨国产品本地化的关键要素。',
    readTime: 7,
    image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function NewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">行业动态</h1>
        <p className="text-gray-600">记录产品思考与行业洞察</p>
      </div>

      <div className="space-y-8">
        {newsItems.map((news) => (
          <Link key={news.id} href={`/news/${news.id}`}>
            <article className="group cursor-pointer">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {news.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{news.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{news.readTime} 分钟</span>
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-semibold mb-3 group-hover:underline transition-all">
                    {news.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {news.summary}
                  </p>

                  <div className="flex items-center text-gray-700 font-medium text-sm gap-2 group-hover:gap-3 transition-all">
                    阅读全文
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 my-8 md:my-0 md:mt-8"></div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
