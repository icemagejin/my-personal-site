import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const newsData: Record<string, any> = {
  '1': {
    id: 1,
    title: 'AI 原生产品设计的五个关键原则',
    date: '2024-03-15',
    category: '产品思考',
    readTime: 8,
    image: 'https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `## 引言

在大模型时代，我们需要重新思考产品设计的本质。AI Native 产品不仅仅是将 AI 能力作为一个功能模块，而是需要从根本上改变用户与产品互动的方式。

## 原则一：交互优先于功能

传统产品设计强调功能完整性，但 AI Native 产品应该将用户体验放在首位。通过自然语言对话、多模态交互等新的交互方式，让用户能够更直观地与 AI 进行沟通。

我们在设计千问 App 时，特别注重了对话体验的设计。不仅是简单的聊天框，而是通过上下文理解、智能补全等功能，让用户感受到真正的智能化体验。

## 原则二：能力透明化

用户需要理解 AI 能做什么，不能做什么。在产品设计中，我们应该清晰地传达 AI 的能力边界。

比如在 AI Notebook 功能中，我们明确标示了哪些内容是由 AI 生成的，同时提供了用户编辑和优化的空间。这种透明化的设计能够建立用户信任。

## 原则三：人机协作而非替代

最好的 AI 产品应该是人机协作的产物。AI 提供建议和创意，用户进行判断和优化。这样既充分发挥了 AI 的高效性，又保留了人的创意和判断力。

在视觉生成领域，我们设计了多个反馈环节，用户可以不断迭代和优化 AI 生成的内容。

## 原则四：场景深度优于覆盖广度

与其覆盖所有可能的场景，不如在特定场景中做到极致。深度的场景理解能够带来更好的用户体验。

比如在数字人对话功能中，我们重点关注在客服、教育等场景的深度优化，而不是试图覆盖所有可能的应用场景。

## 原则五：数据驱动的持续优化

AI 产品的迭代速度应该比传统产品更快。通过收集用户交互数据，我们可以不断优化模型的输出质量。

在我们的实践中，通过用户反馈、A/B 测试等手段，我们不断优化模型参数和产品设计，最终实现了日活突破百万的成果。

## 总结

AI Native 产品的设计是一个全新的挑战，需要我们重新审视产品设计的基本原则。通过强调交互、透明化能力、促进人机协作、深化场景理解和数据驱动优化，我们可以设计出真正意义上的 AI Native 产品。`
  },
  '2': {
    id: 2,
    title: '从千问到 Wan：视觉生成模型的产品化之路',
    date: '2024-03-10',
    category: '技术洞察',
    readTime: 10,
    image: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `## 项目背景

视觉生成模型是当前 AI 领域最具潜力的方向之一。从静态图像生成到动态视频生成，我们见证了这个技术领域的快速演进。

## 技术进化的历程

### 第一代：基础文本到图像生成
最初的视觉生成模型主要集中在文本到图像的转换。这个阶段的主要挑战包括模型的稳定性和生成质量。

### 第二代：多模态输入
我们逐步引入了图像、视频等多种输入形式，使得模型能够理解更复杂的用户需求。

### 第三代：高保真视频生成
在 Wan 项目中，我们实现了从文本到高保真视频的直接生成，这标志着视觉生成技术达到了一个新的高度。

## 产品化的关键要素

### 用户体验设计
- 简化了操作流程，让非专业用户也能使用
- 提供了丰富的预设和模板
- 实时反馈和预览功能

### 性能优化
- 通过模型压缩和量化，实现了更快的生成速度
- 优化了内存占用，支持移动设备部署

### 商业模式创新
- 采用按需付费的模式
- 提供企业级解决方案
- 建立了内容创作者生态

## 竞争优势分析

相比于 Sora，我们的 Wan 模型在以下方面有明显优势：

1. **本地化优化**：针对中文内容的生成进行了专门优化
2. **实时性**：生成速度更快，用户体验更好
3. **成本**：通过技术优化实现了更低的成本
4. **生态**：拥有更完善的内容创作者生态

## 未来展望

视觉生成技术还有巨大的发展空间。我们的目标是：

- 进一步提升生成质量和多样性
- 支持更长时间的视频生成
- 实现实时交互式生成
- 构建开放的平台生态`
  },
  '3': {
    id: 3,
    title: '出海产品本地化的实战经验',
    date: '2024-03-05',
    category: '国际化',
    readTime: 7,
    image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `## 出海的第一课：理解本地市场

在 Lazada 的实战经历中，我们深刻认识到每个市场都有其独特的特点。泰国的用户行为与印度尼西亚的用户完全不同，而菲律宾又有自己的特色。

### 市场调研的重要性

我们投入了大量时间进行市场调研，包括：
- 用户访谈和问卷调查
- 竞争对手分析
- 文化因素研究
- 支付方式和物流特点分析

## 本地化的核心要素

### 语言本地化
不仅仅是翻译，而是文化适配。同样的表达在不同文化中可能有完全不同的含义。

### 支付方式本地化
东南亚市场有其独特的支付习惯。我们需要支持：
- 各国本地的移动支付方案
- 现金到付（COD）服务
- 多种银行卡支付方式
- 分期付款选项

### 物流体系适配
物流在电商中至关重要。我们建立了针对各国的本地物流合作网络，确保快速可靠的配送。

### 产品体验的文化适配
UI 设计、功能优先级、营销策略都需要根据本地市场进行调整。

比如在印度尼西亚市场，我们发现用户更关注商品的评价和卖家的信誉，因此我们在设计中强化了这些信息的展示。

## 组织和团队建设

要做好本地化，需要有本地的团队。我们在各个国家都建立了专业的产品、运营和技术团队，他们深刻理解本地市场。

### 人才招聘的挑战
在陌生的市场找到合适的人才并不容易。我们采取了以下策略：
- 与本地大学建立合作关系
- 吸引海外留学生回国
- 建立完善的人才培训体系

### 团队协作
来自不同国家、不同文化背景的团队协作也有挑战。我们通过定期的培训和文化融合活动，建立了高效的协作机制。

## 数据驱动的决策

在出海过程中，数据是我们最好的老师。我们建立了完善的数据分析体系，监控关键指标的变化，并据此快速调整策略。

## 经验教训

### 坚持长期投入
出海不是一蹴而就的过程。成功的本地化需要长期的投入和坚持。

### 尊重本地文化
强行输出总部的策略往往会失败。尊重本地文化，融合本地特色，才能获得用户的认可。

### 快速学习和迭代
在新市场中，我们需要比在本土市场更快地学习和迭代。每一个失败都是宝贵的学习机会。

### 构建本地生态
长期成功的关键在于构建本地的生态系统，让本地的商家、物流商、支付商等都能从中获益。`
  }
};

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const news = newsData[params.id];

  if (!news) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Link href="/news" className="flex items-center text-gray-600 hover:text-black mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          回到列表
        </Link>
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">文章未找到</p>
        </div>
      </div>
    );
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
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{news.date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{news.readTime} 分钟阅读</span>
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">{news.title}</h1>

          <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-8">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>
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
