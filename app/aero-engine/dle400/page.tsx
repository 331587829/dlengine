'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DLE400Page() {
  const [activeImage, setActiveImage] = useState(0);

  // 产品图片
  const images = [
    '/images/aero-engine/dle400/DLE400ZT1.jpg',
    '/images/aero-engine/dle400/DLE400ZT2.jpg',
    '/images/aero-engine/dle400/DLE400ZT3.jpg'
  ];

  // 尺寸图
  const dimensionImages = [
    '/images/aero-engine/dle400/DLE400cc1.jpg'
  ];



  // 技术参数
  const technicalParams = [
    { name: '怠速', value: '1100RPM' },
    { name: '缸径 × 行程', value: '55mm × 42mm' },
    { name: '排量', value: '400cm³' },
    { name: '螺旋桨', value: '36 × 16 ：34 × 16' },
    { name: '功率', value: '40Hp' },
    { name: '启动方式', value: '电启动' },
    { name: '发电机输出电压', value: 'DC 14V' },
    { name: '整机重量', value: '14.5Kg' },
    { name: '整流器重量', value: '0.415Kg' },
    { name: '压缩比', value: '10 ：1' },
    { name: '火花塞', value: 'NGK BPMR8Y' },
    { name: '燃油比', value: '40 ：1' },
    { name: '点火器电压', value: '8.4 -14V' },
    { name: '100海拔拉力', value: '65Kg' },
    { name: '1500海拔拉力', value: '57Kg' },
    { name: '启动电机功率', value: '24V  400W' },
    { name: '发电机功率', value: '400W/5500rpm' },
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />

      {/* 产品次级导航 */}
      <div className="sticky top-14 z-40 w-full bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12 items-center text-sm font-medium">
            <span className="text-xl font-bold text-white tracking-tight">DLE400</span>
            <div className="flex space-x-6 text-gray-400">
              <a href="#overview" className="hover:text-white transition">概览</a>
              <a href="#specs" className="hover:text-white transition">技术参数</a>
              <a href="#downloads" className="hover:text-white transition">支持与下载</a>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* 全屏横幅落地页 */}
        <section id="overview" className="relative w-full h-screen flex flex-col items-center justify-start pt-32 md:pt-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/aero-engine/dle400/DLE400ZTLDY.jpg"
              alt="DLE400 发动机"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              draggable={false}
            />
            {/* 渐变遮罩，确保文字可读性 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
              DLE400
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-medium mb-8 drop-shadow-md max-w-3xl leading-relaxed">
              DLE400结构紧凑，功率强大<br />
              400W永磁发电机，稳定电源满足设备用电需求<br />
              集轻量，高性能，可靠性于一体
            </p>
          </div>
        </section>
        
        {/* 产品特点和其他内容 */}
        <section className="relative bg-black z-10">
          <div className="max-w-[1600px] mx-auto px-4 py-16">

            {/* 产品实物主图展示 */}
            <div className="w-full max-w-[1400px] mx-auto select-none mb-20">
              <div className="relative rounded-3xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden aspect-[16/9] mb-8 group">
                {/* 交叉淡入淡出图片 */}
                {images.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`DLE400 产品图片 ${index + 1}`}
                    fill
                    sizes="(max-width: 1400px) 100vw, 1400px"
                    className={`object-cover transition-opacity duration-700 ease-in-out ${activeImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
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

                {/* 左下角现代化缩略图导航 */}
                <div className="absolute bottom-6 left-6 z-30 hidden md:flex gap-3">
                  {images.map((src, index) => (
                    <button
                      key={src}
                      onClick={() => setActiveImage(index)}
                      className={`relative w-24 h-14 rounded-lg overflow-hidden transition-all duration-300 backdrop-blur-sm bg-black/20 ${activeImage === index ? 'ring-2 ring-white scale-105 shadow-lg' : 'ring-1 ring-white/20 opacity-60 hover:opacity-100 hover:ring-white/50'}`}
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

              {/* 移动端缩略图导航 */}
              <div className="flex md:hidden justify-center gap-3 mt-4">
                {images.map((src, index) => (
                  <button
                    key={src}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${activeImage === index ? 'ring-2 ring-white scale-105' : 'ring-1 ring-white/10 opacity-50'}`}
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
          </div>
        </section>

        {/* 尺寸图全宽展示区 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">产品尺寸</h2>
            <p className="text-gray-400">精确的工程图纸，便于安装规划。</p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-gray-900/50 rounded-[2rem] p-8 border border-white/5 max-w-full">
              <img 
                src="/images/aero-engine/dle400/DLE400cc1.jpg" 
                alt="DLE400 尺寸图" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* 技术参数表格区域 */}
        <section id="specs" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">技术参数</h2>
              <p className="text-gray-400">详细的产品规格和性能指标</p>
            </div>
            
            <div className="space-y-12">
              {/* 基本参数 */}
              <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-8 md:p-14">
                  <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    技术参数
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technicalParams.map((param, index) => (
                      <div key={index} className="flex justify-between border-b border-white/5 pb-4 group">
                        <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">{param.name}</dt>
                        <dd className="text-white font-medium text-right">{param.value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 下载区 */}
        <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">技术支持与下载</h2>
              <p className="text-gray-400 text-lg">获取DLE400的详细安装说明和3D模型数据。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="https://cdn.dlengine.com/pdf/DLE400%20USER%20MANUAL.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#111111]/60 backdrop-blur-lg hover:bg-gray-800/60 border border-white/10 p-8 rounded-3xl transition duration-300 group"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-red-500/10 rounded-2xl">
                    <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition mb-1">产品说明书</h4>
                    <p className="text-sm text-gray-500">PDF文档</p>
                  </div>
                </div>
              </a>

              <a 
                href="https://cdn.dlengine.com/3D/ZIP/DLE400.zip" 
                className="flex items-center justify-between bg-[#111111]/60 backdrop-blur-lg hover:bg-gray-800/60 border border-white/10 p-8 rounded-3xl transition duration-300 group"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-blue-500/10 rounded-2xl">
                    <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition mb-1">3D模型图纸</h4>
                    <p className="text-sm text-gray-500">ZIP压缩包 (IGS格式)</p>
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