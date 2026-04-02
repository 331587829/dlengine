# 抖音开放平台API集成指南

## 概述

本文档详细说明如何在DLE网站中集成抖音开放平台API，实现通过抖音用户ID自动获取和播放视频的功能。

## 功能特性

- ✅ 通过抖音用户ID自动获取视频列表
- ✅ 支持视频封面展示和播放
- ✅ 显示视频点赞、评论、分享数据
- ✅ 响应式设计，支持移动端
- ✅ 优雅的错误处理和降级方案
- ✅ 模拟数据展示（未配置API时）

## 快速开始

### 1. 获取抖音开放平台开发者权限

1. 访问 [抖音开放平台](https://open.douyin.com)
2. 注册开发者账号并创建应用
3. 申请视频相关API权限
4. 获取以下信息：
   - **用户ID (Open ID)**: 抖音用户的唯一标识
   - **Access Token**: API调用凭证

### 2. 配置API参数

在 `app/jetboard/page.tsx` 文件中，找到抖音视频组件部分：

```jsx
{/* 使用真实抖音用户ID和Access Token（取消注释并填写真实值） */}
<DouyinVideoGallery 
  userId="您的真实抖音用户ID" 
  accessToken="您的真实抖音Access Token"
  maxVideos={6}
/>
```

取消注释并填写真实的用户ID和Access Token：

```jsx
<DouyinVideoGallery 
  userId="1234567890" 
  accessToken="your_real_access_token_here"
  maxVideos={6}
/>
```

### 3. 注释掉模拟数据版本

同时注释掉使用占位符的版本：

```jsx
{/* 使用默认占位符（显示模拟数据） */}
{/* <DouyinVideoGallery 
  userId="您的抖音用户ID" 
  accessToken="您的抖音Access Token"
  maxVideos={6}
/> */}
```

## API调用流程

### 1. 获取用户视频列表

**API端点**: `GET https://open.douyin.com/api/douyin/v1/video/list/`

**参数**:
- `open_id`: 抖音用户ID
- `cursor`: 分页游标（默认0）
- `count`: 获取视频数量

**请求头**:
```
Authorization: Bearer {accessToken}
Content-Type: application/json
```

### 2. 获取视频详细信息

**API端点**: `GET https://open.douyin.com/api/douyin/v1/video/data/`

**参数**:
- `item_ids`: 视频ID列表（逗号分隔）

### 3. 数据格式转换

组件会将API返回的数据转换为以下格式：

```typescript
interface DouyinVideo {
  id: string;           // 视频ID
  title: string;        // 视频标题
  cover_url: string;    // 封面图URL
  play_url: string;     // 播放地址
  like_count: number;   // 点赞数
  comment_count: number; // 评论数
  share_count: number;  // 分享数
  create_time: number;  // 创建时间戳
}
```

## 错误处理

### 1. API调用失败

- 网络错误或API服务不可用
- Access Token过期或无效
- 用户ID不存在或无权访问

**处理方式**: 自动降级到模拟数据展示

### 2. 数据格式错误

- API响应格式不符合预期
- 缺少必要字段

**处理方式**: 显示错误信息并提供重试按钮

### 3. 无视频内容

- 用户没有发布视频
- 视频列表为空

**处理方式**: 显示"暂无视频内容"提示

## 安全考虑

### 1. 敏感信息保护

- **不要**将Access Token硬编码在客户端代码中
- **建议**使用环境变量或后端API代理

### 2. 后端代理方案（推荐）

```javascript
// 后端API路由示例 (/api/douyin/videos)
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  
  // 从环境变量获取Access Token
  const accessToken = process.env.DOUYIN_ACCESS_TOKEN;
  
  // 调用抖音API
  const response = await fetch(`https://open.douyin.com/api/douyin/v1/video/list/?open_id=${userId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });
  
  return Response.json(await response.json());
}
```

前端组件调用：

```jsx
const fetchDouyinVideos = async () => {
  const response = await fetch(`/api/douyin/videos?userId=${userId}`);
  const data = await response.json();
  // 处理数据...
};
```

## 环境变量配置

### 1. 创建环境变量文件

创建 `.env.local` 文件：

```env
# 抖音开放平台配置
DOUYIN_USER_ID=your_douyin_user_id
DOUYIN_ACCESS_TOKEN=your_access_token
```

### 2. 在组件中使用环境变量

```jsx
<DouyinVideoGallery 
  userId={process.env.DOUYIN_USER_ID}
  accessToken={process.env.DOUYIN_ACCESS_TOKEN}
  maxVideos={6}
/>
```

## 性能优化

### 1. 图片优化

- 使用Next.js Image组件自动优化封面图
- 设置合适的图片尺寸和格式

### 2. 视频懒加载

- 视频组件支持懒加载
- 只在用户交互时加载视频资源

### 3. 缓存策略

- 实现客户端缓存减少API调用
- 设置合理的缓存过期时间

## 测试指南

### 1. 模拟数据测试

不配置API参数时，组件会自动显示模拟数据：

```jsx
<DouyinVideoGallery 
  userId="您的抖音用户ID" 
  accessToken="您的抖音Access Token"
  maxVideos={3}
/>
```

### 2. 真实API测试

配置真实参数后，检查：

- ✅ 视频列表是否正确显示
- ✅ 封面图是否正常加载
- ✅ 视频播放功能是否正常
- ✅ 统计数据是否正确显示
- ✅ 错误处理是否有效

### 3. 响应式测试

- 桌面端（>1200px）: 3列布局
- 平板端（768px-1200px）: 2列布局
- 移动端（<768px）: 1列布局

## 常见问题

### Q1: Access Token如何获取？

A: 需要在抖音开放平台创建应用并申请相应权限，具体流程参考官方文档。

### Q2: 为什么视频无法播放？

A: 检查视频播放地址是否有效，抖音API返回的视频地址可能有播放限制。

### Q3: 如何提高API调用成功率？

A: 实现后端代理方案，避免客户端直接调用抖音API。

### Q4: 视频数据更新不及时？

A: 抖音API有缓存机制，新发布的视频可能需要一定时间才能通过API获取。

## 更新日志

### v1.0.0 (2024-01-01)
- 初始版本发布
- 支持抖音API集成
- 实现模拟数据降级
- 响应式设计支持

## 技术支持

如有问题请联系技术团队或参考：
- [抖音开放平台文档](https://open.douyin.com/platform/doc)
- [Next.js文档](https://nextjs.org/docs)
- [React文档](https://react.dev)