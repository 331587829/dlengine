import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE130 RC Engine - DL Engine High-Performance RC Power System',
  description: 'DLE130 RC engine provides 130cc displacement of powerful performance, suitable for large RC models and drones with high power output and stable performance for professional RC enthusiasts',
  keywords: 'DLE130, RC engine, 130cc engine, large RC model, drone power',
};

export default function DLE130Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}