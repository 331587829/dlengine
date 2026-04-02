/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  // 禁用缓存，解决宝塔部署旧数据问题
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },
  // 禁用ETag缓存
  generateEtags: false,
  // 强制重新验证静态文件
  poweredByHeader: false,
  // 图片配置
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dlengine.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dlengine.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;