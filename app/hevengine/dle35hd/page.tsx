'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DLE35HDPage() {
  const [activeImage, setActiveImage] = useState(0);

  // 产品图片
  const images = [
    '/images/hevengine/DLE35HD/DLE35HDZT1.jpg',
    '/images/hevengine/DLE35HD/DLE35HDZT2.jpg',
    '/images/hevengine/DLE35HD/DLE35HDZT3.jpg'
  ];

  // 附件图片和标题
  const accessories = [
    {
      title: '散热器水泵和冷却液存储观察窗',
      image: '/images/hevengine/DLE35HD/DLE35HDFJ1.jpg'
    },
    {
      title: '引擎散热器',
      image: '/images/hevengine/DLE35HD/DLE35HDFJ2.jpg'
    },
    {
      title: '食品级硅胶编织管增强蒸汽防爆软管',
      image: '/images/hevengine/DLE35HD/DLE35HDFJ3.jpg'
    },
    {
      title: '油门控制器',
      image: '/images/hevengine/DLE35HD/DLE35HDFJ4.jpg'
    },
    {
      title: '完整的引擎套件',
      image: '/images/hevengine/DLE35HD/DLE35HDFJ5.jpg'
    },
    {
      title: '启发一体',
      image: '/images/hevengine/DLE35HD/DLE35HDFJ6.jpg'
    }
  ];

  // 尺寸图
  const dimensionImage = '/images/hevengine/DLE35HD/DLE35HDcc1.jpg';

  // 发电机参数
  const generatorParams = [
    { name: '类型', value: '三相永磁式发电机' },
    { name: '电压', value: 'AC50V 转 DC50V' },
    { name: '频率', value: '非定频式，随发动机转速改变频率跟随改变' }
  ];

  // 发动机参数
  const engineParams = [
    { name: '类型', value: '单缸水冷' },
    { name: '排量', value: '35cm³' },
    { name: '缸径×行程', value: '38.5mm×30mm' },
    { name: '功率', value: '3.5HP/8500转 功率:2.5KW(0 海拔)' },
    { name: '怠速', value: '5000-6000转' },
    { name: '发动机重量', value: '3.3KG' },
    { name: '冷却系统重量', value: '2KG (包含800ML冷却液）' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 font-sans text-white">
      <Navbar />

      {/* 产品次级导航 */}
      <div className="sticky top-14 z-40 w-full bg-black/90 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center text-sm font-medium">
            <span className="text-2xl font-bold text-white tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DLE35HD</span>
            <div className="flex space-x-8 text-gray-300">
              <a href="#overview" className="hover:text-cyan-400 transition-colors duration-300">概览</a>
              <a href="#specs" className="hover:text-cyan-400 transition-colors duration-300">技术参数</a>
              <a href="#downloads" className="hover:text-cyan-400 transition-colors duration-300">支持与下载</a>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* 现代化产品展示区 */}
        <section id="overview" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {/* 产品图片轮播 - 最大化显示 */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-800/50 border border-gray-700 group w-full">
                {/* 主图轮播 */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  {images.map((src, index) => (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <Image
                        src={src}
                        alt={`DLE35HD 产品图片 ${index + 1}`}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority={index === 0}
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>

                {/* 轮播控制按钮 */}
                <button
                  onClick={() => setActiveImage((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white backdrop-blur-md border border-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50 hover:scale-110"
                  aria-label="上一张"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white backdrop-blur-md border border-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50 hover:scale-110"
                  aria-label="下一张"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* 桌面端缩略图导航 - 左下角 */}
                <div className="absolute bottom-6 left-6 flex gap-3 z-20 hidden md:flex">
                  {images.map((src, index) => (
                    <button
                      key={src}
                      onClick={() => setActiveImage(index)}
                      className={`relative w-16 h-10 rounded-lg overflow-hidden transition-all duration-300 ${activeImage === index ? 'ring-2 ring-cyan-400 scale-105 shadow-lg' : 'ring-1 ring-gray-600 opacity-70 hover:opacity-100'}`}
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
              
              {/* 移动端缩略图导航 - 图片下方 */}
              <div className="flex md:hidden justify-center gap-3 mt-4">
                {images.map((src, index) => (
                  <button
                    key={src}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-16 h-10 rounded-lg overflow-hidden transition-all duration-300 ${activeImage === index ? 'ring-2 ring-cyan-400 scale-105 shadow-lg' : 'ring-1 ring-gray-600 opacity-70 hover:opacity-100'}`}
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

              {/* 产品信息 - 移到轮播图下方 */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-center">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DLE35HD</span>
                    <br />
                    <span className="text-gray-300">油电混动发动机</span>
                  </h1>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto text-center">
                    DLE35HD是一款先进的油电混动发动机，采用单缸水冷设计，提供高效稳定的动力输出。
                    集成三相永磁式发电机，可提供可靠的电力支持，适用于多种应用场景。
                  </p>
                </div>

                {/* 核心特点 - 调整为4列布局 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">高效动力</h3>
                    <p className="text-sm text-gray-400 text-center">3.5HP/8500转，2.5KW功率输出</p>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">电力支持</h3>
                    <p className="text-sm text-gray-400 text-center">集成三相永磁式发电机</p>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">可靠冷却</h3>
                    <p className="text-sm text-gray-400 text-center">高效水冷系统，确保稳定运行</p>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">轻量化设计</h3>
                    <p className="text-sm text-gray-400 text-center">发动机仅重3.3KG，便于安装</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 附件展示区 - 合并到概览部分 */}
            <div className="mt-20">
              <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">产品附件</h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    完整的附件套件，确保发动机的高效安装和稳定运行
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {accessories.map((accessory, index) => (
                    <div 
                      key={index} 
                      className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-xl hover:shadow-cyan-500/10"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={accessory.image}
                          alt={accessory.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          draggable={false}
                         sizes="100vw" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-2">{accessory.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 技术参数区域 */}
        <section id="specs" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">技术参数</h2>
              <p className="text-gray-400">详细的产品规格和性能指标</p>
            </div>
            
            <div className="space-y-12">
              {/* 发电机参数 */}
              <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-8 md:p-14">
                  <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    发电机参数
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {generatorParams.map((param, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-white/5 pb-4">
                        <dt className="text-gray-400">{param.name}</dt>
                        <dd className="text-white font-medium">{param.value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 发动机参数 */}
              <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-8 md:p-14">
                  <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3">
                    <div className="p-3 bg-cyan-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    发动机参数
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {engineParams.map((param, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-white/5 pb-4">
                        <dt className="text-gray-400">{param.name}</dt>
                        <dd className="text-white font-medium">{param.value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 尺寸图 */}
              <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-8 md:p-14">
                  <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3">
                    <div className="p-3 bg-purple-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    产品尺寸
                  </h3>
                  <div className="flex justify-center">
                    <div className="max-w-full">
                      <Image
                        src={dimensionImage}
                        alt="DLE35HD 尺寸图"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain rounded-lg"
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 下载区 */}
        <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-gray-800">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">技术支持与下载</span>
              </h2>
              <p className="text-xl text-gray-400">获取DLE35HD的详细安装说明和3D模型数据</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="https://cdn.dlengine.com/pdf/DLE35HD-USER%20MANUAL-CN.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex items-center gap-6">
                  <div className="p-4 bg-red-500/20 rounded-2xl">
                    <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">产品说明书</h4>
                    <p className="text-sm text-gray-500">PDF文档</p>
                  </div>
                </div>
              </a>

              <a 
                href="https://cdn.dlengine.com/3D/ZIP/DLE35HD.zip" 
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex items-center gap-6">
                  <div className="p-4 bg-blue-500/20 rounded-2xl">
                    <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">3D模型图纸</h4>
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