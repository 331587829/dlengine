import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE20 航模发动机 - DL Engine 小型航模动力系统',
  description: 'DLE20 航模发动机专为小型航模设计，提供20cc排量的可靠动力，具有轻量化、高效率和易维护特点，适合入门级航模爱好者',
  keywords: 'DLE20, 航模发动机, 20cc发动机, 小型航模, 入门级航模动力',
};

export default function DLE20Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}