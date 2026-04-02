'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { VideoModal } from '@/components/ui/VideoModal';

export default function DL2LPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [videoModal, setVideoModal] = useState<{isOpen: boolean; videoUrl: string; title: string}>({
    isOpen: false,
    videoUrl: '',
    title: ''
  });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const specs = [
    { label: "最大起飞重量", value: "600", unit: "kg", sublabel: "最大审定合格重量" },
    { label: "标准空重", value: "355", unit: "kg", sublabel: "" },
    { label: "最大有效载荷", value: "245", unit: "kg", sublabel: "" },
    { label: "最大平飞速度", value: "120", unit: "KIAS", sublabel: "" },
    { label: "巡航速度", value: "115", unit: "KIAS", sublabel: "" },
    { label: "爬升率", value: "1400", unit: "ft/min", sublabel: "" },
    { label: "满油航程", value: "1500", unit: "Km", sublabel: "" },
    { label: "发动机", value: "ROTAX", unit: "912S", sublabel: "912S" },
  ];

  const features = [
    {
      title: "全自主知识产权",
      desc: "弥勒浩翔科技有限公司研发制造",
      certs: ["2019 TC 型号合格证", "2020 PC 生产许可证"],
      icon: "✈"
    },
    {
      title: "氮气减震系统",
      desc: "独特氮气减震机构，内置液压油路",
      certs: ["减小着陆过载", "避免重着陆回弹", "适合初学者"],
      icon: "🛡"
    },
    {
      title: "舒适驾乘",
      desc: "电动升降座椅，电动调节脚蹬",
      certs: ["适合不同身高体重", "驾乘舒适"],
      icon: "💺"
    },
    {
      title: "先进航电",
      desc: "标配双显示屏幕，独立 RIG",
      certs: ["机械高度表/空速表", "专业级配置"],
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* 进度指示器 */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full transition-all duration-500 ${
                activeSection === i ? 'bg-white scale-150' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 英雄区域 - 天空之境 */}
      <section 
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/DL-2L/DL-2LZT1.jpg"
            alt="DL-2L 云雁"
            fill
            className="object-cover"
            priority
            draggable={false}
            style={{
              transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.3}px)`,
            }}
           sizes="100vw" />
          {/* 轻柔遮罩 - 保持图片亮度 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 mt-25">
              <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-white mb-6 pb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 0 rgba(0,0,0,0.5)', borderBottom: '1px solid rgba(255,255,255,0.5)' }}>
                低空利器 · 云南人自己的飞机
              </span>
            </div>

            <div className="relative mb-8">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)' }}>
                <span className="block text-white">
                  DL-2L
                </span>
              </h1>
              
              <div className="relative">
                <span className="text-4xl md:text-6xl font-light tracking-[0.2em]" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.5)' }}>
                  云雁
                </span>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                
                {/* 微信扫码二维码 - 移动端顶部居中，桌面端右侧 */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-80 md:left-auto md:-translate-x-0 md:-right-56 md:top-1/2 md:-translate-y-1/2 group cursor-pointer">
                  <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-3 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20">
                    <Image
                      src="/images/other/wxcu.jpg"
                      alt="微信扫码"
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-white/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-100" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                      微信扫码立即管理
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto text-gray-100" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
              固定翼轻型运动飞机
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/30" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>全自主知识产权</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/30" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>民航局 TC 认证</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/30" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>民航局 PC 认证</span>
            </div>
          </div>
        </div>

        {/* 视频播放按钮 - 透明毛玻璃效果 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <button
            onClick={() => setVideoModal({
              isOpen: true,
              videoUrl: 'https://cdn.dlengine.com/video/DL-2LJTF.mp4',
              title: 'DL-2L 飞行展示'
            })}
            className="px-12 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium flex items-center gap-3 transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 whitespace-nowrap"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            观看飞行视频
          </button>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/70">
          <span className="text-xs tracking-widest uppercase font-medium" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* 特性展示 - 极简卡片 */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                核心优势
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative p-8 bg-zinc-900/50 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">{feature.desc}</p>
                <div className="space-y-2">
                  {feature.certs.map((cert, i) => (
                    <div key={i} className="text-xs text-gray-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 飞行性能 - 全屏视觉 */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/DL-2L/DL-2LZT2.jpg"
            alt="飞行性能"
            fill
            className="object-cover"
            draggable={false}
           sizes="100vw" />
          {/* 渐变遮罩 - 底部加深，保证文字清晰 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* 内容区域 - 底部居中布局 */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12 text-center text-white/90" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
              飞行性能
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="text-3xl md:text-5xl font-black mb-2 text-white bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                    120
                  </div>
                  <div className="text-xs text-gray-400 tracking-wider">最大平飞速度 (KIAS)</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="text-3xl md:text-5xl font-black mb-2 text-white bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                    115
                  </div>
                  <div className="text-xs text-gray-400 tracking-wider">巡航速度 (KIAS)</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="text-3xl md:text-5xl font-black mb-2 text-white bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                    1400
                  </div>
                  <div className="text-xs text-gray-400 tracking-wider">爬升率 (ft/min)</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="text-3xl md:text-5xl font-black mb-2 text-white bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                    1500
                  </div>
                  <div className="text-xs text-gray-400 tracking-wider">满油航程 (Km)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技术参数 - 数据网格 */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                技术规格
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {specs.map((spec, idx) => (
              <div 
                key={idx}
                className="group p-6 md:p-8 bg-zinc-950 hover:bg-zinc-900 transition-colors duration-300"
              >
                <div className="text-xs text-gray-600 mb-3 uppercase tracking-wider">{spec.label}</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl md:text-4xl font-black text-white">{spec.value}</span>
                  <span className="text-sm text-gray-500 font-medium">{spec.unit}</span>
                </div>
                {spec.sublabel && (
                  <div className="text-xs text-gray-700">{spec.sublabel}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 内饰细节 - 横向宽屏展示 */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                精致内饰
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
          </div>

          <div className="space-y-16">
            {[
              { 
                img: "DL-2LNS1.jpg", 
                title: "舒适座椅系统", 
                desc: "电动升降座椅，电动调节脚蹬，适合不同身高体重人员，驾乘舒适",
                features: ["电动升降", "电动调节脚蹬", "人体工学设计"]
              },
              { 
                img: "DL-2LNS2.jpg", 
                title: "先进航电仪表", 
                desc: "标配双显示屏幕，机械高度表/空速表，配备独立 RIG，专业级航电配置",
                features: ["双显示屏幕", "机械仪表备份", "独立 RIG 系统"]
              },
              { 
                img: "DL-2LNS3.jpg", 
                title: "ROTAX912S 发动机", 
                desc: "可靠的动力系统，三叶桨设计 (1730mm)，提供稳定高效的性能输出",
                features: ["ROTAX912S", "三叶桨 1730mm", "高效稳定"]
              },
              { 
                img: "DL-2LZT4.jpg", 
                title: "地面静态展示", 
                desc: "DL-2L 云雁地面静态展示，展现精致的整体设计和卓越的制造工艺",
                features: ["流线型机身", "精致外观设计", "优异气动布局"]
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`group relative ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                } flex flex-col md:flex-row gap-8 items-center`}
              >
                {/* 图片区域 - 16:9 宽屏 */}
                <div className="w-full md:w-2/3 relative">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={`/images/DL-2L/${item.img}`}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      draggable={false}
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  </div>
                  {/* 装饰边框 */}
                  <div className="absolute -inset-4 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/40" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/40" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/40" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/40" />
                  </div>
                </div>

                {/* 文字内容区域 */}
                <div className="w-full md:w-1/3 flex flex-col justify-center">
                  {/* 序号 */}
                  <div className="text-6xl font-black text-white/10 mb-4">
                    0{idx + 1}
                  </div>
                  
                  {/* 标题 */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  
                  {/* 描述 */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  
                  {/* 特性标签 */}
                  <div className="flex flex-wrap gap-3">
                    {item.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-xs tracking-wider hover:bg-white/10 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 地面展示 - 全屏结尾 */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/DL-2L/DL-2LZT3.jpg"
            alt="地面展示"
            fill
            className="object-cover"
            draggable={false}
           sizes="100vw" />
          {/* 渐变遮罩 - 底部加深 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* 内容区域 - 底部居中布局 */}
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-20 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto w-full text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 text-center text-white" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.9)' }}>
              独特减震系统
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <h3 className="text-lg font-bold mb-3 text-white" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>氮气减震机构</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  起落架配备独特氮气减震机构，减小飞机着陆过载，有效保护飞机机体
                </p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <h3 className="text-lg font-bold mb-3 text-white" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>液压油路设计</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  减震机构内置液压油路，避免重着陆情况下飞机回弹，适合初学者训练
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* 视频弹窗 */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ isOpen: false, videoUrl: '', title: '' })}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
      />
    </div>
  );
}