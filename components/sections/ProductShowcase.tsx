'use client';

import React from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export const ProductShowcase: React.FC = () => {

  const products: Product[] = [
    {
      id: '1',
      name: '航空发动机',
      description: '高性能航空发动机，为各类飞行器提供可靠动力',
      image: '/images/products/aviation-engine.jpg',
      features: ['高性能', '高可靠性', '低油耗', '长寿命']
    },
    {
      id: '2',
      name: '无人机发动机',
      description: '专为无人机设计的轻量化发动机，提供稳定动力输出',
      image: '/images/products/drone-engine.jpg',
      features: ['轻量化', '高功率密度', '低噪音', '易维护']
    },
    {
      id: '3',
      name: '动力冲浪板发动机',
      description: '水上运动专用发动机，提供强劲动力和稳定性能',
      image: '/images/products/jetboard-engine.jpg',
      features: ['防水设计', '高扭矩', '快速响应', '耐用性强']
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            产品展示
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            探索DL Engine的各类高性能发动机产品
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Product Icon */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 group-hover:shadow-lg">
                  了解更多
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};