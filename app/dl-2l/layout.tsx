import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DL-2L轻型运动飞机 - DL Engine 高性能航空器',
  description: 'DL-2L轻型运动飞机采用先进航空技术，具有优异的飞行性能和可靠性，适合运动飞行、训练和娱乐用途，配备高性能DL Engine航空发动机',
  keywords: 'DL-2L, 轻型运动飞机, 运动飞机, 航空器, 飞行器, 轻型飞机, 运动飞行',
};

export default function DL2LLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}