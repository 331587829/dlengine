import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE200 Aircraft Engine - DL Engine High-Power Aviation System',
  description: 'DLE200 aircraft engine provides 200cc displacement of powerful performance, suitable for large light sport aircraft and drones with high power output and reliable performance',
  keywords: 'DLE200, aircraft engine, 200cc engine, high-power engine, drone engine',
};

export default function DLE200Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}