'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DLE200Page() {
  const [activeImage, setActiveImage] = useState(0);

  // 产品图片
  const images = [
    '/images/aero-engine/dle200/DLE200ZT1.jpg',
    '/images/aero-engine/dle200/DLE200ZT2.jpg',
    '/images/aero-engine/dle200/DLE200lxj.jpg' // 螺旋桨图片
  ];

  // 尺寸图
  const dimensionImages = ['/images/aero-engine/dle200/DLE200cc1.jpg'];

  // 基本参数
  const basicParams = [
    { name: '类型', value: '两冲程' },
    { name: '缸径', value: '55mm' },
    { name: '行程', value: '42mm' },
    { name: '排气量', value: '200CC' },
    { name: '功率', value: '20HP/8000rpm' },
    { name: '压缩比', value: '10:1' },
    { name: '减速比', value: '1:2.7' },
    { name: '传动方式', value: '皮带' },
    { name: '启动方式', value: '电启动' },
    { name: '主机净重（除排气管）', value: '9.5Kg' },
    { name: '排气管重量', value: '2.6Kg' },
    { name: '火花塞', value: 'NGKBR8HS-10' },
    { name: '汽油', value: '93# 、97#' },
    { name: '发电输出', value: '14V 5A' },
    { name: '螺旋桨', value: '1220mm' },
  ];

  // 安装扭矩参数
  const torqueParams = [
    { component: '火花塞', thread: 'M14', kgm: '2.4', nm: '24' },
    { component: '螺旋桨紧固螺丝', thread: 'M8', kgm: '2.5', nm: '25' },
    { component: '汽缸紧固螺丝', thread: 'M6', kgm: '1', nm: '10' },
    { component: '曲轴箱紧固螺丝', thread: 'M6', kgm: '1.5', nm: '15' },
    { component: '曲轴箱紧固螺丝', thread: 'M8', kgm: '2', nm: '20' },
    { component: '排气口螺丝', thread: 'M6', kgm: '1.5', nm: '15' },
    { component: '偏心轴轴向拉紧螺丝', thread: 'M8', kgm: '2', nm: '20' },
    { component: '偏心轴径向固定螺丝', thread: 'M8', kgm: '2.3', nm: '23' },
    { component: '化油器紧固螺丝', thread: 'M5', kgm: '0.5', nm: '5' },
    { component: '曲轴前端螺母', thread: 'M12', kgm: '4', nm: '40' },
    { component: '曲轴后端螺母', thread: 'M10', kgm: '3.2', nm: '32' },
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />

      {/* 产品次级导航 */}
      <div className="sticky top-14 z-40 w-full bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12 items-center text-sm font-medium">
            <span className="text-xl font-bold text-white tracking-tight">DLE200</span>
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
              src="/images/aero-engine/dle200/DLE200ZTLDY.jpg"
              alt="DLE200 动力伞发动机"
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
              DLE200
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-medium mb-8 drop-shadow-md max-w-3xl leading-relaxed">
              创新涂层工艺汽缸,定制碳纤维螺旋桨,航空级减震结构,行星齿轮启动机构
            </p>
          </div>
        </section>
        
        {/* 产品特点和其他内容 */}
        <section className="relative bg-black z-10">
          <div className="max-w-[1600px] mx-auto px-4 py-16">

            {/* 产品特点介绍 */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">产品特点</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">创新涂层工艺汽缸</h3>
                  <p className="text-gray-400">采用先进涂层技术，提高耐磨性和散热性能，延长发动机寿命</p>
                </div>
                <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">定制碳纤维螺旋桨</h3>
                  <p className="text-gray-400">轻量化碳纤维材质，提供高效动力传输和稳定飞行性能</p>
                </div>
                <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">航空级减震结构</h3>
                  <p className="text-gray-400">专业减震设计，有效降低振动，提升飞行舒适度和设备稳定性</p>
                </div>
                <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">行星齿轮启动机构</h3>
                  <p className="text-gray-400">高效行星齿轮传动，提供可靠启动性能和长使用寿命</p>
                </div>
              </div>
            </div>

            {/* 产品实物主图展示 */}
            <div className="w-full max-w-[1400px] mx-auto select-none mb-20">
              <div className="relative rounded-3xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden aspect-[16/9] mb-8 group">
                {/* 交叉淡入淡出图片 */}
                {images.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`DLE200 产品图片 ${index + 1}`}
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
                    基本参数
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {basicParams.map((param, index) => (
                      <div key={index} className="flex justify-between border-b border-white/5 pb-4 group">
                        <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">{param.name}</dt>
                        <dd className="text-white font-medium text-right">{param.value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 安装扭矩参数 */}
              <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-8 md:p-14">
                  <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3">
                    <div className="p-3 bg-purple-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    主要紧固件安装扭矩
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left py-4 px-6 text-gray-300 font-medium">部件名称</th>
                          <th className="text-left py-4 px-6 text-gray-300 font-medium">螺纹规格</th>
                          <th className="text-right py-4 px-6 text-gray-300 font-medium">Kg.m</th>
                          <th className="text-right py-4 px-6 text-gray-300 font-medium">n.m</th>
                        </tr>
                      </thead>
                      <tbody>
                        {torqueParams.map((param, index) => (
                          <tr key={index} className="border-b border-white/10 hover:bg-white/[0.02] transition-colors">
                            <td className="py-4 px-6 text-gray-400">{param.component}</td>
                            <td className="py-4 px-6 text-gray-400">{param.thread}</td>
                            <td className="py-4 px-6 text-right text-white">{param.kgm}</td>
                            <td className="py-4 px-6 text-right text-white">{param.nm}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
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
          
          <div className="grid grid-cols-1 gap-8">
            {dimensionImages.map((src, index) => (
              <div key={index} className="bg-gray-900/50 rounded-[2rem] p-8 border border-white/5 group">
                <Image 
                  src={src} 
                  alt="DLE200 尺寸图" 
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 下载区 */}
        <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">技术支持与下载</h2>
              <p className="text-gray-400 text-lg">获取DLE200的详细安装说明和3D模型数据。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="https://cdn.dlengine.com/pdf/DLE200%20USER%20MANUAL.pdf" 
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
                href="https://cdn.dlengine.com/3D/ZIP/DLE200.zip" 
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