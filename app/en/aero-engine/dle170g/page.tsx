'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DLE170GPage() {
  const [isGeneratorVersion, setIsGeneratorVersion] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Switch images based on version
  const images = isGeneratorVersion 
    ? [
        '/images/aero-engine/dle170g/DLE170GZT1.jpg',
        '/images/aero-engine/dle170g/DLE170GZT2.jpg'
      ]
    : [
        '/images/aero-engine/dle170g/DLE170GDZT1.jpg',
        '/images/aero-engine/dle170g/DLE170GDZT2.jpg'
      ];

  // Dimension images
  const dimensionImages = isGeneratorVersion 
    ? ['/images/aero-engine/dle170g/DLE170Gcc1.jpg']
    : ['/images/aero-engine/dle170g/DLE170GDcc1.jpg'];

  // Version toggle handler
  const handleVersionToggle = () => {
    // Reset to first image when switching versions
    setActiveImage(0);
    // Toggle version state
    setIsGeneratorVersion(!isGeneratorVersion);
  };

  // Common parameters
  const commonParams = [
    { name: 'Power', value: '17.5HP/7500rpm', icon: 'power' },
    { name: 'Bore × Stroke', value: '52mm × 40mm', icon: 'dimensions' },
    { name: 'Recommended Propeller Sizes', value: '32x10 ; 32x12', icon: 'propeller' },
    { name: 'Compression Ratio', value: '9.5 : 1', icon: 'compression' },
    { name: 'Lubrication Ratio', value: '30 : 1', icon: 'lubrication' },
    { name: 'Displacement', value: '170cm³', icon: 'displacement' },
    { name: 'Recommended Spark Plug', value: 'NGK CMR7H', icon: 'spark-plug' },
    { name: 'Starter Motor Power', value: '12V 400W', icon: 'motor' },
  ];

  // Generator-specific parameters
  const generatorParams = [
    { name: 'Generator Voltage', value: '14.5V', icon: 'voltage' },
    { name: 'Generator Power', value: '350W/6000rpm', icon: 'generator' },
  ];

  // Weight distribution - Standard version
  const standardWeight = [
    { component: 'Engine + Exhaust', weight: '5500g' },
    { component: 'Igniter + Spark Plug', weight: '265g' },
    { component: 'Relay', weight: '160g' },
  ];

  // Weight distribution - Generator version (extra rectifier)
  const generatorWeight = [
    { component: 'Engine + Exhaust', weight: '5500g' },
    { component: 'Igniter + Spark Plug', weight: '265g' },
    { component: 'Relay', weight: '160g' },
    { component: 'Rectifier', weight: '415g' },
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />

      {/* Product Sub Navigation */}
      <div className="sticky top-14 z-40 w-full bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12 items-center text-sm font-medium">
            <span className="text-xl font-bold text-white tracking-tight">DLE170G</span>
            <div className="flex space-x-6 text-gray-400">
              <a href="#overview" className="hover:text-white transition">Overview</a>
              <a href="#specs" className="hover:text-white transition">Specs</a>
              <a href="#downloads" className="hover:text-white transition">Downloads</a>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section with Version Switch */}
        <section id="overview" className="relative pt-32 pb-10 flex flex-col items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
            DLE170G
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium mb-12 max-w-2xl">
            {isGeneratorVersion ? 'Electric Start Generator Version - Stable power and electricity output' : 'Electric Start Version - Powerful performance with easy start'}
          </p>
          
          {/* Version Switcher */}
          <div className="mb-12 flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <span className={`text-sm font-medium transition ${!isGeneratorVersion ? 'text-white font-semibold' : 'text-gray-400'}`}>DLE170G Electric Start</span>
            <button
              onClick={handleVersionToggle}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-white/20 transition-all duration-300 ease-in-out"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${isGeneratorVersion ? 'translate-x-8' : 'translate-x-1'}`}
              ></span>
            </button>
            <span className={`text-sm font-medium transition ${isGeneratorVersion ? 'text-white font-semibold' : 'text-gray-400'}`}>DLE170GD Electric Start Generator</span>
          </div>

          <div className="w-full max-w-[1400px] mx-auto select-none">
            {/* Main Product Image Carousel */}
            <div className="relative rounded-3xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden aspect-[16/9] mb-8 group">
              {/* Aurora Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none"></div>

              {/* Cross Fade Images */}
              {images.map((src, index) => (
                <Image
                  key={`${src}-${isGeneratorVersion ? 'g' : 'gd'}`}
                  src={src}
                  alt={`DLE170G ${isGeneratorVersion ? 'Electric Start Generator' : 'Electric Start'} ${index + 1}`}
                  fill
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  className={`object-cover transition-opacity duration-700 ease-in-out ${activeImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  priority={index === 0}
                  draggable={false}
                  onError={(e) => {
                    console.error(`Image load failed: ${src}`);
                    e.currentTarget.style.display = 'none';
                  }}
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
        </section>

        {/* Technical Specifications */}
        <section id="specs" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Technical Specifications</h2>
              <p className="text-gray-400">Explore the detailed performance metrics of the DLE170G</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Core Performance Parameters */}
              <div className="lg:col-span-2">
                <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                  <div className="p-8 md:p-14">
                    <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3">
                      <div className="p-3 bg-blue-500/10 rounded-xl">
                        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      Core Performance Parameters
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {commonParams.map((param, index) => (
                        <div key={index} className="flex justify-between border-b border-white/5 pb-4 group">
                          <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">{param.name}</dt>
                          <dd className="text-white font-medium text-right">{param.value}</dd>
                        </div>
                      ))}
                      
                      {/* Generator-specific parameters - Dynamic Display */}
                      {isGeneratorVersion && (
                        <>
                          {generatorParams.map((param, index) => (
                            <div 
                              key={index} 
                              className="flex justify-between border-b border-white/5 pb-4 group transition-all duration-500 ease-in-out"
                              style={{ animation: 'slideIn 0.5s ease-out' }}
                            >
                              <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">{param.name}</dt>
                              <dd className="text-white font-medium text-right">{param.value}</dd>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Weight Distribution */}
              <div>
                <div className="bg-[#050505]/60 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                  <div className="p-8 md:p-14">
                    <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3">
                      <div className="p-3 bg-purple-500/10 rounded-xl">
                        <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                      Weight Distribution
                    </h3>
                    <dl className="space-y-6">
                      {/* Dynamic Weight Distribution */}
                      {(isGeneratorVersion ? generatorWeight : standardWeight).map((item, index) => (
                        <div 
                          key={index} 
                          className="flex justify-between border-b border-white/5 pb-4 group transition-all duration-500 ease-in-out"
                          style={{ animation: 'slideIn 0.3s ease-out' }}
                        >
                          <dt className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.component}</dt>
                          <dd className="text-white font-medium text-right">{item.weight}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dimension Diagrams */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Product Dimensions</h2>
            <p className="text-gray-400">Precise engineering diagrams for installation planning.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {dimensionImages.map((src, index) => (
              <div key={index} className="bg-gray-900/50 rounded-[2rem] p-6 border border-white/5 group">
                <Image 
                  src={src} 
                  alt={`DLE170G ${isGeneratorVersion ? 'Electric Start Generator' : 'Electric Start'} Dimension Diagram`} 
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Downloads Section */}
        <section id="downloads" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Technical Support & Downloads</h2>
              <p className="text-gray-400 text-lg">Download detailed installation instructions and 3D model data for the DLE170G.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://cdn.dlengine.com/pdf/DLE170Gmanual.pdf" 
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
                href="https://cdn.dlengine.com/3D/ZIP/DLE170G.zip" 
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

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}