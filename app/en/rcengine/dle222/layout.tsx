import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE222 RC Engine - DL Engine Extra-High Power RC System',
  description: 'DLE222 RC engine provides 222cc displacement of extra-high power performance, suitable for extra-large RC models and industrial drones with exceptional performance and reliability',
  keywords: 'DLE222, RC engine, 222cc engine, extra-high power, industrial drone power',
};

export default function DLE222Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}