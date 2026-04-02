import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE170G Aircraft Engine - DL Engine High-Power Aviation System',
  description: 'DLE170G aircraft engine provides powerful 170cc displacement, suitable for large light sport aircraft and drones, featuring high power output and reliable performance',
  keywords: 'DLE170G, aircraft engine, 170cc engine, high-power engine, drone engine',
};

export default function DLE170GLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}