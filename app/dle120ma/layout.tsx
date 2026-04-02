import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE120MA 发动机 - DL Engine 专业航模动力系统',
  description: 'DLE120MA 发动机为航模爱好者提供强劲动力，具有高可靠性、易维护和优异性能，适合大型航模和特技飞行应用',
  keywords: 'DLE120MA, 航模发动机, 特技飞行, 大型航模, 高性能航模动力',
};

export default function Dle120maLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}