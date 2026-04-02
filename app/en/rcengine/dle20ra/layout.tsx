import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE20RA RC Engine - DL Engine Small RC Power System',
  description: 'DLE20RA RC engine is designed for small RC models, providing 20cc displacement of reliable power with lightweight, high efficiency and easy maintenance features for entry-level RC enthusiasts',
  keywords: 'DLE20RA, RC engine, 20cc engine, small RC model, entry-level RC power',
};

export default function DLE20RALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}