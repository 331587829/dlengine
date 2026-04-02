# DLE官网网站

基于Next.js 16.2.1构建的DLE官网网站，采用App Router架构，支持中英文国际化。

## 技术栈

- **框架**: Next.js 16.2.1
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **国际化**: i18n
- **部署**: 宝塔面板 + Nginx

## 功能特性

- ✅ 中英文双语支持
- ✅ 响应式设计
- ✅ 产品展示页面
- ✅ 视频播放功能
- ✅ 部署脚本

## 项目结构

```
├── app/                 # App Router页面
├── components/          # 可复用组件
├── lib/                # 工具库
├── public/             # 静态资源
└── specs/              # 项目规范
```

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 部署

使用提供的`deploy.sh`脚本进行一键部署：

```bash
chmod +x deploy.sh
./deploy.sh
```

## 许可证

本项目采用GPL-3.0许可证。