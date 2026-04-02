import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE70MU 发动机 - DL Engine 高性能无人机动力系统',
  description: 'DLE70MU 发动机专为无人机设计，具有高功率重量比、低油耗和可靠性能，适用于工业无人机和农业无人机应用',
  keywords: 'DLE70MU, 无人机发动机, 工业无人机, 农业无人机, 高性能发动机',
};

export default function Dle70muLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}