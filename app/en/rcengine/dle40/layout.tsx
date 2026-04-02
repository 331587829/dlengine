import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE40 RC Engine - DL Engine Medium RC Power System',
  description: 'DLE40 RC engine provides 40cc displacement of powerful performance, suitable for medium RC models and drones with high power output and stable performance for intermediate RC enthusiasts',
  keywords: 'DLE40, RC engine, 40cc engine, medium RC model, drone power',
};

export default function DLE40Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}