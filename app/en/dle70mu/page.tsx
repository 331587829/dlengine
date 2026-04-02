'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DLE70MUPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Product features data
  const features = [
    {
      title: "5-Hour Long Endurance",
      description: "Gasoline-powered system, completely solves the problems of long battery charging time and short flight time, can fly continuously for 5 hours with one refueling",
      icon: "⏱️"
    },
    {
      title: "Professional Pod System",
      description: "30TIR-50 dual-light infrared camera, 30x high-definition zoom lens, supports thermal imaging and temperature measurement functions",
      icon: "📷"
    },
    {
      title: "Intelligent Flight Control",
      description: "Dual-processor redundant design, IMU sensors, RTK centimeter-level positioning accuracy, ensuring flight stability and safety",
      icon: "🧠"
    },
    {
      title: "Safe and Reliable",
      description: "Fault return, loss of control protection, ADS-B chip, multiple safety protection systems ensure flight safety",
      icon: "🛡️"
    }
  ];

  // Technical specifications data
  const specifications = [
    { label: "Max Takeoff Weight", value: "42kg (sea level)" },
    { label: "Bare Weight", value: "23kg" },
    { label: "Max Additional Load", value: "10kg (sea level)" },
    { label: "Positioning Accuracy", value: "RTK: 0.025m" },
    { label: "Max Flight Time", value: "5 hours" },
    { label: "Max Signal Distance", value: "≥15km" },
    { label: "Video Transmission", value: "≥1080p HD" },
    { label: "Protection Level", value: "IP43" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 font-sans text-white overflow-x-hidden">
      <Navbar />

      {/* Fullscreen Hero Section - Poster Style */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/DLE70MU/DLE70MUZT1.jpg"
            alt="DLE70MU Long Endurance Drone"
            fill
            className="object-cover w-full h-full"
            priority
            draggable={false}
            sizes="100vw"
          />
          {/* Gradient mask effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                DLE70MU
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed font-light">
                Gas-Powered Long Endurance Drone - 5 Hours Continuous Flight
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
                Professional industrial drone equipped with dual-light infrared pod system, 
                RTK centimeter-level positioning accuracy, providing reliable solutions for 
                security patrols, emergency rescue, and industrial inspection
              </p>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-sm font-medium">Explore Product</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Core Features Display */}
      <section className="py-32 px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Core Advantages</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional industrial drone providing reliable support for various complex environment operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-black/60 rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Image Display - Infrared Equipment */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/DLE70MU/DLE70MUZT4.jpg"
            alt="DLE70MU Infrared Equipment System"
            fill
            className="object-cover w-full h-full"
            draggable={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center px-6 lg:px-8">
          <div className="max-w-4xl text-white">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-left">Professional Infrared Equipment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-3">30TIR-50 Dual-Light Infrared</h3>
                <p className="text-gray-200">Supports thermal imaging function, suitable for night patrol and tracking, with temperature measurement capability</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-3">30x HD Zoom</h3>
                <p className="text-gray-200">Intelligent positioning tracking, two gimbal follow modes, precise target tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Display */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technical Specifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-black/30 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                    {spec.value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">{spec.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Image Display - Flight Performance */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/DLE70MU/DLE70MUZT3.jpg"
            alt="DLE70MU Flight Performance"
            fill
            className="object-cover w-full h-full"
            draggable={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-end justify-center px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Excellent Flight Performance</h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-3">Intelligent Flight Control</h3>
                <p className="text-gray-200">
                  Dual-processor redundant design, 3IMU sensors, real-time switching in case of failure,
                  improving flight safety and stability
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-3">Remote Monitoring Management</h3>
                <p className="text-gray-200">
                  Supports remote viewing of multiple drone positions and flight parameters,
                  drone and team management, recording drone historical flight data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrared Camera Function Display - Three Image Grid */}
      <section className="py-32 px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Infrared Camera Functions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional thermal imaging system providing powerful support for night operations and special environment detection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/DLE70MU/DLE70MUZT5.jpg"
                  alt="DLE70MU Infrared Camera Function 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  draggable={false}
                 sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Thermal Imaging Detection</h3>
              <p className="text-gray-300">Supports night thermal imaging detection with high temperature measurement accuracy</p>
            </div>

            <div className="group relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/DLE70MU/DLE70MUZT6.jpg"
                  alt="DLE70MU Infrared Camera Function 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  draggable={false}
                 sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">HD Zoom</h3>
              <p className="text-gray-300">30x optical zoom, clear visibility of distant targets</p>
            </div>

            <div className="group relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/DLE70MU/DLE70MUZT7.jpg"
                  alt="DLE70MU Infrared Camera Function 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  draggable={false}
                 sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Intelligent Tracking</h3>
              <p className="text-gray-300">Automatic target recognition and tracking, multiple follow modes</p>
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