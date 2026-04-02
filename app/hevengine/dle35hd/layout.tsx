import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE35HD 混合动力发动机 - DL Engine 高效节能动力系统',
  description: 'DLE35HD 混合动力发动机结合燃油和电动技术，提供35cc等效功率，具有高燃油效率和环保性能，适合小型无人机和轻型设备',
  keywords: 'DLE35HD, 混合动力发动机, 油电混合, 节能发动机, 小型无人机动力',
};

export default function DLE35HDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}