import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE120T4 RC Engine - DL Engine 4-Cylinder RC Power System',
  description: 'DLE120T4 RC engine features 4-cylinder design, providing 120cc displacement of powerful performance with smooth operation and high efficiency for large RC models and drones',
  keywords: 'DLE120T4, RC engine, 4-cylinder engine, 120cc engine, large RC model power',
};

export default function DLE120T4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}