'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DLE70MUPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  // 产品特点数据
  const features = [
    {
      title: "5小时长续航",
      description: "燃油动力系统，彻底解决电池充电时间长、飞行时间短的问题，一次加油可连续飞行5小时",
      icon: "⏱️"
    },
    {
      title: "专业吊舱系统",
      description: "30TIR-50双光红外摄像头，30倍高清变焦镜头，支持热成像和温度测量功能",
      icon: "📷"
    },
    {
      title: "智能飞行控制",
      description: "双处理器冗余设计，IMU传感器，RTK厘米级定位精度，确保飞行稳定性和安全性",
      icon: "🧠"
    },
    {
      title: "安全可靠",
      description: "故障返航、失控保护、ADS-B芯片，多重安全保障系统确保飞行安全",
      icon: "🛡️"
    }
  ];

  // 技术参数数据
  const specifications = [
    { label: "最大起飞重量", value: "42kg（零海拔）" },
    { label: "裸机重量", value: "23kg" },
    { label: "最大额外负载", value: "10kg（零海拔）" },
    { label: "定位精度", value: "RTK: 0.025m" },
    { label: "最大飞行时间", value: "5小时" },
    { label: "最大信号距离", value: "≥15km" },
    { label: "图传分辨率", value: "≥1080p高清" },
    { label: "防护等级", value: "IP43" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 font-sans text-white overflow-x-hidden">
      <Navbar />

      {/* 全屏英雄区域 - 海报风格 */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/DLE70MU/DLE70MUZT1.jpg"
            alt="DLE70MU 长续航无人机"
            fill
            className="object-cover w-full h-full"
            priority
            draggable={false}
            sizes="100vw"
          />
          {/* 渐变遮罩效果 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        </div>
        
        {/* 内容覆盖 */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                DLE70MU
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed font-light">
                燃油动力长续航无人机 - 5小时不间断飞行
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
                专业级工业无人机，配备双光红外吊舱系统，RTK厘米级定位精度，
                为安防巡逻、应急救援、工业检测提供可靠解决方案
              </p>

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

      {/* 核心特点展示 */}
      <section className="py-32 px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">核心优势</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              专业级工业无人机，为各种复杂环境下的作业任务提供可靠支持
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-black/60 rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 全屏图片展示 - 红外设备图 */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/DLE70MU/DLE70MUZT4.jpg"
            alt="DLE70MU 红外设备系统"
            fill
            className="object-cover w-full h-full"
            draggable={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center px-6 lg:px-8">
          <div className="max-w-4xl text-white">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-left">专业红外设备</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-3">30TIR-50双光红外</h3>
                <p className="text-gray-200">支持热成像功能，便于夜间巡逻侦查及追踪，带有测量温度功能</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-3">30倍高清变焦</h3>
                <p className="text-gray-200">智能定位跟踪，两种云台跟随模式，精准目标追踪</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技术参数展示 */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">技术规格</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-black/30 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                    {spec.value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">{spec.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 全屏图片展示 - 飞行性能 */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/DLE70MU/DLE70MUZT3.jpg"
            alt="DLE70MU 飞行性能"
            fill
            className="object-cover w-full h-full"
            draggable={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-end justify-center px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">卓越飞行性能</h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-3">智能飞行控制</h3>
                <p className="text-gray-200">
                  双处理器冗余设计，3IMU传感器，一旦出现故障可以实时切换，
                  提高飞行安全性与稳定性
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-3">远程监控管理</h3>
                <p className="text-gray-200">
                  支持多台无人机位置与飞行参数远程查看，无人机与团队管理，
                  记录无人机历史飞行数据
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 红外摄像功能展示 - 三张图片轮播 */}
      <section className="py-32 px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">红外摄像功能</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              专业级热成像系统，为夜间作业和特殊环境检测提供强大支持
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/DLE70MU/DLE70MUZT5.jpg"
                  alt="DLE70MU 红外摄像功能1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  draggable={false}
                 sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">热成像检测</h3>
              <p className="text-gray-300">支持夜间热成像检测，温度测量精度高</p>
            </div>

            <div className="group relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/DLE70MU/DLE70MUZT6.jpg"
                  alt="DLE70MU 红外摄像功能2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  draggable={false}
                 sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">高清变焦</h3>
              <p className="text-gray-300">30倍光学变焦，远距离目标清晰可见</p>
            </div>

            <div className="group relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/DLE70MU/DLE70MUZT7.jpg"
                  alt="DLE70MU 红外摄像功能3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  draggable={false}
                 sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">智能跟踪</h3>
              <p className="text-gray-300">自动目标识别与跟踪，多种跟随模式</p>
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