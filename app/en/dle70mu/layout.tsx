import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE70MU Engine - DL Engine High-Performance Drone Power System',
  description: 'DLE70MU engine is designed specifically for drones, featuring high power-to-weight ratio, low fuel consumption and reliable performance, suitable for industrial and agricultural drone applications',
  keywords: 'DLE70MU, drone engine, industrial drone, agricultural drone, high-performance engine',
};

export default function Dle70muLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}