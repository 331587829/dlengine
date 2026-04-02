import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLE130G 航空发动机 - DL Engine 高性能航空动力',
  description: 'DLE130G 航空发动机专为轻型运动飞机设计，提供130cc排量的强劲动力，具有高可靠性、低油耗和优异性能，适合各种飞行应用',
  keywords: 'DLE130G, 航空发动机, 130cc发动机, 轻型飞机发动机, 运动飞机动力',
};

export default function DLE130GLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}