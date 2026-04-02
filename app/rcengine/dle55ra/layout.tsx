import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE55RA 航模发动机 - DL Engine 中型航模动力系统',
  description: 'DLE55RA 航模发动机提供55cc排量的强劲动力，适用于中型航模和无人机，具有高功率输出和稳定性能，适合进阶航模爱好者',
  keywords: 'DLE55RA, 航模发动机, 55cc发动机, 中型航模, 无人机动力',
};

export default function DLE55RALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}