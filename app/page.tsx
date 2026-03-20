'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, GraduationCap, Mail, MessageSquare, Map, Newspaper } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="flex items-start gap-8">
            <div className="relative w-32 h-32 flex-shrink-0">
              <Image
                src="/b643690e3574c28204320bd326324899.jpeg"
                alt="四袋敷尼"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="pt-2">
              <h1 className="text-4xl font-bold mb-2">四袋敷尼</h1>
              <p className="text-gray-600 text-lg">Stephanie J</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Briefcase className="w-5 h-5 mt-1 flex-shrink-0 text-gray-700" />
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">职业概况</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <span className="font-medium">现通义实验室产品负责人</span> - 擅长 AI2C、AI2B、MAAS 等产品和规模化运营
                  </p>
                  <p>
                    <span className="font-medium">前支付宝产品运营负责人</span> - 线下线上数字化 / 智能服务
                  </p>
                  <p>
                    <span className="font-medium">前 Lazada 产品运营负责人</span> - 跨境电商第一代实践者
                  </p>
                  <p>
                    <span className="font-medium">前淘宝推荐/导购业务负责人 / 双11产品负责人</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-lg">核心能力</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-medium">产品管理</p>
                  <p className="text-sm text-gray-600">超大型产品架构和策略落地</p>
                </div>
                <div>
                  <p className="font-medium">业务运营</p>
                  <p className="text-sm text-gray-600">规模化 / 数字化商业落地</p>
                </div>
                <div>
                  <p className="font-medium">AIGC</p>
                  <p className="text-sm text-gray-600">模型在各行业落地实践</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <GraduationCap className="w-5 h-5 mt-1 flex-shrink-0 text-gray-700" />
              <div>
                <h3 className="font-semibold mb-3 text-lg">教育背景</h3>
                <p className="text-gray-700">同济大学 - 建筑与城市规划学院</p>
              </div>
            </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-gray-700" />
                <div>
                  <h3 className="font-semibold mb-3 text-lg">联系方式</h3>
                  <p className="text-gray-700 mb-4">icemagejin@163.com</p>
                  <div className="relative w-32 h-32 border border-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/IMG_0785.jpeg"
                      alt="微信二维码"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="font-semibold mb-6 text-lg">核心经历</h3>
              <div className="space-y-6 text-sm">
                <div>
                  <p className="font-medium text-base mb-1">阿里巴巴 - 通义实验室</p>
                  <p className="text-gray-600 mb-1">2024/01 - 至今</p>
                  <p className="text-gray-700">产品负责人 | 15-35人团队</p>
                </div>
                <div>
                  <p className="font-medium text-base mb-1">蚂蚁集团 - 支付宝</p>
                  <p className="text-gray-600 mb-1">2019/1 - 2021/08</p>
                  <p className="text-gray-700">支付宝 APP 产品及运营负责人 | 90+人团队</p>
                </div>
                <div>
                  <p className="font-medium text-base mb-1">阿里巴巴 - 淘宝/Lazada</p>
                  <p className="text-gray-600 mb-1">2014/11 - 2019/01</p>
                  <p className="text-gray-700">资深产品专家 (P9) | 50-110+人团队</p>
                </div>
              </div>
            </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-lg">工作亮点</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>主导 Qwen AI 应用产品设计与运营，日活突破百万</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>负责 Wan 视觉生成与视频创作平台，技术国内领先</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>支付宝本地生活平台化，日活从百万到千万跨越</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span>手淘推荐体系建设，覆盖从百万到亿级用户</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-lg">技能标签</h3>
            <div className="flex flex-wrap gap-2">
              {['产品战略', 'AI 产品', '团队管理', 'ToC 运营', '出海管理', '大模型应用'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-lg">工具</h3>
            <div className="space-y-3">
              <Link
                href="/chat"
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
              >
                <MessageSquare className="w-5 h-5 text-gray-700" />
                <div>
                  <p className="font-medium text-sm group-hover:text-black">产品拆解</p>
                  <p className="text-xs text-gray-500">AI 产品分析与思维导图生成</p>
                </div>
              </Link>

              <Link
                href="/map"
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
              >
                <Map className="w-5 h-5 text-gray-700" />
                <div>
                  <p className="font-medium text-sm group-hover:text-black">思维导图</p>
                  <p className="text-xs text-gray-500">可视化知识结构工具</p>
                </div>
              </Link>

              <Link
                href="/news"
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
              >
                <Newspaper className="w-5 h-5 text-gray-700" />
                <div>
                  <p className="font-medium text-sm group-hover:text-black">AI 资讯</p>
                  <p className="text-xs text-gray-500">最新 AI 行业动态</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
