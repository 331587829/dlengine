import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE30 航模发动机 - DL Engine 小型航模动力系统',
  description: 'DLE30 航模发动机专为小型航模设计，提供30cc排量的可靠动力，具有轻量化、高效率和易维护特点，适合入门级航模爱好者',
  keywords: 'DLE30, 航模发动机, 30cc发动机, 小型航模, 入门级航模动力',
};

export default function DLE30Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}