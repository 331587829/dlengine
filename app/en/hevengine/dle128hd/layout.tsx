import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE128HD Hybrid Engine - DL Engine High-Efficiency Power System',
  description: 'DLE128HD hybrid engine combines fuel and electric technology, providing 128cc equivalent power with high fuel efficiency and environmental performance, suitable for large drones and industrial equipment',
  keywords: 'DLE128HD, hybrid engine, fuel-electric hybrid, energy-efficient engine, large drone power',
};

export default function DLE128HDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}