'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DouyinVideoGallery } from '@/components/ui/DouyinVideoGallery';

export default function JetboardPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  // 平滑滚动效果
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 font-sans text-white overflow-x-hidden">
      <Navbar />

      {/* 全屏GIF落地页 */}
      <section className="relative h-screen w-full overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 w-full h-full">
          <Image
            src="https://cdn.dlengine.com/images/jetboard/DLESURFLDY.gif"
            alt="DLE Jetboard"
            fill
            className="object-cover w-full h-full"
            priority
            draggable={false}
           sizes="100vw" />
        </div>
        
        {/* 向下滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-sm font-medium">探索更多</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 产品展示区 - 海边图片 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/jetboard/DLE1118ZT1.jpg"
            alt="DLE Jetboard at Beach"
            fill
            className="object-cover w-full h-full"
            draggable={false}
           sizes="100vw" />
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DLE 动力冲浪板</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              体验极限水上运动的快感，DLE动力冲浪板采用先进技术，为您带来无与伦比的滑行体验。
            </p>
            <div className="flex flex-wrap gap-4">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                  onClick={() => {
                    setCurrentVideo('https://cdn.dlengine.com/video/DLE106clbya.mp4');
                    setIsVideoModalOpen(true);
                    // 自动播放视频
                    setTimeout(() => {
                      if (videoRef.current) {
                        videoRef.current.play();
                      }
                    }, 100);
                  }}
                >
                  观看视频1
                </button>
                <button 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                  onClick={() => {
                    setCurrentVideo('https://cdn.dlengine.com/video/DLE106XC.mp4');
                    setIsVideoModalOpen(true);
                    // 自动播放视频
                    setTimeout(() => {
                      if (videoRef.current) {
                        videoRef.current.play();
                      }
                    }, 100);
                  }}
                >
                  观看视频2
                </button>
              </div>
          </div>
        </div>
      </section>

      {/* 产品系列展示 */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DLE 动力冲浪板系列</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              三款高性能动力冲浪板，满足不同用户需求，从入门到专业级体验
            </p>
          </div>

          {/* 产品卡片网格 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* DLE106-EFI */}
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <div className="relative aspect-[9/16] overflow-hidden">
                <Image
                  src="/images/jetboard/106.jpg"
                  alt="DLE106-EFI 动力冲浪板"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">入门级</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">DLE106-EFI</h3>
                <p className="text-gray-400 mb-4">高性能入门级动力冲浪板，适合初学者和休闲玩家</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">最大功率</span>
                    <span className="text-cyan-400 font-semibold">7.2kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">最高时速</span>
                    <span className="text-cyan-400 font-semibold">55km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">重量</span>
                    <span className="text-cyan-400 font-semibold">18kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DLE118-EFI */}
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 relative">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold rotate-12 shadow-lg">
                推荐
              </div>
              <div className="relative aspect-[9/16] overflow-hidden">
                <Image
                  src="/images/jetboard/118.jpg"
                  alt="DLE118-EFI 动力冲浪板"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">进阶级</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">DLE118-EFI</h3>
                <p className="text-gray-400 mb-4">平衡性能与操控性的进阶选择，适合中级玩家</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">最大功率</span>
                    <span className="text-blue-400 font-semibold">8.5kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">最高时速</span>
                    <span className="text-blue-400 font-semibold">60km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">重量</span>
                    <span className="text-blue-400 font-semibold">20kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DLE106SP-EFI */}
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
              <div className="relative aspect-[9/16] overflow-hidden">
                <Image
                  src="/images/jetboard/106SP.jpg"
                  alt="DLE106SP-EFI 动力冲浪板"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">专业级</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">DLE106SP-EFI</h3>
                <p className="text-gray-400 mb-4">高性能专业级动力冲浪板，为极限运动爱好者设计</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">最大功率</span>
                    <span className="text-purple-400 font-semibold">12kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">最高时速</span>
                    <span className="text-purple-400 font-semibold">68km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">重量</span>
                    <span className="text-purple-400 font-semibold">21.5kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 详细参数对比表 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="p-8 border-b border-white/10">
              <h3 className="text-3xl font-bold text-white mb-4">详细技术参数对比</h3>
              <p className="text-gray-400">三款DLE动力冲浪板的完整技术规格对比</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-gray-400 font-medium">参数分类</th>
                    <th className="text-center p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                      <span className="text-cyan-400 font-semibold">DLE106-EFI</span>
                    </th>
                    <th className="text-center p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      <span className="text-blue-400 font-semibold">DLE118-EFI</span>
                    </th>
                    <th className="text-center p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                      <span className="text-purple-400 font-semibold">DLE106SP-EFI</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* 尺寸与重量 */}
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-300 font-semibold bg-gray-900/30">尺寸与重量</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">产品尺寸 (L*W*H)</td>
                    <td className="p-4 text-center text-white">1800*600*150</td>
                    <td className="p-4 text-center text-white">1800*600*150</td>
                    <td className="p-4 text-center text-white">1800*600*150</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">外包装尺寸 (L*W*H)</td>
                    <td className="p-4 text-center text-white">1845*630*260</td>
                    <td className="p-4 text-center text-white">1845*630*260</td>
                    <td className="p-4 text-center text-white">1850*630*260</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">产品净重 / 包装重量</td>
                    <td className="p-4 text-center text-white">18KG / 45.5KG</td>
                    <td className="p-4 text-center text-white">20KG / 47.5KG</td>
                    <td className="p-4 text-center text-white">21.5KG / 49KG</td>
                  </tr>
                  
                  {/* 核心动力 */}
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-300 font-semibold bg-gray-900/30">核心动力</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">排量 / 压缩比</td>
                    <td className="p-4 text-center text-white">106CC / 13:01</td>
                    <td className="p-4 text-center text-white">118CC / 13:01</td>
                    <td className="p-4 text-center text-white">106CC / 13:01</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">最大功率 / 转速</td>
                    <td className="p-4 text-center text-white">7.2kW / 7700rpm</td>
                    <td className="p-4 text-center text-white">8.5kW / 8100rpm</td>
                    <td className="p-4 text-center text-white">12kW / 10400rpm</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">最高时速</td>
                    <td className="p-4 text-center text-white">55km/h</td>
                    <td className="p-4 text-center text-white">60km/h</td>
                    <td className="p-4 text-center text-white">68km/h</td>
                  </tr>
                  
                  {/* 燃油控制 */}
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-300 font-semibold bg-gray-900/30">燃油控制</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">油箱容量</td>
                    <td className="p-4 text-center text-white">5.0 L</td>
                    <td className="p-4 text-center text-white">5.0 L</td>
                    <td className="p-4 text-center text-white">5.0 L</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-400 pl-8">燃油类型 / 润滑油</td>
                    <td colSpan={3} className="p-4 text-center text-white">
                      无铅汽油 92# 及以上 | 摩特 800-赛道版 (30:1 混合比)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-400 pl-8">启动电机</td>
                    <td colSpan={3} className="p-4 text-center text-white">
                      直流无刷电机，12V / 500W
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-400 pl-8">电池 / 控制器</td>
                    <td colSpan={3} className="p-4 text-center text-white">
                      DLE-EFI 系统 | 65Wh 智能电池 (12V，欠压报警 9.8V)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 核心特点 */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">核心特点</span>
            </h2>
          </div>

          {/* 大图区域 - 碳纤维板体设计 */}
          <div className="mb-24 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="relative aspect-[16/6] overflow-hidden">
              <Image
                src="/images/jetboard/dlesurfbj.gif"
                alt="碳纤维板体设计"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                draggable={false}
               sizes="100vw" />
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-semibold text-white mb-6">碳纤维板体设计</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                我们对碳纤维板体进行全新开发设计，致力于提升其在高速转弯时的稳定性、灵活性和流畅性，同时实现更省力的操作体验。为此，我们创新性地引入了一对直侧鳍，并额外增加了一对带有角度的侧鳍。这些侧鳍不仅可以根据推荐的方向位置进行安装，更允许用户根据个人喜好和驾驶习惯自行调换安装位置。通过这种灵活的组合方式，用户能够轻松找到最适合自己的侧鳍角度及位置，实现个性化的驾驶体验。
              </p>
            </div>
          </div>

          {/* 左右布局区域 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 钛合金特点 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/jetboard/lvhej.jpg"
                  alt="钛合金叶轮"
                  fill
                  className="object-contain transition-transform duration-500 hover:scale-105"
                  draggable={false}
                 sizes="100vw" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">钛合金叶轮</h3>
                <p className="text-gray-400">
                  运用钛合金精心打造的叶轮，展现出卓越的耐用性，这种叶轮设计，不仅坚固耐用，而且能够长时间保持其高效运转的性能，为用户提供稳定且持久的体验。
                </p>
              </div>
            </div>

            {/* 抛离停机特点 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/jetboard/shouhuan.jpg"
                  alt="抛离停机"
                  fill
                  className="object-contain transition-transform duration-500 hover:scale-105"
                  draggable={false}
                 sizes="100vw" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">抛离停机</h3>
                <p className="text-gray-400">
                  当手腕上钥匙与DLE操控手柄断开连接时，系统将自动关闭发动机，以保障水中人员的安全。
                </p>
              </div>
            </div>

            {/* 浮筒&选装特点 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/jetboard/futong.jpg"
                    alt="浮筒&选装"
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-105"
                    draggable={false}
                   sizes="100vw" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">浮筒&选装</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    为您带来更丰富、更稳定的浮力支撑，让您的宝贝也能尽情沉醉在动力冲浪的无尽乐趣中。采用充气式设计，既节省存储空间，又能灵活适配其他型号的DLE动力冲浪板，让您的冲浪体验更轻松、更便捷。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 抖音视频号展示 */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-red-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                抖音视频号
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              关注我们的抖音官方账号，查看更多精彩视频和用户分享
            </p>
          </div>

          {/* 抖音视频组件 */}
          <div className="mb-12">
            {/* 配置说明：请将以下占位符替换为真实的抖音用户ID和Access Token */}
            {/* 获取方式：登录抖音开放平台(https://open.douyin.com)申请开发者权限 */}
            
            {/* 使用真实抖音用户ID和Access Token（取消注释并填写真实值） */}
            {/* 
            <DouyinVideoGallery 
              userId="您的真实抖音用户ID" 
              accessToken="您的真实抖音Access Token"
              maxVideos={6}
            />
            */}
            
            {/* 使用默认占位符（显示模拟数据） */}
            <DouyinVideoGallery 
              userId="您的抖音用户ID" 
              accessToken="您的抖音Access Token"
              maxVideos={6}
            />
            
            {/* 配置提示 */}
            <div className="mt-8 text-center">
              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 inline-block">
                <p className="text-yellow-400 text-sm">
                  💡 提示：当前显示模拟数据。要获取真实抖音视频，请配置真实的用户ID和Access Token
                </p>
              </div>
            </div>
          </div>

          {/* 关注抖音按钮 */}
          <div className="text-center">
            <a 
              href="https://www.douyin.com/user/您的抖音号" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span>关注抖音官方账号</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.829 14.829a1 1 0 0 1-1.414 0l-2.829-2.828-2.828 2.828a1 1 0 0 1-1.414-1.414l4.243-4.243a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1 0 1.414z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">准备好体验了吗？</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            联系我们了解更多信息，或者预约体验DLE动力冲浪板的极致性能
          </p>
          <div className="group relative inline-block">
            <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 text-lg">
              立即联系
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

      {/* 视频弹窗 */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => {
            setIsVideoModalOpen(false);
            setCurrentVideo('');
            // 停止视频播放
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }}
        >
          <div className="relative max-w-4xl w-full aspect-video animate-scaleIn"
            onClick={(e) => e.stopPropagation()} // 防止点击视频区域关闭弹窗
          >
            {/* 关闭按钮 */}
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center z-10 transition-colors"
              onClick={() => {
                setIsVideoModalOpen(false);
                setCurrentVideo('');
                // 停止视频播放
                if (videoRef.current) {
                  videoRef.current.pause();
                  videoRef.current.currentTime = 0;
                }
              }}
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* 视频播放器 */}
            <video 
              ref={videoRef}
              src={currentVideo}
              className="w-full h-full rounded-lg shadow-2xl"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}