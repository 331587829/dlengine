'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '@/lib/i18n/hooks';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const { isEnglish, pathname } = useLocale();

  // 动态计算中英文切换的路径
  const getLanguageSwitchPath = (targetIsEnglish: boolean) => {
    if (!pathname) return targetIsEnglish ? '/en' : '/';
    
    // 检查当前路径是否已经包含语言前缀
    const currentIsEnglish = pathname.startsWith('/en');
    const pathWithoutLocale = currentIsEnglish ? pathname.replace(/^\/en/, '') : pathname;
    
    if (targetIsEnglish) {
      // 要切换到英文
      if (currentIsEnglish) {
        // 如果已经在英文页面，保持当前路径
        return pathname;
      } else {
        // 当前是中文，切换到英文
        return `/en${pathWithoutLocale}`;
      }
    } else {
      // 要切换到中文
      if (currentIsEnglish) {
        // 当前是英文，切换到中文
        return pathWithoutLocale || '/';
      } else {
        // 如果已经在中文页面，保持当前路径
        return pathname;
      }
    }
  };

  // 根据语言状态定义菜单项
  const navItems = isEnglish 
    ? [
        
        { 
          name: 'RC Engine', 
          path: '#',
          subItems: [
            { name: 'DLE20', path: '/en/rcengine/dle20' },
            { name: 'DLE20RA', path: '/en/rcengine/dle20ra' },
            { name: 'DLE30', path: '/en/rcengine/dle30' },
            { name: 'DLE35RA', path: '/en/rcengine/dle35ra' },
            { name: 'DLE40', path: '/en/rcengine/dle40' },
            { name: 'DLE55', path: '/en/rcengine/dle55' },
            { name: 'DLE55RA', path: '/en/rcengine/dle55ra' },
            { name: 'DLE60', path: '/en/rcengine/dle60' },
            { name: 'DLE61', path: '/en/rcengine/dle61' },
            { name: 'DLE65', path: '/en/rcengine/dle65' },
            { name: 'DLE85', path: '/en/rcengine/dle85' },
            { name: 'DLE111', path: '/en/rcengine/dle111' },
            { name: 'DLE120', path: '/en/rcengine/dle120' },
            { name: 'DLE120T4', path: '/en/rcengine/dle120t4' },
            { name: 'DLE130', path: '/en/rcengine/dle130' },
            { name: 'DLE170', path: '/en/rcengine/dle170' },
            { name: 'DLE222', path: '/en/rcengine/dle222' }
          ]
        },
        { name: 'Industry', path: '#', subItems: [
          { name: 'DLE130 Starter Generator', path: '/en/aero-engine/dle130g' },
          { name: 'DLE170 Starter Generator', path: '/en/aero-engine/dle170g' },
          { name: 'DLE170M Starter Generator', path: '/en/aero-engine/dle170mg' },
          { name: 'DLE200', path: '/en/aero-engine/dle200' },
          { name: 'DLE400', path: '/en/aero-engine/dle400' },
          { name: 'DLE430', path: '/en/aero-engine/dle430' }
        ]},
        { name: 'Hybrid', path: '#', subItems: [
          { name: 'DLE35HD', path: '/en/hevengine/dle35hd' },
          { name: 'DLE70HD', path: '/en/hevengine/dle70hd' },
          { name: 'DLE128HD', path: '/en/hevengine/dle128hd' }
        ]},
        { name: 'Surfboard', path: '/en/jetboard' },
        { name: '128MA Drone', path: '/en/dle120ma' },
        { name: '70MU Drone', path: '/en/dle70mu' },
        { name: 'DL-2L Aircraft', path: '/en/dl-2l' },
      ]
    : [
        
        { 
          name: '航模引擎', 
          path: '#',
          subItems: [
            { name: 'DLE20', path: '/rcengine/dle20' },
            { name: 'DLE20RA', path: '/rcengine/dle20ra' },
            { name: 'DLE30', path: '/rcengine/dle30' },
            { name: 'DLE35RA', path: '/rcengine/dle35ra' },
            { name: 'DLE40', path: '/rcengine/dle40' },
            { name: 'DLE55', path: '/rcengine/dle55' },
            { name: 'DLE55RA', path: '/rcengine/dle55ra' },
            { name: 'DLE60', path: '/rcengine/dle60' },
            { name: 'DLE61', path: '/rcengine/dle61' },
            { name: 'DLE65', path: '/rcengine/dle65' },
            { name: 'DLE85', path: '/rcengine/dle85' },
            { name: 'DLE111', path: '/rcengine/dle111' },
            { name: 'DLE120', path: '/rcengine/dle120' },
            { name: 'DLE120T4', path: '/rcengine/dle120t4' },
            { name: 'DLE130', path: '/rcengine/dle130' },
            { name: 'DLE170', path: '/rcengine/dle170' },
            { name: 'DLE222', path: '/rcengine/dle222' }
          ]
        },
        { name: '行业应用', path: '#', subItems: [
           { name: 'DLE130启动发电版', path: '/aero-engine/dle130g' },
          { name: 'DLE170启动发电版', path: '/aero-engine/dle170g' },
          { name: 'DLE170M启动发电版', path: '/aero-engine/dle170mg' },
          { name: 'DLE200', path: '/aero-engine/dle200' },
          { name: 'DLE400', path: '/aero-engine/dle400' },
          { name: 'DLE430', path: '/aero-engine/dle430' }
        ]},
        { name: '油电混动', path: '#', subItems: [
          { name: 'DLE35HD', path: '/hevengine/dle35hd' },
          { name: 'DLE70HD', path: '/hevengine/dle70hd' },
          { name: 'DLE128HD', path: '/hevengine/dle128hd' }
        ]},
        { name: '动力冲浪板', path: '/jetboard' },
        { name: '128MA植保机', path: '/dle120ma' },
        { name: '70MU无人机', path: '/dle70mu' },
        { name: 'DL-2L载人飞机', path: '/dl-2l' },
      ];

  return (
    <>
      <nav className="fixed top-0 z-[60] w-full bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center text-xs font-medium tracking-wide text-gray-300">
          <Link href={isEnglish ? "/en" : "/"} className="flex-shrink-0 cursor-pointer hover:opacity-90 transition flex items-center">
            <Image
              src="/images/other/DLElogo.png"
              alt="DLE Logo"
              width={50}
              height={20}
              className="object-contain"
              priority
            />
          </Link>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8 h-full">
            {navItems.map((item, index) => (
              <div key={index} className="relative group flex items-center h-full">
                <Link 
                  href={item.path} 
                  className="hover:text-white transition whitespace-nowrap flex items-center gap-1"
                >
                  {item.name}
                  {item.subItems && (
                    <svg className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* 苹果风格全宽下拉面板 (Mega Menu) */}
                {item.subItems && (
                  <div className="fixed top-[56px] left-0 w-full bg-[#111111]/95 backdrop-blur-2xl border-b border-white/10 opacity-0 -translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-400 ease-out z-40 overflow-hidden shadow-2xl max-h-[calc(100vh-56px)] overflow-y-auto custom-scrollbar">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                      <div className="flex flex-wrap justify-start gap-x-8 gap-y-10">
                        {item.subItems.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.path}
                            className="group/sub flex flex-col items-center gap-3 transition-transform hover:scale-105 w-[120px]"
                          >
                            <div className="w-full aspect-[3/2] rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg group-hover/sub:border-white/30 group-hover/sub:shadow-white/5 transition-all relative">
                              {sub.name === 'DLE20' ? (
                                <Image
                                  src="/images/rcengine/DLE20/DLE20ZT1.jpg"
                                  alt="DLE20"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE20RA' ? (
                                <Image
                                  src="/images/rcengine/DLE20RA/DLE20RAZT1.jpg"
                                  alt="DLE20RA"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE30' ? (
                                <Image
                                  src="/images/rcengine/DLE30/DLE30ZT1.jpg"
                                  alt="DLE30"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE35RA' ? (
                                <Image
                                  src="/images/rcengine/DLE35RA/DLE35RAZT1.jpg"
                                  alt="DLE35RA"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE40' ? (
                                <Image
                                  src="/images/rcengine/DLE40/DLE40ZT1.jpg"
                                  alt="DLE40"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE55' ? (
                                <Image
                                  src="/images/rcengine/DLE55/DLE55ZT1.jpg"
                                  alt="DLE55"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE55RA' ? (
                                <Image
                                  src="/images/rcengine/DLE55RA/DLE55RAZT1.jpg"
                                  alt="DLE55RA"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE60' ? (
                                <Image
                                  src="/images/rcengine/DLE60/DLE60ZT1.jpg"
                                  alt="DLE60"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE61' ? (
                                <Image
                                  src="/images/rcengine/DLE61/DLE61ZT1.jpg"
                                  alt="DLE61"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE65' ? (
                                <Image
                                  src="/images/rcengine/DLE65/DLE65ZT1.jpg"
                                  alt="DLE65"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE85' ? (
                                <Image
                                  src="/images/rcengine/DLE85/DLE85ZT1.jpg"
                                  alt="DLE85"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE111' ? (
                                <Image
                                  src="/images/rcengine/DLE111/DLE111ZT1.jpg"
                                  alt="DLE111"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE120' ? (
                                <Image
                                  src="/images/rcengine/DLE120/DLE120ZT1.jpg"
                                  alt="DLE120"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE120T4' ? (
                                <Image
                                  src="/images/rcengine/DLE120T4/DLE120T4ZT1.jpg"
                                  alt="DLE120T4"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE130' ? (
                                <Image
                                  src="/images/rcengine/DLE130/DLE130ZT1.jpg"
                                  alt="DLE130"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE170' ? (
                                <Image
                                  src="/images/rcengine/DLE170/DLE170ZT1.jpg"
                                  alt="DLE170"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE222' ? (
                                <Image
                                  src="/images/rcengine/DLE222/DLE222ZT1.jpg"
                                  alt="DLE222"
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE130启动发电版' || sub.name === 'DLE130 Starter Generator' ? (
                                <Image
                                  src="/images/aero-engine/DLE130g/DLE130SAGZT1.jpg"
                                  alt={sub.name}
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE170启动发电版' || sub.name === 'DLE170 Starter Generator' ? (
                                <Image
                                  src="/images/aero-engine/dle170g/DLE170GZT1.jpg"
                                  alt={sub.name}
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE170M启动发电版' || sub.name === 'DLE170M Starter Generator' ? (
                                <Image
                                  src="/images/aero-engine/dle170mg/DLE170MGZT1.jpg"
                                  alt={sub.name}
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE200' || sub.name === 'DLE200' ? (
                                <Image
                                  src="/images/aero-engine/dle200/DLE200ZT1.jpg"
                                  alt={sub.name}
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE400' || sub.name === 'DLE400' ? (
                                <Image
                                  src="/images/aero-engine/dle400/DLE400ZT1.jpg"
                                  alt={sub.name}
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE430' || sub.name === 'DLE430' ? (
                                <Image
                                  src="/images/aero-engine/dle430/DLE430ZT1.jpg"
                                  alt={sub.name}
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE35HD' ? (
                                <Image
                                  src="/images/hevengine/DLE35HD/DLE35HDZT1.jpg"
                                  alt={sub.name}
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE70HD' ? (
                                <Image
                                  src="/images/hevengine/DLE70HD/DLE70HDZT1.jpg"
                                  alt={sub.name}
                                  fill
                                  className="object-cover"
                                />
                              ) : sub.name === 'DLE128HD' ? (
                                <Image
                                  src="/images/hevengine/DLE128HD/DLE128HDZT1.jpg"
                                  alt={sub.name}
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <span className="text-xl font-bold text-gray-500 group-hover/sub:text-white transition-colors">
                                  {sub.name}
                                </span>
                              )}
                            </div>
                            <span className="text-sm font-medium text-gray-400 group-hover/sub:text-white transition-colors text-center w-full truncate px-1">
                              {sub.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* 语言切换按钮 */}
            <div className="hidden sm:flex bg-white/10 p-1 rounded-full border border-white/20 backdrop-blur-sm">
              <Link 
                href={getLanguageSwitchPath(false)}
                className={`px-3 py-1 rounded-full text-xs transition ${!isEnglish ? 'bg-white text-black font-semibold shadow-sm' : 'text-gray-300 hover:text-white'}`}
              >
                中
              </Link>
              <Link 
                href={getLanguageSwitchPath(true)}
                className={`px-3 py-1 rounded-full text-xs transition ${isEnglish ? 'bg-white text-black font-semibold shadow-sm' : 'text-gray-300 hover:text-white'}`}
              >
                EN
              </Link>
            </div>

            {/* 移动端汉堡菜单按钮 */}
            <button 
              className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center overflow-hidden">
                <span className={`w-full h-[2px] bg-current transform transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-px' : ''}`}></span>
                <span className={`w-full h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
                <span className={`w-full h-[2px] bg-current transform transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-px' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      </nav>

      {/* 移动端遮罩层 - 移出 nav 标签，避免被 nav 的 pointer-events 影响 */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 w-full h-[100dvh] bg-black/60 z-[55] transition-opacity duration-300"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(false);
          }}
          aria-hidden="true"
        />
      )}

      {/* 移动端侧边滑出抽屉菜单 (类似参考图的侧滑面板) - 移出 nav 标签 */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-[100dvh] w-[80%] max-w-[320px] z-[65] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 独立的毛玻璃背景层，确保 filter 正常工作 */}
        <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-xl shadow-2xl border-l border-white/10" />
        
        {/* 内容层 */}
        <div className="relative h-full overflow-y-auto px-6 py-8 flex flex-col pt-20 z-10">
          {/* 移动端导航列表 */}
          <div className="flex flex-col space-y-1 flex-grow">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-white/10 last:border-0 pb-1 pt-1">
                {item.subItems ? (
                  // 带子菜单的项 (手风琴折叠)
                  <div>
                    <button
                      onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                      className="w-full flex justify-between items-center py-4 text-lg font-bold text-white transition-colors"
                    >
                      {item.name}
                      <span className="text-2xl text-gray-500 font-light w-6 h-6 flex items-center justify-center">
                        {expandedItem === index ? '×' : '+'}
                      </span>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedItem === index ? 'max-h-[800px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                      <div className="flex flex-col space-y-3 pl-4">
                        {item.subItems.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base text-gray-300 hover:text-[#0ea5e9] transition-colors py-1 block"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // 普通链接项
                  <Link 
                    href={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-lg font-bold text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* 移动端底部语言切换 */}
          <div className="mt-auto pt-8 flex justify-center">
            <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 w-full">
              <Link 
                href={getLanguageSwitchPath(false)}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex-1 text-center py-2 rounded text-sm transition font-medium ${!isEnglish ? 'bg-white text-black shadow-sm' : 'text-gray-400'}`}
              >
                中 文
              </Link>
              <Link 
                href={getLanguageSwitchPath(true)}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex-1 text-center py-2 rounded text-sm transition font-medium ${isEnglish ? 'bg-white text-black shadow-sm' : 'text-gray-400'}`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
