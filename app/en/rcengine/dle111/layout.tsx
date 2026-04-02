import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE111 RC Engine - DL Engine High-Performance RC Power System',
  description: 'DLE111 RC engine provides 111cc displacement of powerful performance, suitable for large RC models and drones with high power output and stable performance for professional RC enthusiasts',
  keywords: 'DLE111, RC engine, 111cc engine, large RC model, drone power',
};

export default function DLE111Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}