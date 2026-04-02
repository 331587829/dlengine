import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE35RA RC Engine - DL Engine Small RC Power System',
  description: 'DLE35RA RC engine is designed for small RC models, providing 35cc displacement of reliable power with lightweight, high efficiency and easy maintenance features for entry-level RC enthusiasts',
  keywords: 'DLE35RA, RC engine, 35cc engine, small RC model, entry-level RC power',
};

export default function DLE35RALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}