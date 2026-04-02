import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE130G Aircraft Engine - DL Engine High-Performance Aviation Power',
  description: 'DLE130G aircraft engine is designed for light sport aircraft, providing powerful 130cc displacement with high reliability, low fuel consumption and excellent performance, suitable for various flight applications',
  keywords: 'DLE130G, aircraft engine, 130cc engine, light aircraft engine, sport aircraft power',
};

export default function DLE130GLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}