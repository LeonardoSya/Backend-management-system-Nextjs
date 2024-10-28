# 后台管理系统

## 作者

地信22张毅阳
学号：220902103

## 项目介绍

这是一个基于 Next.js 构建的现代化后台管理系统，提供了用户管理、内容管理、数据统计等核心功能。
我采用 Next.js 编写的原因是，这是我最近正在学习的 React 元框架，并且它非常适合开发中前台项目
另外，UI方面我选择使用 Tailwindcss，我非常爱它便捷的响应式和自由度，并且比css更可控更安全。

我是一名目前正在 Momenta 前端研发岗实习的大三本科生，这个课设我采用了我喜爱的现代的技术栈开发。

### 主要功能

- 📊 数据仪表盘
- 👥 用户管理
- 📝 内容管理
- ⚙️ 系统设置
- 🔐 用户认证
- 🌓 深色模式支持

## 技术栈

- **框架**: Next.js 13.5
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: shadcn/ui
- **图标**: Lucide React
- **状态管理**: React Hooks
- **表单处理**: React Hook Form
- **数据可视化**: Recharts

## 快速开始

### 环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. 克隆项目
```
git clone https://github.com/yourusername/Backend-management-system-Nextjs.git
cd Backend-management-system-Nextjs
```
2. 安装依赖
```
npm install
或
yarn install
```
3. 启动开发服务器
```
npm run dev
```
4. 构建生产版本
```
npm run build
```
5. 项目结构
```
Backend-management-system-Nextjs/
├── app/                    # 应用主目录
│   ├── dashboard/         # 仪表盘模块
│   │   ├── modules/      # 功能模块
│   │   │   ├── overview/ # 概览页面
│   │   │   ├── users/    # 用户管理
│   │   │   ├── content/  # 内容管理 
│   │   │   └── settings/ # 系统设置
│   │   └── page.tsx      # 仪表盘主页
│   ├── login/            # 登录模块
│   ├── layout.tsx        # 全局布局
│   └── globals.css       # 全局样式
├── components/           # 通用组件
│   └── ui/              # UI组件库
├── lib/                 # 工具函数
├── public/              # 静态资源
└── styles/              # 样式文件
```
## 许可证

MIT License
