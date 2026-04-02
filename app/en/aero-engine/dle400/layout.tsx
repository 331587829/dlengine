import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE400 Aircraft Engine - DL Engine Ultra-High Performance Aviation Power',
  description: 'DLE400 aircraft engine provides 400cc displacement of ultra-strong power, suitable for large sport aircraft and industrial drones with exceptional power output and stable performance',
  keywords: 'DLE400, aircraft engine, 400cc engine, ultra-high performance engine, industrial drone power',
};

export default function DLE400Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}