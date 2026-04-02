'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DLE55Page() {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    '/images/rcengine/DLE55/DLE55ZT1.jpg',
    '/images/rcengine/DLE55/DLE55ZT2.jpg',
    '/images/rcengine/DLE55/DLE55ZT3.jpg'
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />

      {/* 产品次级导航 */}
      <div className="sticky top-14 z-40 w-full bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12 items-center text-sm font-medium">
            <span className="text-xl font-bold text-white tracking-tight">DLE55</span>
            <div className="flex space-x-6 text-gray-400">
              <a href="#overview" className="hover:text-white transition">概览</a>
              <a href="#specs" className="hover:text-white transition">技术参数</a>
              <a href="#downloads" className="hover:text-white transition">支持与下载</a>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* 头部 Hero 区域：带缩略图的大图轮播 */}
        <section id="overview" className="relative pt-32 pb-10 flex flex-col items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
            DLE55
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium mb-12 max-w-2xl">
            强劲动力，专业性能。为高端飞行应用而生。
          </p>
          
          <div className="w-full max-w-[1400px] mx-auto select-none">
            {/* 核心产品大图轮播展示区 (现代化重构) */}
            <div className="relative rounded-3xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden aspect-[16/9] mb-8 group">
              {/* 极光背景点缀 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none"></div>

              {/* 交叉淡入淡出图片 */}
              {images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`DLE55 发动机 ${index + 1}`}
                  fill
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  className={`object-cover transition-opacity duration-700 ease-in-out ${
                    activeImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  priority={index === 0}
                  draggable={false}
                />
              ))}

              {/* 左右切换按钮 */}
              <button
                onClick={() => setActiveImage((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:scale-110"
                aria-label="上一张"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:scale-110"
                aria-label="下一张"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* 左下角现代化缩略图导航 (PC端绝对定位左下角，移动端保持底部) */}
              <div className="absolute bottom-6 left-6 z-30 hidden md:flex gap-3">
                {images.map((src, index) => (
                  <button
                    key={src}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-24 h-14 rounded-lg overflow-hidden transition-all duration-300 backdrop-blur-sm bg-black/20 ${
                      activeImage === index
                        ? 'ring-2 ring-white scale-105 shadow-lg'
                        : 'ring-1 ring-white/20 opacity-60 hover:opacity-100 hover:ring-white/50'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`缩略图 ${index + 1}`}
                      fill
                      className="object-cover"
                      draggable={false}
                     sizes="100vw" />
                  </button>
                ))}
              </div>
            </div>

            {/* 移动端缩略图导航 (仅在小屏幕显示) */}
            <div className="flex md:hidden justify-center gap-3 mt-4">
              {images.map((src, index) => (
                <button
                  key={src}
                  onClick={() => setActiveImage(index)}
                  className={`relative w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                    activeImage === index
                      ? 'ring-2 ring-white scale-105'
                      : 'ring-1 ring-white/10 opacity-50'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`缩略图 ${index + 1}`}
                    fill
                    className="object-cover"
                    draggable={false}
                   sizes="100vw" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 参数表格区域 */}
        <section id="specs" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">技术参数</h2>
              <p className="text-gray-400">了解 DLE55 的详细性能指标</p>
            </div>
            
            <div className="bg-[#050505] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                {/* 性能参数 */}
                <div className="p-8 md:p-14 hover:bg-white/[0.02] transition-colors duration-500">
                  <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    核心性能
                  </h3>
                  <dl className="space-y-6">
                    <div className="flex justify-between border-b border-white/5 pb-4 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">性能</dt>
                      <dd className="text-white font-medium text-right">5.5HP/8500rpm</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-4 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">怠速</dt>
                      <dd className="text-white font-medium text-right">1500 rpm</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-4 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">拉力 (海拔100米)</dt>
                      <dd className="text-white font-medium text-right">14.5kg</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-4 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">拉力 (海拔1800米)</dt>
                      <dd className="text-white font-medium text-right">12.8kg</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-4 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">适用螺旋桨规格</dt>
                      <dd className="text-white font-medium text-right">22x8 ; 22x10 ; 23x8 ; 23x10</dd>
                    </div>
                    <div className="flex justify-between pt-2 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">适用火花塞型号</dt>
                      <dd className="text-white font-medium text-right bg-white/10 px-3 py-1 rounded-full text-sm">NGK CM6</dd>
                    </div>
                  </dl>
                </div>

                {/* 规格重量 */}
                <div className="p-8 md:p-14 hover:bg-white/[0.02] transition-colors duration-500">
                  <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3">
                    <div className="p-3 bg-purple-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    规格与重量
                  </h3>
                  <dl className="space-y-6">
                    <div className="flex justify-between border-b border-white/5 pb-4 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">排量</dt>
                      <dd className="text-white font-medium text-right">55.6cm³</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-4 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">缸径 × 行程</dt>
                      <dd className="text-white font-medium text-right">45mm × 35mm</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-4 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">压缩比</dt>
                      <dd className="text-white font-medium text-right">7.6 : 1</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-4 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">润滑比</dt>
                      <dd className="text-white font-medium text-right">30 : 1</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-4 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors mt-1">重量分布</dt>
                      <dd className="text-white font-medium text-right space-y-1">
                        <div className="flex justify-end items-center gap-2"><span className="text-gray-500 text-sm">主机</span> 1330g</div>
                        <div className="flex justify-end items-center gap-2"><span className="text-gray-500 text-sm">排气管</span> 140g</div>
                        <div className="flex justify-end items-center gap-2"><span className="text-gray-500 text-sm">点火器</span> 140g</div>
                      </dd>
                    </div>
                    <div className="flex justify-between pt-2 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">点火器电压</dt>
                      <dd className="text-white font-medium text-right">4.8V - 8.4V</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 尺寸图全宽展示区域 */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">产品尺寸</h2>
            <p className="text-gray-400">精确的工程尺寸图，便于您进行机舱布局规划。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 rounded-[2rem] p-6 border border-white/5 group">
              <Image 
                src="/images/rcengine/DLE55/DLE55cc1.jpg" 
                alt="DLE55 尺寸图 1" 
                width={1200}
                height={800}
                className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="bg-gray-900/50 rounded-[2rem] p-6 border border-white/5 group">
              <Image 
                src="/images/rcengine/DLE55/DLE55cc2.jpg" 
                alt="DLE55 尺寸图 2" 
                width={1200}
                height={800}
                className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="bg-gray-900/50 rounded-[2rem] p-6 border border-white/5 group">
              <Image 
                src="/images/rcengine/DLE55/DLE55cc3.jpg" 
                alt="DLE55 尺寸图 3" 
                width={1200}
                height={800}
                className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="bg-gray-900/50 rounded-[2rem] p-6 border border-white/5 group">
              <Image 
                src="/images/rcengine/DLE55/DLE55cc4.jpg" 
                alt="DLE55 尺寸图 4" 
                width={1200}
                height={800}
                className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* 下载区域 */}
        <section id="downloads" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">技术支持与下载</h2>
              <p className="text-gray-400 text-lg">获取 DLE55 的详细安装说明及三维模型数据，助您快速完成部署。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://cdn.dlengine.com/pdf/DLE55%20USER%20MANUAL.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#111111] hover:bg-gray-800 border border-white/10 p-8 rounded-3xl transition duration-300 group"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-red-500/10 rounded-2xl">
                    <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition mb-1">产品说明书</h4>
                    <p className="text-sm text-gray-500">PDF 格式文档 (User Manual)</p>
                  </div>
                </div>
              </a>

              <a 
                href="https://cdn.dlengine.com/3D/ZIP/DLE55.zip" 
                className="flex items-center justify-between bg-[#111111] hover:bg-gray-800 border border-white/10 p-8 rounded-3xl transition duration-300 group"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-blue-500/10 rounded-2xl">
                    <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition mb-1">3D 模型图纸</h4>
                    <p className="text-sm text-gray-500">ZIP 压缩包 (IGS Format)</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}