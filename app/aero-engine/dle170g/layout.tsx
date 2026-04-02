import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE170G 航空发动机 - DL Engine 大功率航空动力系统',
  description: 'DLE170G 航空发动机提供170cc排量的强劲动力，适用于大型轻型运动飞机和无人机，具有高功率输出和可靠性能',
  keywords: 'DLE170G, 航空发动机, 170cc发动机, 大功率发动机, 无人机发动机',
};

export default function DLE170GLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}