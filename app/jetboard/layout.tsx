import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '动力冲浪板 - DL Engine 高性能水上运动动力系统',
  description: 'DL Engine 动力冲浪板发动机，为水上运动提供强劲动力，具有高可靠性、低噪音和环保性能，适合各种水域环境使用',
  keywords: '动力冲浪板, 水上运动, 冲浪板发动机, 水上动力, 水上娱乐设备',
};

export default function JetboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}