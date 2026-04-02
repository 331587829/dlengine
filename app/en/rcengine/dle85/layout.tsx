import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE85 RC Engine - DL Engine Large RC Power System',
  description: 'DLE85 RC engine provides 85cc displacement of powerful performance, suitable for large RC models and drones with high power output and stable performance for professional RC enthusiasts',
  keywords: 'DLE85, RC engine, 85cc engine, large RC model, drone power',
};

export default function DLE85Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}