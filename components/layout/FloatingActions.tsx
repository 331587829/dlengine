'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 监听滚动事件，决定是否显示回到顶部按钮
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 点击外部关闭面板
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = 'touches' in event ? event.touches[0]?.target : event.target;
      if (containerRef.current && !containerRef.current.contains(target as Node)) {
        setActivePanel(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside as EventListener);
    document.addEventListener('touchstart', handleClickOutside as EventListener);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const togglePanel = (panel: string) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <div ref={containerRef} className="fixed right-4 bottom-24 md:right-8 md:bottom-8 z-50 flex flex-col gap-2">
      {/* 回到顶部 (滚动超过300px才显示) */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 bg-black/60 backdrop-blur-xl border border-white/10 text-gray-300 rounded-lg shadow-2xl flex items-center justify-center hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 touch-manipulation ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="回到顶部"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* 按钮组容器 */}
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-visible">
        {/* 微信 */}
        <div className="group relative">
          <button 
            onClick={() => togglePanel('wechat')}
            onTouchStart={() => togglePanel('wechat')}
            className="w-12 h-12 text-gray-300 hover:text-[#07C160] hover:bg-white/10 active:bg-white/20 focus:text-[#07C160] focus:bg-white/10 flex items-center justify-center transition-colors border-b border-white/5 outline-none touch-manipulation"
            aria-label="微信联系"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.5,13.5 C7.7,13.5 7,12.8 7,12 C7,11.2 7.7,10.5 8.5,10.5 C9.3,10.5 10,11.2 10,12 C10,12.8 9.3,13.5 8.5,13.5 Z M15.5,13.5 C14.7,13.5 14,12.8 14,12 C14,11.2 14.7,10.5 15.5,10.5 C16.3,10.5 17,11.2 17,12 C17,12.8 16.3,13.5 15.5,13.5 Z M12,6 C6.5,6 2,9.6 2,14 C2,16.5 3.4,18.8 5.7,20.4 L4.5,23.5 L7.8,22.1 C9.1,22.5 10.5,22.7 12,22.7 C17.5,22.7 22,19.1 22,14.7 C22,10.3 17.5,6 12,6 Z"/>
            </svg>
          </button>
          
          {/* 微信二维码弹窗悬浮 */}
          <div className={`absolute right-[calc(100%+16px)] bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 transition-all duration-300 translate-x-4 bg-black/80 backdrop-blur-xl p-3 rounded-xl shadow-2xl border border-white/10 z-50 ${
            activePanel === 'wechat' ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="w-32 h-32 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 overflow-hidden relative">
              <Image 
                src="/images/other/qwzyt.png" 
                alt="微信二维码" 
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* 微信面板的小三角 */}
            <div className="absolute right-[-6px] bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-3 h-3 bg-black/80 backdrop-blur-xl rotate-45 border-r border-t border-white/10"></div>
          </div>
        </div>

        {/* 电话 */}
        <div className="group relative">
          <button 
            onClick={() => togglePanel('phone')}
            onTouchStart={() => togglePanel('phone')}
            className="w-12 h-12 text-gray-300 hover:text-white hover:bg-blue-600 active:bg-blue-700 focus:bg-blue-600 focus:text-white flex items-center justify-center transition-colors border-b border-white/5 outline-none touch-manipulation"
            aria-label="电话联系"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
          
          {/* 电话悬浮面板 */}
          <div className={`absolute right-[calc(100%+16px)] bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 transition-all duration-300 translate-x-4 bg-black/80 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-white/10 min-w-[200px] z-50 ${
            activePanel === 'phone' ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="flex flex-col space-y-4">
              <a href="tel:13529826090" className="flex items-center group/phone outline-none active:scale-95 transition-transform touch-manipulation">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 group-hover/phone:bg-blue-500 transition-colors">
                  <svg className="w-4 h-4 text-blue-400 group-hover/phone:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-0.5">飞机</div>
                  <div className="text-base font-medium text-white group-hover/phone:text-blue-400 transition-colors">13529826090</div>
                </div>
              </a>
              
              <div className="h-px bg-white/10 w-full"></div>

              <a href="tel:18313346064" className="flex items-center group/phone outline-none">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 group-hover/phone:bg-blue-500 transition-colors">
                  <svg className="w-4 h-4 text-blue-400 group-hover/phone:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-0.5">冲浪板</div>
                  <div className="text-base font-medium text-white group-hover/phone:text-blue-400 transition-colors">18313346064</div>
                </div>
              </a>

              <div className="h-px bg-white/10 w-full"></div>

              <a href="tel:19187325509" className="flex items-center group/phone outline-none">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 group-hover/phone:bg-blue-500 transition-colors">
                  <svg className="w-4 h-4 text-blue-400 group-hover/phone:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-0.5">发动机</div>
                  <div className="text-base font-medium text-white group-hover/phone:text-blue-400 transition-colors">19187325509</div>
                </div>
              </a>
            </div>
            {/* 电话面板的小三角 */}
            <div className="absolute right-[-6px] bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-3 h-3 bg-black/80 backdrop-blur-xl rotate-45 border-r border-t border-white/10"></div>
          </div>
        </div>

        {/* 邮件 */}
        <div className="group relative">
          <button 
            onClick={() => togglePanel('email')}
            onTouchStart={() => togglePanel('email')}
            className="w-12 h-12 text-gray-300 hover:text-white hover:bg-red-500 active:bg-red-600 focus:bg-red-500 focus:text-white flex items-center justify-center transition-colors rounded-b-lg outline-none touch-manipulation"
            aria-label="邮件联系"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          
          {/* 邮件悬浮面板 */}
          <div className={`absolute right-[calc(100%+16px)] bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 transition-all duration-300 translate-x-4 bg-black/80 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-white/10 min-w-[200px] z-50 ${
            activePanel === 'email' ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="flex flex-col space-y-4">
              <a href="mailto:dle@dlengine.com" className="flex items-center group/email outline-none active:scale-95 transition-transform touch-manipulation">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3 group-hover/email:bg-red-500 transition-colors">
                  <svg className="w-4 h-4 text-red-400 group-hover/email:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 5.5V18.5C2 19.3284 2.67157 20 3.5 20H20.5C21.3284 20 22 19.3284 22 18.5V5.5C22 4.67157 21.3284 4 20.5 4H3.5C2.67157 4 2 4.67157 2 5.5ZM3.5 5.5H20.5V6.75924L12 11.5369L3.5 6.75924V5.5ZM3.5 18.5V8.47545L11.2657 12.8398C11.7226 13.0967 12.2774 13.0967 12.7343 12.8398L20.5 8.47545V18.5H3.5Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-0.5">联系邮箱</div>
                  <div className="text-base font-medium text-white group-hover/email:text-red-400 transition-colors">dle@dlengine.com</div>
                </div>
              </a>
            </div>
            {/* 邮件面板的小三角 */}
            <div className="absolute right-[-6px] bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-3 h-3 bg-black/80 backdrop-blur-xl rotate-45 border-r border-t border-white/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
