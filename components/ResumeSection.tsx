'use client';

import Image from 'next/image';
import { Briefcase, GraduationCap, Mail } from 'lucide-react';

export default function ResumeSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-8">
          <div className="flex items-center gap-6 md:gap-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
              <Image
                src="/b643690e3574c28204320bd326324899.jpeg"
                alt="四袋敷尼"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-1">四袋敷尼</h1>
              <p className="text-gray-600 text-base md:text-lg">Stephanie J</p>
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-start space-x-3">
              <Briefcase className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">职业概况</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  现任阿里巴巴通义实验室产品负责人，前潮玩公司 COO，曾任一线大厂头部三大 APP 产品负责人，第一代出海管理团队成员。对大模型前瞻和趋势以及企业落地都有丰富的经验。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <GraduationCap className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">教育背景</h3>
                <p className="text-gray-700 text-sm md:text-base">同济大学 - 建筑与城市规划学院</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">联系方式</h3>
                <p className="text-gray-700 mb-3 text-sm md:text-base">icemagejin@163.com</p>
                <div className="relative w-28 h-28 md:w-32 md:h-32 border border-gray-200 rounded-lg overflow-hidden">
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

          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-semibold mb-4">核心经历</h3>
            <div className="space-y-4 text-xs md:text-sm text-gray-700">
              <div>
                <p className="font-medium">阿里巴巴 - 通义实验室 (2024/01 - 至今)</p>
                <p className="text-gray-600">产品负责人 | 15-35人团队</p>
              </div>
              <div>
                <p className="font-medium">蚂蚁集团 - 支付宝 (2019/1 - 2021/08)</p>
                <p className="text-gray-600">支付宝 APP 产品及运营负责人 | 90+人团队</p>
              </div>
              <div>
                <p className="font-medium">阿里巴巴 - 淘宝/Lazada (2014/11 - 2019/01)</p>
                <p className="text-gray-600">资深产品专家 (P9) | 50-110+人团队</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="border-l-2 border-gray-300 pl-6 py-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">工作亮点</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>主导 Qwen AI 应用产品设计与运营，日活突破百万</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>负责 Wan 视觉生成与视频创作平台，技术国内领先</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>支付宝本地生活平台化，日活从百万到千万跨越</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>手淘推荐体系建设，覆盖从百万到亿级用户</span>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-gray-300 pl-6 py-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">技能标签</h3>
              <div className="flex flex-wrap gap-2">
                {['产品战略', 'AI 产品', '团队管理', 'ToC 运营', '出海管理', '大模型应用'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
