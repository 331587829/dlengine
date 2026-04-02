import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE120 RC Engine - DL Engine High-Performance RC Power System',
  description: 'DLE120 RC engine provides 120cc displacement of powerful performance, suitable for large RC models and drones with high power output and stable performance for professional RC enthusiasts',
  keywords: 'DLE120, RC engine, 120cc engine, large RC model, drone power',
};

export default function DLE120Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}