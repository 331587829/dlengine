import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE60 RC Engine - DL Engine Medium RC Power System',
  description: 'DLE60 RC engine provides 60cc displacement of powerful performance, suitable for medium RC models and drones with high power output and stable performance for intermediate RC enthusiasts',
  keywords: 'DLE60, RC engine, 60cc engine, medium RC model, drone power',
};

export default function DLE60Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}