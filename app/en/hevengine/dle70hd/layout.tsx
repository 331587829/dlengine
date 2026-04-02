import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE70HD Hybrid Engine - DL Engine High-Efficiency Power System',
  description: 'DLE70HD hybrid engine combines fuel and electric technology, providing 70cc equivalent power with high fuel efficiency and environmental performance, suitable for medium drones and industrial equipment',
  keywords: 'DLE70HD, hybrid engine, fuel-electric hybrid, energy-efficient engine, medium drone power',
};

export default function DLE70HDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}