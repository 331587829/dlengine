'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function JetboardPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Smooth scroll effect
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

      {/* Fullscreen GIF Hero Section */}
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
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-sm font-medium">Explore More</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Product Showcase - Beach Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/jetboard/DLE1118ZT1.jpg"
            alt="DLE Jetboard at Beach"
            fill
            className="object-cover w-full h-full"
            draggable={false}
           sizes="100vw" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DLE Jetboard</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Experience the thrill of extreme water sports with DLE Jetboard, featuring advanced technology for unparalleled riding experience.
            </p>
            <div className="flex flex-wrap gap-4">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                  onClick={() => {
                    setCurrentVideo('https://cdn.dlengine.com/video/DLE106clbya.mp4');
                    setIsVideoModalOpen(true);
                    // Auto play video
                    setTimeout(() => {
                      if (videoRef.current) {
                        videoRef.current.play();
                      }
                    }, 100);
                  }}
                >
                  Watch Video 1
                </button>
                <button 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                  onClick={() => {
                    setCurrentVideo('https://cdn.dlengine.com/video/DLE106XC.mp4');
                    setIsVideoModalOpen(true);
                    // Auto play video
                    setTimeout(() => {
                      if (videoRef.current) {
                        videoRef.current.play();
                      }
                    }, 100);
                  }}
                >
                  Watch Video 2
                </button>
              </div>
          </div>
        </div>
      </section>

      {/* Product Series Showcase */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DLE Jetboard Series</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three high-performance jetboards to meet different user needs, from entry-level to professional experience
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* DLE106-EFI */}
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <div className="relative aspect-[9/16] overflow-hidden">
                <Image
                  src="/images/jetboard/106.jpg"
                  alt="DLE106-EFI Jetboard"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Entry Level</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">DLE106-EFI</h3>
                <p className="text-gray-400 mb-4">High-performance entry-level jetboard, perfect for beginners and recreational users</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Max Power</span>
                    <span className="text-cyan-400 font-semibold">7.2kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Top Speed</span>
                    <span className="text-cyan-400 font-semibold">55km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Weight</span>
                    <span className="text-cyan-400 font-semibold">18kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DLE118-EFI */}
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 relative">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold rotate-12 shadow-lg">
                Recommended
              </div>
              <div className="relative aspect-[9/16] overflow-hidden">
                <Image
                  src="/images/jetboard/118.jpg"
                  alt="DLE118-EFI Jetboard"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Intermediate</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">DLE118-EFI</h3>
                <p className="text-gray-400 mb-4">Balanced performance and control for intermediate users</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Max Power</span>
                    <span className="text-blue-400 font-semibold">8.5kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Top Speed</span>
                    <span className="text-blue-400 font-semibold">60km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Weight</span>
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
                  alt="DLE106SP-EFI Jetboard"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Professional</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">DLE106SP-EFI</h3>
                <p className="text-gray-400 mb-4">High-performance professional jetboard designed for extreme sports enthusiasts</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Max Power</span>
                    <span className="text-purple-400 font-semibold">12kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Top Speed</span>
                    <span className="text-purple-400 font-semibold">68km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Weight</span>
                    <span className="text-purple-400 font-semibold">21.5kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Specifications Comparison Table */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="p-8 border-b border-white/10">
              <h3 className="text-3xl font-bold text-white mb-4">Detailed Technical Specifications Comparison</h3>
              <p className="text-gray-400">Complete technical specifications comparison of three DLE jetboard models</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-gray-400 font-medium">Specification Category / Model</th>
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
                  {/* Dimensions & Weight */}
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-300 font-semibold bg-gray-900/30">Dimensions & Weight</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">Product Dimensions (L*W*H)</td>
                    <td className="p-4 text-center text-white">1800*600*150</td>
                    <td className="p-4 text-center text-white">1800*600*150</td>
                    <td className="p-4 text-center text-white">1800*600*150</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">Package Dimensions (L*W*H)</td>
                    <td className="p-4 text-center text-white">1845*630*260</td>
                    <td className="p-4 text-center text-white">1845*630*260</td>
                    <td className="p-4 text-center text-white">1850*630*260</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">Net Weight / Package Weight</td>
                    <td className="p-4 text-center text-white">18KG / 45.5KG</td>
                    <td className="p-4 text-center text-white">20KG / 47.5KG</td>
                    <td className="p-4 text-center text-white">21.5KG / 49KG</td>
                  </tr>
                  
                  {/* Engine Core */}
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-300 font-semibold bg-gray-900/30">Engine Core</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">Displacement / Compression Ratio</td>
                    <td className="p-4 text-center text-white">106CC / 13:01</td>
                    <td className="p-4 text-center text-white">118CC / 13:01</td>
                    <td className="p-4 text-center text-white">106CC / 13:01</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">Max Power / RPM</td>
                    <td className="p-4 text-center text-white">7.2kW / 7700rpm</td>
                    <td className="p-4 text-center text-white">8.5kW / 8100rpm</td>
                    <td className="p-4 text-center text-white">12kW / 10400rpm</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">Top Speed</td>
                    <td className="p-4 text-center text-white">55km/h</td>
                    <td className="p-4 text-center text-white">60km/h</td>
                    <td className="p-4 text-center text-white">68km/h</td>
                  </tr>
                  
                  {/* Fuel & Control */}
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-300 font-semibold bg-gray-900/30">Fuel & Control</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-gray-400 pl-8">Fuel Tank Capacity</td>
                    <td className="p-4 text-center text-white">5.0 L</td>
                    <td className="p-4 text-center text-white">5.0 L</td>
                    <td className="p-4 text-center text-white">5.0 L</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-400 pl-8">Fuel Type / Lubricant</td>
                    <td colSpan={3} className="p-4 text-center text-white">
                      Unleaded Gasoline 92# and above | Motul 800-Track Edition (30:1 Mix Ratio)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-400 pl-8">Starter Motor</td>
                    <td colSpan={3} className="p-4 text-center text-white">
                      Brushless DC Motor, 12V / 500W
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-400 pl-8">Battery / Controller</td>
                    <td colSpan={3} className="p-4 text-center text-white">
                      DLE-EFI System | 65Wh Smart Battery (12V, Low Voltage Alert 9.8V)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Key Features</span>
            </h2>
          </div>

          {/* Large Image Section - Carbon Fiber Board Design */}
          <div className="mb-24 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="relative aspect-[16/6] overflow-hidden">
              <Image
                src="/images/jetboard/dlesurfbj.gif"
                alt="Carbon Fiber Board Design"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                draggable={false}
               sizes="100vw" />
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-semibold text-white mb-6">Carbon Fiber Board Design</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                We have developed a new design for the carbon fiber board, dedicated to enhancing its stability, flexibility, and smoothness during high-speed turns, while achieving a more effortless operation experience. To this end, we innovatively introduced a pair of straight side fins and an additional pair of angled side fins. These side fins can not only be installed according to the recommended direction positions but also allow users to exchange installation positions according to personal preferences and driving habits. Through this flexible combination, users can easily find the most suitable side fin angle and position for themselves, achieving a personalized driving experience.
              </p>
            </div>
          </div>

          {/* Left-Right Layout Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Titanium Alloy Feature */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/jetboard/lvhej.jpg"
                  alt="Titanium Alloy Impeller"
                  fill
                  className="object-contain transition-transform duration-500 hover:scale-105"
                  draggable={false}
                 sizes="100vw" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Titanium Alloy Impeller</h3>
                <p className="text-gray-400">
                  The impeller crafted with titanium alloy demonstrates exceptional durability. This impeller design is not only sturdy and durable but also maintains its high-efficiency performance for a long time, providing users with a stable and long-lasting experience.
                </p>
              </div>
            </div>

            {/* Ejection Stop Feature */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/jetboard/shouhuan.jpg"
                  alt="Ejection Stop"
                  fill
                  className="object-contain transition-transform duration-500 hover:scale-105"
                  draggable={false}
                 sizes="100vw" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Ejection Stop</h3>
                <p className="text-gray-400">
                  When the wrist key is disconnected from the DLE control handle, the system will automatically shut down the engine to ensure the safety of personnel in the water.
                </p>
              </div>
            </div>

            {/* Floats & Options Feature */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/jetboard/futong.jpg"
                    alt="Floats & Options"
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-105"
                    draggable={false}
                   sizes="100vw" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">Floats & Options</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Bring you richer and more stable buoyancy support, allowing your loved ones to fully immerse themselves in the endless fun of power surfing. Adopting an inflatable design, it saves storage space and can be flexibly adapted to other models of DLE power surfboards, making your surfing experience more relaxed and convenient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Us */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Ready to Experience?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Contact us for more information or to schedule a test ride of the DLE Jetboard
          </p>
          <div className="group relative inline-block">
            <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 text-lg">
              Contact Now
            </button>
            
            {/* Phone Hover Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-xl p-3 rounded-lg shadow-2xl border border-white/10 min-w-[200px] z-50">
              <div className="flex flex-col space-y-3">
                <a href="tel:13529826090" className="flex items-center group/phone outline-none">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 group-hover/phone:bg-blue-500 transition-colors">
                    <svg className="w-3 h-3 text-blue-400 group-hover/phone:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Aircraft</div>
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
                    <div className="text-xs text-gray-400 mb-0.5">Surfboard</div>
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
                    <div className="text-xs text-gray-400 mb-0.5">Engine</div>
                    <div className="text-sm font-medium text-white group-hover/phone:text-blue-400 transition-colors">19187325509</div>
                  </div>
                </a>
              </div>
              {/* Hover Tooltip Triangle */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-3 h-3 bg-black/80 backdrop-blur-xl rotate-45 border-b border-r border-white/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => {
            setIsVideoModalOpen(false);
            setCurrentVideo('');
            // Stop video playback
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }}
        >
          <div className="relative max-w-4xl w-full aspect-video animate-scaleIn"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside video area
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center z-10 transition-colors"
              onClick={() => {
                setIsVideoModalOpen(false);
                setCurrentVideo('');
                // Stop video playback
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
            
            {/* Video Player */}
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