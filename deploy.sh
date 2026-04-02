#!/bin/bash

# DL Engine 宝塔部署脚本
# 解决Next.js构建缓存和Nginx代理缓存问题

echo "🚀 开始部署 DL Engine 网站..."

# 0. 清空Nginx代理缓存（宝塔面板）
echo "🧹 清空Nginx代理缓存..."
if [ -d "/www/server/nginx/proxy_cache_dir" ]; then
    rm -rf /www/server/nginx/proxy_cache_dir/*
    nginx -s reload
    echo "✅ Nginx缓存已清空并重载配置！"
else
    echo "⚠️  Nginx缓存目录不存在，跳过缓存清理"
fi

# 1. 清理Next.js构建缓存
echo "🧹 清理Next.js构建缓存..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .turbo

# 2. 清理旧的构建文件
echo "🗑️ 清理旧构建文件..."
find . -name "*.next" -type d -exec rm -rf {} + 2>/dev/null || true

# 3. 重新安装依赖
echo "📦 安装依赖包..."
npm install --force

# 4. 构建项目
echo "🔨 开始构建项目..."
npm run build

# 5. 检查构建结果
if [ -d ".next" ]; then
    echo "✅ 构建成功！"
    echo "📊 构建信息："
    echo "   - 构建时间: $(date)"
    echo "   - 构建目录: .next/"
    echo "   - 静态页面: $(find .next/server/pages -name '*.html' | wc -l) 个"
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi

# 6. 再次清空Nginx缓存，确保最新内容生效
echo "🧹 最终清空Nginx缓存..."
if [ -d "/www/server/nginx/proxy_cache_dir" ]; then
    rm -rf /www/server/nginx/proxy_cache_dir/*
    nginx -s reload
    echo "✅ Nginx缓存最终清理完成！"
fi

echo "🎉 部署完成！网站已更新到最新版本，Nginx缓存已清空"