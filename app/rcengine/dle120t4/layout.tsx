import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE120T4 航模发动机 - DL Engine 四缸航模动力系统',
  description: 'DLE120T4 航模发动机采用四缸设计，提供120cc排量的强劲动力，适用于大型航模和无人机，具有平稳运行和高效性能',
  keywords: 'DLE120T4, 航模发动机, 四缸发动机, 120cc发动机, 大型航模动力',
};

export default function DLE120T4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}