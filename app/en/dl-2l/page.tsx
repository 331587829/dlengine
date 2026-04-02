'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { VideoModal } from '@/components/ui/VideoModal';

// 由于使用了 'use client'，元数据需要在客户端组件中处理
// 或者将元数据移到父级布局文件中

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
    { label: "Max Takeoff Weight", value: "600", unit: "kg", sublabel: "Maximum certified weight" },
    { label: "Standard Empty Weight", value: "355", unit: "kg", sublabel: "" },
    { label: "Max Useful Load", value: "245", unit: "kg", sublabel: "" },
    { label: "Max Level Speed", value: "120", unit: "KIAS", sublabel: "" },
    { label: "Cruise Speed", value: "115", unit: "KIAS", sublabel: "" },
    { label: "Rate of Climb", value: "1400", unit: "ft/min", sublabel: "" },
    { label: "Range with Full Tank", value: "1500", unit: "Km", sublabel: "" },
    { label: "Engine", value: "ROTAX", unit: "912S", sublabel: "912S" },
  ];

  const features = [
    {
      title: "Full IP Rights",
      desc: "Developed and manufactured by Mile Haoxiang Technology Co., Ltd.",
      certs: ["2019 TC Type Certificate", "2020 PC Production Certificate"],
      icon: "✈"
    },
    {
      title: "Nitrogen Shock System",
      desc: "Unique nitrogen shock absorption mechanism with built-in hydraulic circuit",
      certs: ["Reduces landing overload", "Prevents heavy landing rebound", "Suitable for beginners"],
      icon: "🛡"
    },
    {
      title: "Comfortable Cockpit",
      desc: "Electrically adjustable seats and foot pedals",
      certs: ["Suitable for different heights", "Comfortable ride"],
      icon: "💺"
    },
    {
      title: "Advanced Avionics",
      desc: "Standard dual display screens with independent RIG system",
      certs: ["Mechanical altimeter/airspeed indicator", "Professional configuration"],
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Progress Indicator */}
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

      {/* Hero Section - Sky Realm */}
      <section 
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/DL-2L/DL-2LZT1.jpg"
            alt="DL-2L Cloud Goose"
            fill
            className="object-cover"
            priority
            draggable={false}
            style={{
              transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.3}px)`,
            }}
           sizes="100vw" />
          {/* Light Mask - Maintain Image Brightness */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 -mt-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-white mb-6 pb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 0 rgba(0,0,0,0.5)', borderBottom: '1px solid rgba(255,255,255,0.5)' }}>
                Low-Altitude Solution · Yunnan's Own Aircraft
              </span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)' }}>
              <span className="block text-white">
                DL-2L
              </span>
            </h1>
            
            <div className="relative mb-8">
              <span className="text-4xl md:text-6xl font-light tracking-[0.2em]" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.5)' }}>
                Cloud Goose
              </span>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>

            <p className="text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto text-gray-100" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
              Light Sport Fixed-Wing Aircraft
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/30" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>Full IP Rights</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/30" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>CAAC TC Certified</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/30" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>CAAC PC Certified</span>
            </div>
          </div>
        </div>

        {/* Video Play Button - Transparent Glass Effect */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10">
          <button
            onClick={() => setVideoModal({
              isOpen: true,
              videoUrl: 'https://cdn.dlengine.com/video/DL-2LJTF.mp4',
              title: 'DL-2L Flight Demo'
            })}
            className="px-10 py-2 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Video
          </button>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/70">
          <span className="text-xs tracking-widest uppercase font-medium" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Features Showcase - Minimal Cards */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Core Advantages
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

      {/* Flight Performance - Fullscreen Visual */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/DL-2L/DL-2LZT2.jpg"
            alt="Flight Performance"
            fill
            className="object-cover"
            draggable={false}
           sizes="100vw" />
          {/* Gradient Mask - Bottom Darkened */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Content Area - Bottom Centered Layout */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12 text-center text-white/90" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
              Flight Performance
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="text-3xl md:text-5xl font-black mb-2 text-white bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                    120
                  </div>
                  <div className="text-xs text-gray-400 tracking-wider">Max Level Speed (KIAS)</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="text-3xl md:text-5xl font-black mb-2 text-white bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                    115
                  </div>
                  <div className="text-xs text-gray-400 tracking-wider">Cruise Speed (KIAS)</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="text-3xl md:text-5xl font-black mb-2 text-white bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                    1400
                  </div>
                  <div className="text-xs text-gray-400 tracking-wider">Rate of Climb (ft/min)</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="text-3xl md:text-5xl font-black mb-2 text-white bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                    1500
                  </div>
                  <div className="text-xs text-gray-400 tracking-wider">Range with Full Tank (Km)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Data Grid */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Technical Specifications
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

      {/* Interior Details - Widescreen Display */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Refined Interior
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
          </div>

          <div className="space-y-16">
            {[
              { 
                img: "DL-2LNS1.jpg", 
                title: "Comfortable Seating System", 
                desc: "Electrically adjustable seats and foot pedals, suitable for different heights and weights, comfortable ride",
                features: ["Electric adjustment", "Adjustable foot pedals", "Ergonomic design"]
              },
              { 
                img: "DL-2LNS2.jpg", 
                title: "Advanced Avionics", 
                desc: "Standard dual display screens, mechanical altimeter/airspeed indicator, independent RIG system",
                features: ["Dual displays", "Mechanical backup", "Independent RIG"]
              },
              { 
                img: "DL-2LNS3.jpg", 
                title: "ROTAX912S Engine", 
                desc: "Reliable power system, three-blade propeller (1730mm), stable and efficient performance",
                features: ["ROTAX912S", "Three-blade 1730mm", "Efficient & stable"]
              },
              { 
                img: "DL-2LZT4.jpg", 
                title: "Static Ground Display", 
                desc: "DL-2L Cloud Goose static ground display, showcasing refined overall design and excellent manufacturing",
                features: ["Streamlined fuselage", "Refined exterior design", "Excellent aerodynamics"]
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`group relative ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                } flex flex-col md:flex-row gap-8 items-center`}
              >
                {/* Image Area - 16:9 Widescreen */}
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
                  {/* Decorative Border */}
                  <div className="absolute -inset-4 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/40" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/40" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/40" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/40" />
                  </div>
                </div>

                {/* Text Content Area */}
                <div className="w-full md:w-1/3 flex flex-col justify-center">
                  {/* Number */}
                  <div className="text-6xl font-black text-white/10 mb-4">
                    0{idx + 1}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  
                  {/* Feature Tags */}
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

      {/* Ground Display - Fullscreen Ending */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/DL-2L/DL-2LZT3.jpg"
            alt="Ground Display"
            fill
            className="object-cover"
            draggable={false}
           sizes="100vw" />
          {/* Gradient Mask - Bottom Darkened */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* Content Area - Bottom Centered Layout */}
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-20 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto w-full text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 text-center text-white" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.9)' }}>
              Unique Shock System
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <h3 className="text-lg font-bold mb-3 text-white" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>Nitrogen Shock Mechanism</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Landing gear equipped with unique nitrogen shock mechanism, reduces landing overload, effectively protects aircraft structure
                </p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <h3 className="text-lg font-bold mb-3 text-white" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>Hydraulic Circuit Design</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Shock mechanism with built-in hydraulic circuit, prevents aircraft rebound in hard landing situations, suitable for beginner training
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ isOpen: false, videoUrl: '', title: '' })}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
      />
    </div>
  );
}