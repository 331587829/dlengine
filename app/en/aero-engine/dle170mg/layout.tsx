import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE170MG Aircraft Engine - DL Engine High-Performance Aviation Power',
  description: 'DLE170MG aircraft engine is designed for light sport aircraft, providing 170cc displacement with high reliability, low fuel consumption and excellent performance for various flight applications',
  keywords: 'DLE170MG, aircraft engine, 170cc engine, light aircraft engine, sport aircraft power',
};

export default function DLE170MGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}