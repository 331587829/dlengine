import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE61 RC Engine - DL Engine Medium RC Power System',
  description: 'DLE61 RC engine provides 61cc displacement of powerful performance, suitable for medium RC models and drones with high power output and stable performance for intermediate RC enthusiasts',
  keywords: 'DLE61, RC engine, 61cc engine, medium RC model, drone power',
};

export default function DLE61Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}