import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE30 RC Engine - DL Engine Small RC Power System',
  description: 'DLE30 RC engine is designed for small RC models, providing 30cc displacement of reliable power with lightweight, high efficiency and easy maintenance features for entry-level RC enthusiasts',
  keywords: 'DLE30, RC engine, 30cc engine, small RC model, entry-level RC power',
};

export default function DLE30Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}