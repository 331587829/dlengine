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

      {/* Product Sub-navigation */}
      <div className="sticky top-14 z-40 w-full bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12 items-center text-sm font-medium">
            <span className="text-xl font-bold text-white tracking-tight">DLE130G</span>
            <div className="flex space-x-6 text-gray-400">
              <a href="#overview" className="hover:text-white transition">Overview</a>
              <a href="#specs" className="hover:text-white transition">Specifications</a>
              <a href="#dimensions" className="hover:text-white transition">Dimensions</a>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section id="overview" className="relative pt-24 pb-10 flex flex-col items-center px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
              DLE130G Starter & Generator Version
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto">
              High Performance · Strong Power · Stable Generation.
            </p>
          </div>
          
          <div className="w-full max-w-[1400px] mx-auto select-none mb-16">
            <div className="relative rounded-3xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden aspect-[16/9] mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none"></div>

              {images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`DLE130G Engine ${index + 1}`}
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
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:scale-110"
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
                    <Image src={src} alt={`Thumbnail ${index + 1}`} fill className="object-cover" draggable={false}  sizes="100vw" />
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
                    activeImage === index ? 'ring-2 ring-white scale-105' : 'ring-1 ring-white/10 opacity-50'
                  }`}
                >
                  <Image src={src} alt={`Thumbnail ${index + 1}`} fill className="object-cover" draggable={false}  sizes="100vw" />
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto text-gray-300 space-y-4 leading-relaxed text-lg px-4 text-center mt-8">
            <p>
              The DLE130 Starter & Generator Version is a high-performance engine designed specifically for various UAVs and aircraft. It adopts planetary gear electric starting technology for quick startup and improved flight efficiency. At the same time, the engine has a power generation function, which can output 14V 350W of power to provide stable energy support for the aircraft.
            </p>
          </div>

          {/* Core Technology Display */}
          <div className="mt-12 w-full max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-8 h-auto md:h-[440px]">
              <div className="bg-[#050505] rounded-[2rem] border border-white/5 flex items-center justify-center p-6 overflow-hidden md:w-[67%]">
                <Image 
                  src="/images/aero-engine/DLE130g/DLE130SAGpj1.jpg" 
                  alt="Starter Motor and Gear Mechanism" 
                  width={750} 
                  height={440} 
                  className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
              <div className="bg-[#050505] rounded-[2rem] border border-white/5 flex items-center justify-center p-6 overflow-hidden md:w-[33%]">
                <Image 
                  src="/images/aero-engine/DLE130g/DLE130SAGpj2.jpg" 
                  alt="Planetary Gear Internal Structure" 
                  width={365} 
                  height={440} 
                  className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
            </div>
            <div className="max-w-6xl mx-auto text-gray-300 space-y-4 leading-relaxed text-lg px-4 text-center">
              <p>
                The DLE130 Starter & Generator Version engine also features a planetary gear starting mechanism, an efficient and reliable starting system. This mechanism uses planetary gear transmission to provide greater starting force and a smoother starting process, along with a longer service life. This starting mechanism can effectively reduce the load and vibration during startup, decrease engine wear and tear, and thereby improve the reliability and stability of the engine. Therefore, the DLE130 Starter & Generator Version not only has powerful driving and generating capabilities but also excellent starting performance, making it a highly practical aircraft engine.
              </p>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section id="specs" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Specifications</h2>
              <p className="text-gray-400">Detailed performance and electrical indicators of DLE130G</p>
            </div>
            
            <div className="bg-[#050505] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                {/* Performance & Specs */}
                <div className="p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-500">
                  <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    Basic Performance
                  </h3>
                  <dl className="space-y-4">
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">Performance</dt>
                      <dd className="text-white font-medium text-right">13HP/8500rpm</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">Displacement</dt>
                      <dd className="text-white font-medium text-right">130cm³</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">Bore × Stroke</dt>
                      <dd className="text-white font-medium text-right">47mm × 37.5mm</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">Compression Ratio</dt>
                      <dd className="text-white font-medium text-right">9.2 : 1</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">Lubrication Ratio</dt>
                      <dd className="text-white font-medium text-right">30 : 1</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">Propeller</dt>
                      <dd className="text-white font-medium text-right">27×12; 28×10; 28×11; 29×9</dd>
                    </div>
                    <div className="flex justify-between pb-2 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">Spark Plug</dt>
                      <dd className="text-white font-medium text-right bg-white/10 px-3 py-1 rounded-full text-sm">DLE CM6</dd>
                    </div>
                  </dl>
                </div>

                {/* Electrical & Weights */}
                <div className="p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-500">
                  <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                    <div className="p-3 bg-purple-500/10 rounded-xl">
                      <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    Electrical & Weight
                  </h3>
                  <dl className="space-y-4">
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">Starter Motor Power</dt>
                      <dd className="text-white font-medium text-right">12V 400W</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">Generator Voltage</dt>
                      <dd className="text-white font-medium text-right">14.5V</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">Generator Power</dt>
                      <dd className="text-white font-medium text-right">350W/6000rpm</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 group">
                      <dt className="text-gray-400 group-hover:text-gray-300 transition-colors mt-1">Weight Data</dt>
                      <dd className="text-white font-medium text-right space-y-1">
                        <div className="flex justify-end items-center gap-2"><span className="text-gray-500 text-sm">Engine+Exhaust</span> 4200g</div>
                        <div className="flex justify-end items-center gap-2"><span className="text-gray-500 text-sm">Rectifier</span> 415g</div>
                        <div className="flex justify-end items-center gap-2"><span className="text-gray-500 text-sm">Ignition+Spark Plug</span> 200g</div>
                        <div className="flex justify-end items-center gap-2"><span className="text-gray-500 text-sm">Relay</span> 160g</div>
                      </dd>
                    </div>
                  </dl>
                </div>

              </div>

              {/* Power Generation Curve Table */}
              <div className="p-8 md:p-12 border-t border-white/10 bg-[#0a0a0a]">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">Power Output Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full max-w-2xl mx-auto text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="py-4 px-6 text-gray-400 font-medium">RPM</th>
                        <th className="py-4 px-6 text-gray-400 font-medium">Output Voltage (V)</th>
                        <th className="py-4 px-6 text-gray-400 font-medium">Output Power (W)</th>
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

        {/* Dimensions */}
        <section id="dimensions" className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Installation Dimensions</h2>
            <p className="text-gray-400">Precise engineering drawings for easy installation planning</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-900/50 rounded-[2rem] p-6 border border-white/5 group">
              <Image src="/images/aero-engine/DLE130g/DLE130SAGcc1.jpg" alt="DLE130G Dimensions" width={1200} height={800} className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500 rounded-xl bg-white/5" />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
