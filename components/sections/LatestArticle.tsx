'use client';

import React, { useState } from 'react';
import { useLocale } from '@/lib/i18n/hooks';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export const LatestArticle: React.FC = () => {
  const { locale } = useLocale();
  const [posts] = useState<Article[]>([
    {
      id: '1',
      title: locale === 'en' ? 'DL Engine Launches New Aviation Engine Series' : 'DL Engine 发布新一代航空发动机系列',
      excerpt: locale === 'en' 
        ? 'We are excited to announce the launch of our new aviation engine series with enhanced performance and reliability.' 
        : '我们很高兴地宣布推出全新版本的航空发动机系列，提供更强大的性能和可靠性。',
      slug: 'new-aviation-engine-series',
      date: '2024-01-15',
      featuredImage: {
        node: {
          sourceUrl: '/images/placeholder.jpg',
          altText: 'Aviation Engine'
        }
      }
    },
    {
      id: '2',
      title: locale === 'en' ? 'Best Practices for Aircraft Engine Maintenance' : '飞机发动机维护的最佳实践',
      excerpt: locale === 'en'
        ? 'Learn how to maintain aircraft engines properly to ensure optimal performance and longevity.'
        : '了解如何正确维护飞机发动机，确保最佳性能和长久使用寿命。',
      slug: 'aircraft-engine-maintenance-best-practices',
      date: '2024-01-10',
      featuredImage: {
        node: {
          sourceUrl: '/images/placeholder.jpg',
          altText: 'Engine Maintenance'
        }
      }
    }
  ]);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {locale === 'en' ? 'Latest News & Insights' : '最新动态与技术分享'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === 'en' ? 'Stay updated with our latest news and technical insights' : '了解我们的最新动态和技术分享'}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Featured Image */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                <div className="text-6xl text-primary-600">📝</div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <time className="text-sm text-gray-500 mb-2 block">
                  {new Date(post.date).toLocaleDateString(locale === 'en' ? 'en-US' : 'zh-CN')}
                </time>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt || (locale === 'en' ? 'This article introduces our latest technology and industry insights.' : '这篇文章介绍了我们的最新技术和行业见解。')}
                </p>
                
                {/* Read More */}
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform duration-200">
                  {locale === 'en' ? 'Read More' : '阅读更多'}
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            {locale === 'en' ? 'View All Articles' : '查看所有文章'}
          </button>
        </div>
      </div>
    </section>
  );
};