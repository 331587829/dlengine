import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '经销商网络 - DL Engine 全球合作伙伴',
  description: 'DL Engine 全球经销商网络覆盖澳大利亚、阿根廷、比利时等国家，提供 DLE发动机、DLE动力冲浪板、DLE植保机等产品的销售和服务支持',
  keywords: '经销商网络, DLE经销商, 发动机经销商, 动力冲浪板经销商, 植保机经销商, 全球合作伙伴, DL Engine',
};

export default function DistributorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}