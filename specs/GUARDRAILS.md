# 边界守卫规则 (Guardrails)

## 当前阶段: 初始化阶段 (Initialization)

## 技术边界
- **前端框架**: 严格使用 Next.js App Router，不允许使用 Pages Router
- **样式**: 仅使用 Tailwind CSS，不允许引入其他 CSS 框架
- **类型安全**: 强制使用 TypeScript，禁止使用 any 类型
- **数据获取**: 使用 graphql-request，不允许使用其他 GraphQL 客户端

## 架构边界
- **多语言**: 必须支持中英文双语，语言切换功能
- **文件结构**: 遵循 Next.js App Router 最佳实践
- **组件设计**: 使用函数式组件 + TypeScript
- **状态管理**: 优先使用 React Hooks，避免复杂状态管理库

## 开发边界
- **代码规范**: 使用 ESLint + Prettier
- **提交规范**: 使用 Conventional Commits
- **测试要求**: 关键组件需要单元测试
- **性能要求**: 必须考虑 SEO 和加载性能

## 安全边界
- **环境变量**: 敏感信息必须使用环境变量
- **API 安全**: GraphQL 查询需要参数验证
- **内容安全**: 防止 XSS 攻击，对用户输入进行转义

## 部署边界
- **构建优化**: 必须启用 Next.js 优化功能
- **缓存策略**: 合理配置静态资源缓存
- **CDN**: 建议使用 CDN 加速静态资源