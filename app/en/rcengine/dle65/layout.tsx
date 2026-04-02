import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE65 RC Engine - DL Engine Medium RC Power System',
  description: 'DLE65 RC engine provides 65cc displacement of powerful performance, suitable for medium RC models and drones with high power output and stable performance for intermediate RC enthusiasts',
  keywords: 'DLE65, RC engine, 65cc engine, medium RC model, drone power',
};

export default function DLE65Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}