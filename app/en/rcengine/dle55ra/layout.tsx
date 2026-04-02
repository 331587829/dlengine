import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE55RA RC Engine - DL Engine Medium RC Power System',
  description: 'DLE55RA RC engine provides 55cc displacement of powerful performance, suitable for medium RC models and drones with high power output and stable performance for intermediate RC enthusiasts',
  keywords: 'DLE55RA, RC engine, 55cc engine, medium RC model, drone power',
};

export default function DLE55RALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}