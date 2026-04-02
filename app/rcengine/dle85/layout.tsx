import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE85 航模发动机 - DL Engine 大型航模动力系统',
  description: 'DLE85 航模发动机提供85cc排量的强劲动力，适用于大型航模和无人机，具有高功率输出和稳定性能，适合专业航模爱好者',
  keywords: 'DLE85, 航模发动机, 85cc发动机, 大型航模, 无人机动力',
};

export default function DLE85Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}