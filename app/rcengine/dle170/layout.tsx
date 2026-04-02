import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE170 航模发动机 - DL Engine 大功率航模动力系统',
  description: 'DLE170 航模发动机提供170cc排量的强劲动力，适用于超大型航模和工业无人机，具有卓越的功率输出和可靠性能',
  keywords: 'DLE170, 航模发动机, 170cc发动机, 超大型航模, 工业无人机动力',
};

export default function DLE170Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}