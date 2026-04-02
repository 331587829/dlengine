'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DLE120MAPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Remove parallax effects, focus on fullscreen image display

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 font-sans text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Fullscreen Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/DLE120MA/DLE128ZT1.jpg"
            alt="DLE128MA Agricultural Drone"
            fill
            className="object-cover w-full h-full"
            priority
            draggable={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight text-white">
                DLE128MA
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Gas-Electric Hybrid Agricultural Drone - Refuel and Fly Instantly
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => {
                    setCurrentVideo('https://cdn.dlengine.com/video/DLE-120MA.mp4');
                    setIsVideoModalOpen(true);
                  }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-sm font-medium">Explore Product</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Core Technology - Gas to Electric */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Gas-Electric Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary hybrid system solving the endurance limitations of traditional electric drones
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/DLE120MA/DLE128ZT2.jpg"
                alt="DLE128MA Gas-Electric System"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Refuel and Fly Instantly</h3>
                <p className="text-gray-700 leading-relaxed">
                  Uses regular gasoline as the primary power source, solving issues like small payload capacity, 
                  short battery life, long charging times, and the need to carry generators for field operations. 
                  One refueling can spray 40L of chemicals continuously, increasing efficiency by 2-3 times.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hybrid Closed-Loop Control</h3>
                <p className="text-gray-700 leading-relaxed">
                  The generator system uses automatic control combined with battery packs to form a hybrid 
                  closed-loop control system. In case of engine failure during flight, it automatically 
                  activates the backup battery for safe return and landing (pure electric flight time up to 3 minutes).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technical Specifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Engine Parameters */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                Engine Core
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Engine Type</span>
                  <span className="font-semibold text-gray-900">Horizontally Opposed Twin-Cylinder Water-Cooled</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Bore × Stroke</span>
                  <span className="font-semibold text-gray-900">47mm × 35mm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Engine Displacement</span>
                  <span className="font-semibold text-gray-900">128cm³</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Engine Weight</span>
                  <span className="font-semibold text-gray-900">6.2Kg (without accessories)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Generator Power</span>
                  <span className="font-semibold text-gray-900">7.4KW (0 altitude)/8100RPM</span>
                </div>
              </div>
            </div>

            {/* Flight Performance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-green-600 rounded-full"></div>
                Flight Performance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Takeoff Weight</span>
                  <span className="font-semibold text-gray-900">Up to 53KG</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Payload Capacity</span>
                  <span className="font-semibold text-gray-900">Up to 20kg</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Arm Span</span>
                  <span className="font-semibold text-gray-900">1900mm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Spray Width</span>
                  <span className="font-semibold text-gray-900">Up to 8m</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Operation Efficiency</span>
                  <span className="font-semibold text-gray-900">200 acres/hour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image - Core Features */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/DLE120MA/DLE128ZT3.jpg"
            alt="DLE128MA Core Features"
            fill
            className="object-cover w-full h-full"
            draggable={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-4">Gas-to-Electric Technology</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Uses regular gasoline as power fuel, one refueling can spray 40L of chemicals continuously,
                  increasing operation efficiency by 2-3 times, solving the endurance pain points of electric drones
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-4">Intelligent Control System</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Hybrid closed-loop control, automatically activates backup battery for safe return in case of engine failure,
                  pure electric flight time up to 3 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image - Product Advantages */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/DLE120MA/DLE128ZT4.jpg"
            alt="DLE128MA Product Advantages"
            fill
            className="object-cover w-full h-full"
            draggable={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-4">High-Efficiency Operation</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Takeoff weight up to 53KG, payload capacity 20kg, spray width up to 8m,
                  can complete 200 acres of operation area per hour
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-4">Intelligent Flight System</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Equipped with route planning, autonomous flight capability, RTK centimeter-level high-precision positioning,
                  achieving precise route flight
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligent Flight System */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Intelligent Flight System</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Route Planning</h3>
              <p className="text-gray-600">Intelligent route planning with HD maps, automatic spray path generation</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Positioning</h3>
              <p className="text-gray-600">RTK centimeter-level positioning system for accurate flight paths</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Protection</h3>
              <p className="text-gray-600">Return-to-home, propeller failure protection ensuring flight safety</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">Product Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <Image
                src="/images/DLE120MA/DLE128ZT5.jpg"
                alt="DLE128MA Agricultural Drone"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Features</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Foldable arm design for easy transportation and field operations</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Micro-pump control technology and flow control system for precise spraying</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Hybrid closed-loop control system, automatic backup battery activation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Route planning, autonomous/semi-autonomous flight capability, easy operation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
            Start the New Era of Smart Agriculture
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            DLE128MA agricultural drone provides efficient and reliable crop protection solutions for modern agriculture
          </p>
          <div className="group relative inline-block">
            <button className="px-10 py-5 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 text-lg shadow-lg">
              Get Quote
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
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}