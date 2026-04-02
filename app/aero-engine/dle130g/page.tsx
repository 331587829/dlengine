'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DLE130GPage() {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    '/images/aero-engine/DLE130g/DLE130SAGZT1.jpg',
    '/images/aero-engine/DLE130g/DLE130SAGZT2.jpg',
    '/images/aero-engine/DLE130g/DLE130SAGZT3.jpg'
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />

      {/* 产品次级导航 */}
      <div className="sticky top-14 z-40 w-full bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12 items-center text-sm font-medium">
            <span className="text-xl font-bold text-white tracking-tight">DLE130电启动发电版</span>
            <div className="flex space-x-6 text-gray-400">
              <a href="#overview" className="hover:text-white transition">概览</a>
              <a href="#specs" className="hover:text-white transition">技术参数</a>
              <a href="#dimensions" className="hover:text-white transition">安装尺寸</a>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* 头部 Hero 区域 */}
        <section id="overview" className="relative pt-24 pb-10 flex flex-col items-center px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
              DLE130G 电启动发电版
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto">
              高性能·强动力·稳定发电。专为无人机飞行器设计。
            </p>
          </div>
          
          <div className="w-full max-w-[1400px] mx-auto select-none mb-16">
            {/* 核心产品大图轮播展示区 */}
            <div className="relative rounded-3xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden aspect-[16/9] mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none"></div>

              {images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`DLE130G 发动机 ${index + 1}`}
                  fill
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  className={`object-cover transition-opacity duration-700 ease-in-out ${
                    activeImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  priority={index === 0}
                  draggable={false}
                />
              ))}

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

          <div className="max-w-6xl mx-auto text-gray-300 space-y-4 leading-relaxed text-lg px-4 text-center mt-8">
            <p>
              DLE130电启动发电版发动机是一款专为各种无人机飞行器设计的高性能发动机。它采用了行星齿轮电启动技术，可快速启动，提高飞行效率。同时，该发动机还具有发电功能，可输出14V 350W的电力，为飞行器提供稳定的能量支持。
            </p>
          </div>

          {/* 核心技术展示 */}
          <div className="mt-12 w-full max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-8 h-auto md:h-[440px]">
              <div className="bg-[#050505] rounded-[2rem] border border-white/5 flex items-center justify-center p-6 overflow-hidden md:w-[67%]">
                <Image 
                  src="/images/aero-engine/DLE130g/DLE130SAGpj1.jpg" 
                  alt="启动电机与齿轮机构" 
                  width={750} 
                  height={440} 
                  className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
              <div className="bg-[#050505] rounded-[2rem] border border-white/5 flex items-center justify-center p-6 overflow-hidden md:w-[33%]">
                <Image 
                  src="/images/aero-engine/DLE130g/DLE130SAGpj2.jpg" 
                  alt="行星齿轮内部结构" 
                  width={365} 
                  height={440} 
                  className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
            </div>
            <div className="max-w-6xl mx-auto text-gray-300 space-y-4 leading-relaxed text-lg px-4 text-center">
              <p>
                DLE130电启动发电版发动机还拥有行星齿轮启动机构，这是一种高效、可靠的启动机构。该机构采用行星齿轮传动方式，能够提供更大的启动力和更平稳的启动过程，同时还具有更长的使用寿命。这种启动机构可以有效降低启动时的负载和振动，减少发动机的损耗和磨损，从而提高发动机的可靠性和稳定性。因此，DLE130电启动发电版发动机不仅具有强大的动力和发电能力，还具有优秀的启动性能，是一款非常实用的飞行器发动机。
              </p>
            </div>
          </div>
        </section>

        {/* 技术参数表格区域 */}
        <section id="specs" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">技术参数</h2>
              <p className="text-gray-400">了解DLE130电启动发电版的详细性能与电气指标</p>
            </div>
            
            <div className="bg-[#050505] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                {/* 性能与规格参数 */}
                <div className="p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-500">
                  <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    基础性能
                  </h3>
                  <dl className="space-y-4">
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">性能</dt>
                      <dd className="text-white font-medium text-right">13HP/8500rpm</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">排量</dt>
                      <dd className="text-white font-medium text-right">130cm³</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">缸径×行程</dt>
                      <dd className="text-white font-medium text-right">47mm × 37.5mm</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">压缩比</dt>
                      <dd className="text-white font-medium text-right">9.2 : 1</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">润滑比</dt>
                      <dd className="text-white font-medium text-right">30 : 1</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">适用螺旋桨</dt>
                      <dd className="text-white font-medium text-right">27×12; 28×10; 28×11; 29×9</dd>
                    </div>
                    <div className="flex justify-between pb-2 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">火花塞型号</dt>
                      <dd className="text-white font-medium text-right bg-white/10 px-3 py-1 rounded-full text-sm">DLE CM6</dd>
                    </div>
                  </dl>
                </div>

                {/* 电气与重量参数 */}
                <div className="p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-500">
                  <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                    <div className="p-3 bg-purple-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    电气与重量
                  </h3>
                  <dl className="space-y-4">
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">启动电机功率</dt>
                      <dd className="text-white font-medium text-right">12V 400W</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">发电机电压</dt>
                      <dd className="text-white font-medium text-right">14.5V</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">发电机功率</dt>
                      <dd className="text-white font-medium text-right">350W/6000rpm</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors mt-1">重量参数</dt>
                      <dd className="text-white font-medium text-right space-y-1">
                        <div className="flex justify-end items-center gap-2"><span className="text-gray-500 text-sm">主机+排气管</span> 4200g</div>
                        <div className="flex justify-end items-center gap-2"><span className="text-gray-500 text-sm">整流器</span> 415g</div>
                        <div className="flex justify-end items-center gap-2"><span className="text-gray-500 text-sm">点火器+火花塞</span> 200g</div>
                        <div className="flex justify-end items-center gap-2"><span className="text-gray-500 text-sm">继电器</span> 160g</div>
                      </dd>
                    </div>
                  </dl>
                </div>

              </div>

              {/* 发电性能曲线表 */}
              <div className="p-8 md:p-12 border-t border-white/10 bg-[#0a0a0a]">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">发电性能转速对照</h3>
                <div className="overflow-x-auto">
                  <table className="w-full max-w-2xl mx-auto text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="py-4 px-6 text-gray-400 font-medium">转速 (rpm)</th>
                        <th className="py-4 px-6 text-gray-400 font-medium">输出电压 (V)</th>
                        <th className="py-4 px-6 text-gray-400 font-medium">输出功率 (W)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-6 text-white">6000</td>
                        <td className="py-4 px-6 text-white">14.5</td>
                        <td className="py-4 px-6 text-white">350W</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-6 text-white">5000</td>
                        <td className="py-4 px-6 text-white">14.5</td>
                        <td className="py-4 px-6 text-white">330W</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-6 text-white">4000</td>
                        <td className="py-4 px-6 text-white">14.5</td>
                        <td className="py-4 px-6 text-white">300W</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-6 text-white">3000</td>
                        <td className="py-4 px-6 text-white">14.5</td>
                        <td className="py-4 px-6 text-gray-500">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 尺寸图展示区 */}
        <section id="dimensions" className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">安装尺寸</h2>
            <p className="text-gray-400">精确的工程图纸，便于安装规划</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-900/50 rounded-[2rem] p-6 border border-white/5 group">
              <Image 
                src="/images/aero-engine/DLE130g/DLE130SAGcc1.jpg" 
                alt="DLE130G 尺寸图" 
                width={1200}
                height={800}
                className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500 rounded-xl bg-white/5"
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
