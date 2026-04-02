import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jetboard - DL Engine High-Performance Water Sports Power Systems',
  description: 'DL Engine jetboard engines provide powerful propulsion for water sports, featuring high reliability, low noise and environmental performance, suitable for various water environments',
  keywords: 'jetboard, water sports, surfboard engine, water power, water recreation equipment',
};

export default function JetboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}