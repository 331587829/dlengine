import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DL-2L Light Sport Aircraft - DL Engine Official Homepage',
  description: 'DL-2L Light Sport Aircraft - Incredible speed, unprecedented power. DL Engine provides cutting-edge aviation engine technology solutions.',
  keywords: 'DL-2L, light sport aircraft, aviation engine, drone engine, aviation technology, DL Engine',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-white selection:text-black">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-screen flex flex-col items-center justify-start pt-32 md:pt-40 overflow-hidden snap-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/Home/hero.webp" 
              alt="DL Engine Pro"
              fill
              className="object-cover object-center"
              priority
             sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">
              DL-2L Light Sport Aircraft
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-medium mb-8 drop-shadow-md">
              Incredible speed. Unprecedented power.
            </p>
            <div className="flex space-x-8 text-lg font-medium">
              <a href="/en/dl-2l" className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                Learn more <span className="text-sm">&gt;</span>
              </a>
              <a href="#" className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                Buy now <span className="text-sm">&gt;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="relative w-full h-screen flex flex-col items-center justify-end pb-32 md:pb-40 overflow-hidden snap-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/Home/details.jpg" 
              alt="Exquisite Craftsmanship"
              fill
              className="object-cover object-center"
             sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
              Craftsmanship in every detail.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-medium drop-shadow-md">
              Meticulously crafted with aviation-grade materials, pushing boundaries.<br className="hidden md:block" /> Elevating industrial design to new heights, every detail engineered for the ultimate experience.
            </p>
          </div>
        </section>

        {/* Intelligence Section */}
        <section className="relative w-full h-screen flex flex-col items-center justify-start pt-32 md:pt-40 overflow-hidden snap-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/Home/intelligence.webp" 
              alt="New Era of Intelligence"
              fill
              className="object-cover object-center"
             sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black/60"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
              DLE1600 Coming Soon
            </h2>
            <p className="text-lg md:text-xl text-gray-200 font-medium drop-shadow-md">
              80KW Powerful Performance 108HP Core Strength
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}