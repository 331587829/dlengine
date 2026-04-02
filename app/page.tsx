import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DL-2L轻型运动飞机 - DL Engine 官方首页',
  description: 'DL-2L轻型运动飞机 - 难以置信的速度，前所未有的强悍。DL Engine 为您提供最先进的航空发动机技术解决方案。',
  keywords: 'DL-2L, 轻型运动飞机, 航空发动机, 无人机发动机, 航空技术, DL Engine',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-white selection:text-black">
      <Navbar />

      <main>
        {/* 第一屏：全屏大图 */}
        <section className="relative w-full h-screen flex flex-col items-center justify-start pt-32 md:pt-40 overflow-hidden snap-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/Home/hero.webp" 
              alt="DL Engine Pro"
              fill
              className="object-cover object-center"
              priority
             sizes="100vw" />
            {/* 渐变遮罩，确保文字可读性 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">
              DL-2L轻型运动飞机
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-medium mb-8 drop-shadow-md">
              难以置信的速度。前所未有的强悍。
            </p>
            <div className="flex space-x-8 text-lg font-medium">
              <a href="/dl-2l" className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                深入了解 <span className="text-sm">&gt;</span>
              </a>
              <a href="#" className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                购买 <span className="text-sm">&gt;</span>
              </a>
            </div>
          </div>
        </section>

        {/* 第二屏：全屏细节图 */}
        <section className="relative w-full h-screen flex flex-col items-center justify-end pb-32 md:pb-40 overflow-hidden snap-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/Home/details.jpg" 
              alt="工艺见微知著"
              fill
              className="object-cover object-center"
             sizes="100vw" />
            {/* 底部渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
              工艺，见微知著。
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-medium drop-shadow-md">
              采用航空级材质精心雕琢，突破边界。<br className="hidden md:block" />将工业设计推向新的高度，每一个细节，都为了极致的体验而生。
            </p>
          </div>
        </section>

        {/* 第三屏：全屏智能图 */}
        <section className="relative w-full h-screen flex flex-col items-center justify-start pt-32 md:pt-40 overflow-hidden snap-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/Home/intelligence.webp" 
              alt="智能新纪元"
              fill
              className="object-cover object-center"
             sizes="100vw" />
            {/* 顶部渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black/60"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
              DLE1600 新品将至
            </h2>
            <p className="text-lg md:text-xl text-gray-200 font-medium drop-shadow-md">
              80KW 强劲动力 108HP 硬核实力
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
