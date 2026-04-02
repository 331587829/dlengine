import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE130 航模发动机 - DL Engine 高性能航模动力系统',
  description: 'DLE130 航模发动机提供130cc排量的强劲动力，适用于大型航模和无人机，具有高功率输出和稳定性能，适合专业航模爱好者',
  keywords: 'DLE130, 航模发动机, 130cc发动机, 大型航模, 无人机动力',
};

export default function DLE130Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}