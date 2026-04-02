import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE170 RC Engine - DL Engine High-Power RC Power System',
  description: 'DLE170 RC engine provides 170cc displacement of powerful performance, suitable for extra-large RC models and industrial drones with exceptional power output and reliable performance',
  keywords: 'DLE170, RC engine, 170cc engine, extra-large RC model, industrial drone power',
};

export default function DLE170Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}