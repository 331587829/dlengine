'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useLocale } from '@/lib/i18n/hooks';

export const Header: React.FC = () => {
  const { locale } = useLocale();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DL</span>
            </div>
            <span className="text-xl font-bold text-gray-900">DL Engine</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              首页
            </Link>
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              产品
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              关于
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              联系
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              <Link 
                href="/" 
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  locale === 'zh' 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                中文
              </Link>
              <Link 
                href="/en" 
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  locale === 'en' 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                EN
              </Link>
            </div>
            
            <Button variant="primary" size="sm">
              联系
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};