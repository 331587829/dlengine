import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE430 航空发动机 - DL Engine 顶级航空动力系统',
  description: 'DLE430 航空发动机提供430cc排量的顶级动力，适用于高性能运动飞机和专业无人机，具有卓越的性能和可靠性',
  keywords: 'DLE430, 航空发动机, 430cc发动机, 顶级发动机, 专业无人机动力',
};

export default function DLE430Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}