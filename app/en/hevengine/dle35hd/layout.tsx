import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE35HD Hybrid Engine - DL Engine Efficient Power System',
  description: 'DLE35HD hybrid engine combines fuel and electric technology, providing 35cc equivalent power with high fuel efficiency and environmental performance, suitable for small drones and light equipment',
  keywords: 'DLE35HD, hybrid engine, fuel-electric hybrid, efficient engine, small drone power',
};

export default function DLE35HDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}