import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FloatingActions } from '@/components/layout/FloatingActions';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'DL Engine - 航空发动机技术专家',
    template: '%s | DL Engine'
  },
  description: 'DL Engine 专业生产航空发动机、无人机发动机和动力冲浪板发动机，提供高性能、高可靠性的动力解决方案',
  keywords: '航空发动机, 无人机发动机, 动力冲浪板, 航空技术, 发动机技术, DL Engine',
  alternates: {
    canonical: 'https://www.dlengine.com',
    languages: {
      'zh': 'https://www.dlengine.com',
      'en': 'https://www.dlengine.com/en',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}