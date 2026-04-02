'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DLE120MAPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  // 移除视差效果，专注于全屏图片展示

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 font-sans text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* 全屏英雄区域 */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/DLE120MA/DLE128ZT1.jpg"
            alt="DLE128MA 植保无人机"
            fill
            className="object-cover w-full h-full"
            priority
            draggable={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* 内容覆盖 */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight text-white">
                DLE128MA
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                油电混合植保无人机 - 落地加满油，即刻起飞
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => {
                    setCurrentVideo('https://cdn.dlengine.com/video/DLE-120MA.mp4');
                    setIsVideoModalOpen(true);
                  }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  观看演示
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 向下滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-sm font-medium">探索产品</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 核心特点 - 油转电技术 */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">油转电技术</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              革命性的油电混合系统，解决传统电动无人机续航痛点
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/DLE120MA/DLE128ZT2.jpg"
                alt="DLE128MA 油转电系统"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">落地加油，即刻起飞</h3>
                <p className="text-gray-700 leading-relaxed">
                  使用普通汽油作为基本动力燃料，解决了电动无人机带来的载药量小、电池寿命短、充电时间长等问题。
                  一次加油可连续喷洒40L药物，作业效率提高2-3倍。
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">油电混合闭环控制</h3>
                <p className="text-gray-700 leading-relaxed">
                  发电机系统采用自动控制配合电池组，组成油电混合闭环控制系统。
                  空中发动机故障时，自动启动备用电池安全返航降落（纯电动飞行时间可达3分钟）。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技术参数 */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">技术规格</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 发动机参数 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                发动机核心
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">发动机类型</span>
                  <span className="font-semibold text-gray-900">水平对置双缸水冷</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">缸径×行程</span>
                  <span className="font-semibold text-gray-900">47mm×35mm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">发动机排量</span>
                  <span className="font-semibold text-gray-900">128cm³</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">发动机重量</span>
                  <span className="font-semibold text-gray-900">6.2Kg（不含附件）</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">发电机功率</span>
                  <span className="font-semibold text-gray-900">7.4KW（0海拔）/8100RPM</span>
                </div>
              </div>
            </div>

            {/* 飞行性能 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-green-600 rounded-full"></div>
                飞行性能
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">起飞重量</span>
                  <span className="font-semibold text-gray-900">可达53KG</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">作业载荷</span>
                  <span className="font-semibold text-gray-900">可达20kg</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">机臂轴距</span>
                  <span className="font-semibold text-gray-900">1900mm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">喷幅宽度</span>
                  <span className="font-semibold text-gray-900">高达8m</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">作业效率</span>
                  <span className="font-semibold text-gray-900">200亩/小时</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 全屏大图 - 核心特点 */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/DLE120MA/DLE128ZT3.jpg"
            alt="DLE128MA 核心特点"
            fill
            className="object-cover w-full h-full"
            draggable={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-4">油转电技术</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  使用普通汽油作为动力燃料，一次加油可连续喷洒40L药物，
                  作业效率提高2-3倍，解决电动无人机续航痛点
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-4">智能控制系统</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  油电混合闭环控制，发动机故障时自动启动备用电池安全返航，
                  纯电动飞行时间可达3分钟
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 全屏大图 - 产品优势 */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/DLE120MA/DLE128ZT4.jpg"
            alt="DLE128MA 产品优势"
            fill
            className="object-cover w-full h-full"
            draggable={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-4">高效作业能力</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  起飞重量可达53KG，作业载荷20kg，喷幅高达8m，
                  每小时可完成200亩作业面积
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-4">智能飞行系统</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  具备航线规划、自主飞行能力，RTK厘米级高精度定位，
                  实现精准航线飞行
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 智能飞行系统 */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">智能飞行系统</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">航线规划</h3>
              <p className="text-gray-600">通过高清地图智能规划航线，系统自动规划喷洒路径</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">精准定位</h3>
              <p className="text-gray-600">RTK厘米级高精度定位系统，实现精准航线飞行</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">安全保护</h3>
              <p className="text-gray-600">失控返航、断桨保护等功能，确保飞行安全</p>
            </div>
          </div>
        </div>
      </section>

      {/* 产品图集 */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">产品展示</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <Image
                src="/images/DLE120MA/DLE128ZT5.jpg"
                alt="DLE128MA 植保无人机"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">产品特点</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">机臂采用可折叠式设计，方便整机装运和转场作业</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">微型泵控制技术和流量控制系统，精确控制喷洒药量</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">油电混合闭环控制系统，发动机故障时自动启动备用电池</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">具备航线规划、自主/半自主飞行能力，操纵简单</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
            开启智能农业新时代
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            DLE128MA植保无人机，为现代农业提供高效、可靠的植保解决方案
          </p>
          <div className="group relative inline-block">
            <button className="px-10 py-5 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 text-lg shadow-lg">
              获取报价
            </button>
            
            {/* 电话悬浮提示 */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-xl p-3 rounded-lg shadow-2xl border border-white/10 min-w-[200px] z-50">
              <div className="flex flex-col space-y-3">
                <a href="tel:13529826090" className="flex items-center group/phone outline-none">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 group-hover/phone:bg-blue-500 transition-colors">
                    <svg className="w-3 h-3 text-blue-400 group-hover/phone:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">飞机</div>
                    <div className="text-sm font-medium text-white group-hover/phone:text-blue-400 transition-colors">13529826090</div>
                  </div>
                </a>
                
                <a href="tel:18313346064" className="flex items-center group/phone outline-none">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 group-hover/phone:bg-blue-500 transition-colors">
                    <svg className="w-3 h-3 text-blue-400 group-hover/phone:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">冲浪板</div>
                    <div className="text-sm font-medium text-white group-hover/phone:text-blue-400 transition-colors">18313346064</div>
                  </div>
                </a>
                
                <a href="tel:19187325509" className="flex items-center group/phone outline-none">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 group-hover/phone:bg-blue-500 transition-colors">
                    <svg className="w-3 h-3 text-blue-400 group-hover/phone:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">发动机</div>
                    <div className="text-sm font-medium text-white group-hover/phone:text-blue-400 transition-colors">19187325509</div>
                  </div>
                </a>
              </div>
              {/* 悬浮提示的小三角 */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-3 h-3 bg-black/80 backdrop-blur-xl rotate-45 border-b border-r border-white/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 视频模态框 */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                src={currentVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
                onEnded={() => setIsVideoModalOpen(false)}
              >
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}