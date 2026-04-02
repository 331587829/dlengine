import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE20 RC Engine - DL Engine Small Model Aircraft Power System',
  description: 'DLE20 RC engine is designed for small model aircraft, providing reliable 20cc displacement power with lightweight, high efficiency and easy maintenance features, suitable for entry-level model aircraft enthusiasts',
  keywords: 'DLE20, RC engine, 20cc engine, small model aircraft, entry-level model power',
};

export default function DLE20Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}