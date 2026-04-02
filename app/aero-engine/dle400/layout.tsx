import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE400 航空发动机 - DL Engine 超高性能航空动力',
  description: 'DLE400 航空发动机提供400cc排量的超强动力，适用于大型运动飞机和工业无人机，具有卓越的功率输出和稳定性能',
  keywords: 'DLE400, 航空发动机, 400cc发动机, 超高性能发动机, 工业无人机动力',
};

export default function DLE400Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}