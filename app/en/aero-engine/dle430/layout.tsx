import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE430 Aircraft Engine - DL Engine Premium Aviation Power System',
  description: 'DLE430 aircraft engine provides 430cc displacement of premium power, suitable for high-performance sport aircraft and professional drones with exceptional performance and reliability',
  keywords: 'DLE430, aircraft engine, 430cc engine, premium engine, professional drone power',
};

export default function DLE430Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}