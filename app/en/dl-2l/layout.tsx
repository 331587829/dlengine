import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DL-2L Light Sport Aircraft - DL Engine High-Performance Aircraft',
  description: 'DL-2L Light Sport Aircraft utilizes advanced aviation technology with excellent flight performance and reliability, suitable for sport flying, training and recreational use, equipped with high-performance DL Engine aircraft engines',
  keywords: 'DL-2L, light sport aircraft, sport aircraft, aircraft, light aircraft, sport flying, aviation',
};

export default function DL2LLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}