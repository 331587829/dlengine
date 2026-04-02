import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DL Engine Distributors - Global Network | DLEngine.com',
  description: 'Find authorized DL Engine distributors worldwide. Connect with local dealers for DLE engines, power surfboards, and agricultural drones. Global support network.',
  keywords: 'DL Engine distributors, DLE dealers, engine dealers, power surfboard dealers, agricultural drone dealers, global network',
  openGraph: {
    title: 'DL Engine Distributors - Global Network',
    description: 'Find authorized DL Engine distributors worldwide for engines, power surfboards, and agricultural drones.',
    type: 'website',
    url: 'https://www.dlengine.com/en/distributors',
  },
};

export default function DistributorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}