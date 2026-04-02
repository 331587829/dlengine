import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE120MA Engine - DL Engine Professional Model Aircraft Power System',
  description: 'DLE120MA engine provides powerful propulsion for model aircraft enthusiasts, featuring high reliability, easy maintenance and excellent performance, suitable for large model aircraft and aerobatic applications',
  keywords: 'DLE120MA, model aircraft engine, aerobatic flight, large model aircraft, high-performance model power',
};

export default function Dle120maLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}