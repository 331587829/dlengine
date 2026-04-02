import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE55 RC Engine - DL Engine Medium Model Aircraft Power System',
  description: 'DLE55 RC engine provides powerful 55cc displacement, suitable for medium-sized model aircraft and drones, featuring high power output and stable performance, ideal for advanced model aircraft enthusiasts',
  keywords: 'DLE55, RC engine, 55cc engine, medium model aircraft, drone power',
};

export default function DLE55Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}