import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE222 航模发动机 - DL Engine 超大功率航模动力系统',
  description: 'DLE222 航模发动机提供222cc排量的超大功率动力，适用于超大型航模和工业无人机，具有卓越的性能和可靠性',
  keywords: 'DLE222, 航模发动机, 222cc发动机, 超大功率, 工业无人机动力',
};

export default function DLE222Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}