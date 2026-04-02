'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DLE35HDPage() {
  const [activeImage, setActiveImage] = useState(0);

  // Product main images
  const mainImages = [
    '/images/hevengine/DLE35HD/DLE35HDZT1.jpg',
    '/images/hevengine/DLE35HD/DLE35HDZT2.jpg',
    '/images/hevengine/DLE35HD/DLE35HDZT3.jpg'
  ];

  // Accessories with titles
  const accessories = [
    {
      title: 'Radiator Water Pump and Coolant Storage Observation Window',
      image: '/images/hevengine/DLE35HD/DLE35HDFJ1.jpg'
    },
    {
      title: 'Engine Radiator',
      image: '/images/hevengine/DLE35HD/DLE35HDFJ2.jpg'
    },
    {
      title: 'Food-grade Silicone Braided Tube Reinforced Steam Explosion-proof Hose',
      image: '/images/hevengine/DLE35HD/DLE35HDFJ3.jpg'
    },
    {
      title: 'Throttle Controller',
      image: '/images/hevengine/DLE35HD/DLE35HDFJ4.jpg'
    },
    {
      title: 'Complete Engine Kit',
      image: '/images/hevengine/DLE35HD/DLE35HDFJ5.jpg'
    },
    {
      title: 'Integrated Starter and Generator',
      image: '/images/hevengine/DLE35HD/DLE35HDFJ6.jpg'
    }
  ];

  // Dimension image
  const dimensionImage = '/images/hevengine/DLE35HD/DLE35HDcc1.jpg';

  // Generator parameters
  const generatorParams = [
    { name: 'Type', value: 'Three-phase Permanent Magnet Generator' },
    { name: 'Voltage', value: 'AC50V to DC50V' },
    { name: 'Frequency', value: 'Non-fixed frequency, frequency changes with engine speed' }
  ];

  // Engine parameters
  const engineParams = [
    { name: 'Type', value: 'Single Cylinder Water Cooled' },
    { name: 'Displacement', value: '35cm³' },
    { name: 'Bore × Stroke', value: '38.5mm×30mm' },
    { name: 'Power', value: '3.5HP/8500 RPM, 2.5KW (0 altitude)' },
    { name: 'Idle Speed', value: '5000-6000 RPM' },
    { name: 'Engine Weight', value: '3.3KG' },
    { name: 'Cooling System Weight', value: '2KG (including 800ML coolant)' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 font-sans text-white">
      <Navbar />

      {/* Product Secondary Navigation */}
      <div className="sticky top-14 z-40 w-full bg-black/90 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center text-sm font-medium">
            <span className="text-2xl font-bold text-white tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DLE35HD</span>
            <div className="flex space-x-8 text-gray-300">
              <a href="#overview" className="hover:text-cyan-400 transition-colors duration-300">Overview</a>
              <a href="#specs" className="hover:text-cyan-400 transition-colors duration-300">Specs</a>
              <a href="#downloads" className="hover:text-cyan-400 transition-colors duration-300">Downloads</a>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Modern Product Showcase */}
        <section id="overview" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {/* Product Image Carousel - Maximized Display */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-800/50 border border-gray-700 group w-full">
                {/* Main Image Carousel */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  {mainImages.map((src, index) => (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <img
                        src={src}
                        alt={`DLE35HD Product Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Carousel Control Buttons */}
                <button
                  onClick={() => setActiveImage((prev) => (prev - 1 + mainImages.length) % mainImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white backdrop-blur-md border border-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50 hover:scale-110"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveImage((prev) => (prev + 1) % mainImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white backdrop-blur-md border border-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50 hover:scale-110"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Desktop Thumbnail Navigation - Bottom Left */}
                <div className="absolute bottom-6 left-6 flex gap-3 z-20 hidden md:flex">
                  {mainImages.map((src, index) => (
                    <button
                      key={src}
                      onClick={() => setActiveImage(index)}
                      className={`relative w-16 h-10 rounded-lg overflow-hidden transition-all duration-300 ${activeImage === index ? 'ring-2 ring-cyan-400 scale-105 shadow-lg' : 'ring-1 ring-gray-600 opacity-70 hover:opacity-100'}`}
                    >
                      <img
                        src={src}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Mobile Thumbnail Navigation - Below Image */}
              <div className="flex md:hidden justify-center gap-3 mt-4">
                {mainImages.map((src, index) => (
                  <button
                    key={src}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-16 h-10 rounded-lg overflow-hidden transition-all duration-300 ${activeImage === index ? 'ring-2 ring-cyan-400 scale-105 shadow-lg' : 'ring-1 ring-gray-600 opacity-70 hover:opacity-100'}`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Product Information - Moved below carousel */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-center">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DLE35HD</span>
                    <br />
                    <span className="text-gray-300">Hybrid Engine</span>
                  </h1>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto text-center">
                    The DLE35HD is an advanced hybrid engine featuring a single cylinder water-cooled design, delivering efficient and stable power output.
                    Integrated with a three-phase permanent magnet generator, it provides reliable electrical support for various applications.
                  </p>
                </div>

                {/* Core Features - Adjusted to 4-column layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">Efficient Power</h3>
                    <p className="text-sm text-gray-400 text-center">3.5HP/8500 RPM, 2.5KW power output</p>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">Electrical Support</h3>
                    <p className="text-sm text-gray-400 text-center">Integrated three-phase permanent magnet generator</p>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">Reliable Cooling</h3>
                    <p className="text-sm text-gray-400 text-center">Efficient water cooling system ensures stable operation</p>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">Lightweight Design</h3>
                    <p className="text-sm text-gray-400 text-center">Engine only weighs 3.3KG for easy installation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessories Showcase */}
        <section id="accessories" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-gray-800">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Product Accessories</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Complete accessory kit ensuring efficient installation and stable operation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessories.map((accessory, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={accessory.image}
                      alt={accessory.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{accessory.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section id="specs" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technical Specifications</span>
              </h2>
              <p className="text-xl text-gray-400">Detailed product specifications and performance metrics</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Generator Parameters */}
              <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-gray-700 overflow-hidden shadow-2xl">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    Generator Parameters
                  </h3>
                  <div className="space-y-6">
                    {generatorParams.map((param, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-700 pb-4">
                        <dt className="text-gray-400">{param.name}</dt>
                        <dd className="text-white font-medium">{param.value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Engine Parameters */}
              <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-gray-700 overflow-hidden shadow-2xl">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                    <div className="p-3 bg-cyan-500/20 rounded-xl">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    Engine Parameters
                  </h3>
                  <div className="space-y-6">
                    {engineParams.map((param, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-700 pb-4">
                        <dt className="text-gray-400">{param.name}</dt>
                        <dd className="text-white font-medium">{param.value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dimension Diagram */}
            <div className="mt-16 bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-gray-700 overflow-hidden shadow-2xl">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  Product Dimensions
                </h3>
                <div className="flex justify-center">
                  <div className="max-w-full">
                    <img
                      src={dimensionImage}
                      alt="DLE35HD Dimension Diagram"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-gray-800">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Support & Downloads</span>
              </h2>
              <p className="text-xl text-gray-400">Get detailed installation instructions and 3D model data for DLE35HD</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="https://cdn.dlengine.com/pdf/DLE35HD-USER%20MANUAL-CN.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex items-center gap-6">
                  <div className="p-4 bg-red-500/20 rounded-2xl">
                    <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">User Manual</h4>
                    <p className="text-sm text-gray-500">PDF Document</p>
                  </div>
                </div>
              </a>

              <a 
                href="https://cdn.dlengine.com/3D/ZIP/DLE35HD.zip" 
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex items-center gap-6">
                  <div className="p-4 bg-blue-500/20 rounded-2xl">
                    <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">3D Model</h4>
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