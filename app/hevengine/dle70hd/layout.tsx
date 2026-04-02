import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE70HD 混合动力发动机 - DL Engine 高效节能动力系统',
  description: 'DLE70HD 混合动力发动机结合燃油和电动技术，提供70cc等效功率，具有高燃油效率和环保性能，适合中型无人机和工业设备',
  keywords: 'DLE70HD, 混合动力发动机, 油电混合, 节能发动机, 中型无人机动力',
};

export default function DLE70HDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}