'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DLE200Page() {
  const [activeImage, setActiveImage] = useState(0);

  // Product images
  const images = [
    '/images/aero-engine/dle200/DLE200ZT1.jpg',
    '/images/aero-engine/dle200/DLE200ZT2.jpg',
    '/images/aero-engine/dle200/DLE200lxj.jpg' // Propeller image
  ];

  // Dimension images
  const dimensionImages = ['/images/aero-engine/dle200/DLE200cc1.jpg'];

  // Basic parameters
  const basicParams = [
    { name: 'Type', value: 'Two-stroke' },
    { name: 'Bore', value: '55mm' },
    { name: 'Stroke', value: '42mm' },
    { name: 'Displacement', value: '200CC' },
    { name: 'Power', value: '20HP/8000rpm' },
    { name: 'Compression Ratio', value: '10:1' },
    { name: 'Reduction Ratio', value: '1:2.7' },
    { name: 'Drive Type', value: 'Belt' },
    { name: 'Starting Method', value: 'Electric Start' },
    { name: 'Engine Net Weight (excluding exhaust)', value: '9.5Kg' },
    { name: 'Exhaust Weight', value: '2.6Kg' },
    { name: 'Spark Plug', value: 'NGKBR8HS-10' },
    { name: 'Fuel', value: '93#, 97#' },
    { name: 'Generator Output', value: '14V 5A' },
    { name: 'Propeller', value: '1220mm' },
  ];

  // Torque parameters
  const torqueParams = [
    { component: 'Spark Plug', thread: 'M14', kgm: '2.4', nm: '24' },
    { component: 'Propeller Fastening Screw', thread: 'M8', kgm: '2.5', nm: '25' },
    { component: 'Cylinder Fastening Screw', thread: 'M6', kgm: '1', nm: '10' },
    { component: 'Crankcase Fastening Screw', thread: 'M6', kgm: '1.5', nm: '15' },
    { component: 'Crankcase Fastening Screw', thread: 'M8', kgm: '2', nm: '20' },
    { component: 'Exhaust Port Screw', thread: 'M6', kgm: '1.5', nm: '15' },
    { component: 'Eccentric Shaft Axial Tension Screw', thread: 'M8', kgm: '2', nm: '20' },
    { component: 'Eccentric Shaft Radial Fixing Screw', thread: 'M8', kgm: '2.3', nm: '23' },
    { component: 'Carburetor Fastening Screw', thread: 'M5', kgm: '0.5', nm: '5' },
    { component: 'Crankshaft Front Nut', thread: 'M12', kgm: '4', nm: '40' },
    { component: 'Crankshaft Rear Nut', thread: 'M10', kgm: '3.2', nm: '32' },
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />

      {/* Product Sub Navigation */}
      <div className="sticky top-14 z-40 w-full bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12 items-center text-sm font-medium">
            <span className="text-xl font-bold text-white tracking-tight">DLE200</span>
            <div className="flex space-x-6 text-gray-400">
              <a href="#overview" className="hover:text-white transition">Overview</a>
              <a href="#specs" className="hover:text-white transition">Specs</a>
              <a href="#downloads" className="hover:text-white transition">Downloads</a>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Full-width Banner Landing Page */}
        <section id="overview" className="relative w-full h-screen flex flex-col items-center justify-start pt-32 md:pt-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/aero-engine/dle200/DLE200ZTLDY.jpg"
              alt="DLE200 Paramotor Engine"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              draggable={false}
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
              DLE200
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-medium mb-8 drop-shadow-md max-w-3xl leading-relaxed">
              Innovative Coating Technology Cylinder, Custom Carbon Fiber Propeller, Aviation-grade Vibration Reduction Structure, Planetary Gear Starting Mechanism
            </p>
          </div>
        </section>
        
        {/* Product Features and other content */}
        <section className="relative bg-black z-10">
          <div className="max-w-[1600px] mx-auto px-4 py-16">

            {/* Product Features */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">Product Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Innovative Coating Technology Cylinder</h3>
                  <p className="text-gray-400">Advanced coating technology enhances wear resistance and heat dissipation, extending engine life</p>
                </div>
                <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Custom Carbon Fiber Propeller</h3>
                  <p className="text-gray-400">Lightweight carbon fiber material provides efficient power transmission and stable flight performance</p>
                </div>
                <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Aviation-grade Vibration Reduction Structure</h3>
                  <p className="text-gray-400">Professional vibration reduction design effectively reduces vibration, improving flight comfort and equipment stability</p>
                </div>
                <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Planetary Gear Starting Mechanism</h3>
                  <p className="text-gray-400">Efficient planetary gear transmission provides reliable starting performance and long service life</p>
                </div>
              </div>
            </div>

            {/* Product Main Images Display */}
            <div className="w-full max-w-[1400px] mx-auto select-none mb-20">
              <div className="relative rounded-3xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden aspect-[16/9] mb-8 group">
                {/* Cross Fade Images */}
                {images.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`DLE200 Product Image ${index + 1}`}
                    fill
                    sizes="(max-width: 1400px) 100vw, 1400px"
                    className={`object-cover transition-opacity duration-700 ease-in-out ${activeImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    priority={index === 0}
                    draggable={false}
                  />
                ))}

                {/* Left/Right Navigation Buttons */}
                <button
                  onClick={() => setActiveImage((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:scale-110"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:scale-110"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Desktop Thumbnail Navigation */}
                <div className="absolute bottom-6 left-6 z-30 hidden md:flex gap-3">
                  {images.map((src, index) => (
                    <button
                      key={src}
                      onClick={() => setActiveImage(index)}
                      className={`relative w-24 h-14 rounded-lg overflow-hidden transition-all duration-300 backdrop-blur-sm bg-black/20 ${activeImage === index ? 'ring-2 ring-white scale-105 shadow-lg' : 'ring-1 ring-white/20 opacity-60 hover:opacity-100 hover:ring-white/50'}`}
                    >
                      <Image
                        src={src}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        draggable={false}
                       sizes="100vw" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Thumbnail Navigation */}
              <div className="flex md:hidden justify-center gap-3 mt-4">
                {images.map((src, index) => (
                  <button
                    key={src}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${activeImage === index ? 'ring-2 ring-white scale-105' : 'ring-1 ring-white/10 opacity-50'}`}
                  >
                    <Image
                      src={src}
                      alt={`Thumbnail ${index + 1}`}
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

        {/* Technical Specifications */}
        <section id="specs" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Technical Specifications</h2>
              <p className="text-gray-400">Detailed product specifications and performance indicators</p>
            </div>
            
            <div className="space-y-12">
              {/* Basic Parameters */}
              <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-8 md:p-14">
                  <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    Basic Parameters
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

              {/* Torque Parameters */}
              <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-8 md:p-14">
                  <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3">
                    <div className="p-3 bg-purple-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    Main Fastener Installation Torque
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left py-4 px-6 text-gray-300 font-medium">Component Name</th>
                          <th className="text-left py-4 px-6 text-gray-300 font-medium">Thread Specification</th>
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

        {/* Dimension Diagrams */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Product Dimensions</h2>
            <p className="text-gray-400">Precise engineering diagrams for installation planning.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {dimensionImages.map((src, index) => (
              <div key={index} className="bg-gray-900/50 rounded-[2rem] p-8 border border-white/5 group">
                <Image 
                  src={src} 
                  alt="DLE200 Dimension Diagram" 
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Downloads Section */}
        <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Technical Support & Downloads</h2>
              <p className="text-gray-400 text-lg">Download detailed installation instructions and 3D model data for the DLE200.</p>
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
                    <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition mb-1">User Manual</h4>
                    <p className="text-sm text-gray-500">PDF Document</p>
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
                    <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition mb-1">3D Model Drawings</h4>
                    <p className="text-sm text-gray-500">ZIP Archive (IGS Format)</p>
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