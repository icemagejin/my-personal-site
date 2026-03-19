'use client';

import { MapPin, Star, Clock, Users } from 'lucide-react';

const restaurantCategories = [
  { icon: '🍜', label: '特色小吃', desc: '本地特色美食' },
  { icon: '☕', label: '咖啡馆', desc: '文艺休闲' },
  { icon: '🍰', label: '甜品店', desc: '甜蜜滋味' },
  { icon: '🍱', label: '日料', desc: '精致日餐' },
  { icon: '🥘', label: '西餐', desc: '异国风味' },
  { icon: '🍲', label: '粤菜', desc: '传统粤味' },
];

export default function MapPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">美食地图</h1>
        <p className="text-gray-600">发现上海的美食瑰宝</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
        {restaurantCategories.map((category, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all h-full">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{category.label}</h3>
              <p className="text-sm text-gray-600">{category.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8 md:p-12 mb-12">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center border-3 border-gray-200">
              <MapPin className="w-16 h-16 md:w-20 md:h-20 text-gray-400" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white text-xl">🍽️</span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">美食地图探索中</h2>
            <p className="text-gray-600 max-w-xl text-sm md:text-base">
              正在整理上海最值得去的餐厅、小吃和咖啡馆。即将为你呈现精心挑选的美食地点，包括用户评分、营业时间和特色推荐。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-8">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <Star className="w-6 h-6 text-gray-900 mx-auto mb-2" />
              <p className="font-medium text-sm">高分推荐</p>
              <p className="text-xs text-gray-600">4.5 分以上</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <Clock className="w-6 h-6 text-gray-900 mx-auto mb-2" />
              <p className="font-medium text-sm">营业时间</p>
              <p className="text-xs text-gray-600">即时查看</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <Users className="w-6 h-6 text-gray-900 mx-auto mb-2" />
              <p className="font-medium text-sm">用户点评</p>
              <p className="text-xs text-gray-600">真实评价</p>
            </div>
          </div>

          <div className="mt-8 p-4 md:p-6 bg-white border border-gray-200 rounded-lg max-w-2xl">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold">待上线功能：</span><br />
              ✨ 根据美食类型筛选<br />
              ✨ 查看真实用户评分和点评<br />
              ✨ 实时营业状态和营业时间<br />
              ✨ 地图定位和导航<br />
              ✨ 图片展示和菜单预览
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>敬请期待 美食探索的上线</p>
      </div>
    </div>
  );
}
