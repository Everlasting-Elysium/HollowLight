# HollowLight

> 致敬《绝区零》绳网论坛 UI 的 Hexo 博客主题，赛博朋克风格

[![GitHub Stars](https://img.shields.io/github/stars/Everlasting-Elysium/HollowLight?style=flat-square&logo=github)](https://github.com/Everlasting-Elysium/HollowLight/stargazers)
[![License](https://img.shields.io/github/license/Everlasting-Elysium/HollowLight?style=flat-square)](https://github.com/Everlasting-Elysium/HollowLight/blob/main/LICENSE)

---

## 预览

🔗 **[在线展示](https://everlasting-elysium.github.io/HollowLight/)**

![预览](./demo/preview.png)

---

## ✨ 特性

- **绳网风格**：致敬《绝区零》游戏内绳网论坛 UI，纯黑背景配荧光黄高亮，赛博朋克美学
- **全屏幕布（Curtain）**：首页支持图片 / 视频 / GIF 背景，内置打字机动效
- **瀑布流文章列表**：卡片式布局，视觉层次清晰
- **相册页**：多相册切换、瀑布流展示、Lightbox 灯箱预览，支持 hash 路由直达（`/album/#id`）
- **相册自动缩略图**：GitHub Actions + sharp 自动生成 `.thumb.webp`，本地图片无需手动处理
- **友链页**：内部链接当前标签页打开，外部链接自动新标签
- **归档页 / 标签页 / 标签云**
- **本地搜索**：基于 `hexo-generator-searchdb`
- **信用分进度条**：Header 装饰，可自定义分值
- **代码高亮**：one-dark 主题
- **响应式设计**：适配桌面 / 平板 / 移动端

---

## 🚀 快速开始

### 安装主题

**方式一：直接 clone**

```bash
git clone https://github.com/Everlasting-Elysium/HollowLight.git themes/HollowLight
```

**方式二：推荐 git submodule（便于后续更新）**

```bash
git submodule add https://github.com/Everlasting-Elysium/HollowLight.git themes/HollowLight
```

### 启用主题

修改博客根目录 `_config.yml`，将 `theme` 改为：

```yaml
theme: HollowLight
```

### 配置主题

将 `themes/HollowLight/_config.yml` 复制到博客根目录（Hexo 会自动合并），或直接编辑主题目录内的配置文件。

### 本地预览

```bash
hexo clean && hexo g && hexo s
```

### 启用本地搜索（可选）

在博客根目录安装依赖：

```bash
npm install hexo-generator-searchdb --save
```

然后在博客 `_config.yml` 中添加：

```yaml
search:
  path: search.xml
  field: post
  content: true
```

---

## ⚙️ 配置说明

主题 `_config.yml` 完整内容及说明：

```yaml
# ===================================
# HollowLight — Hexo Theme Config
# ===================================

# 博主信息
author:
  name: "传奇绳匠"
  avatar: /img/avatar.svg
  bio: "这里是我的博客"
  level: 1
  credit_score: 900          # 信用分 (0-1200)，显示在 Header 进度条

# 导航菜单（key: 显示名称，value: 路径）
menu:
  推送: /
  归档: /archives/
  标签: /tags/
  相册: /album/
  伙伴: /friends/
  关于: /about/

# 社交链接（留空则不显示）
social:
  github: ""
  twitter: ""
  weibo: ""
  email: ""

# 背景图（支持 URL 或 /img/ 路径）
background: /img/bg.png

# 相册配置
album:
  data: source/_data/album.yml    # 相册数据文件路径
  columns: 4                       # 网格列数（桌面端）

# 友链数据文件
friends_data: source/_data/friends.yml

# 代码高亮
highlight:
  theme: one-dark

# 评论（预留，暂不实现）
comment:
  enable: false
  type: ""                         # waline / giscus / twikoo

# 页脚
footer:
  since: 2024
  icp: ""                          # 备案号，留空不显示

# 首页幕布
curtain:
  enable: true
  background:
    type: image        # image / video / gif
    url: https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80
  typewriter:
    - "这里是我的博客"
    - "记录代码与生活"
    - "探索未知的边界"

# 本地搜索（需要在博客 _config.yml 安装 hexo-generator-searchdb）
search:
  enable: true
```

---

## 📁 数据文件格式

### 相册（`source/_data/album.yml`）

```yaml
- id: my_album
  name: "我的相册"
  cover: https://example.com/cover.jpg
  photos:
    - url: /img/gallery/photo1.jpg
      caption: "照片标题"
    - url: https://example.com/photo2.jpg
      caption: "另一张"
```

`id` 字段用于 hash 路由，访问 `/album/#my_album` 可直接定位到该相册。

### 友链（`source/_data/friends.yml`）

```yaml
- name: "朋友的博客"
  url: https://example.com
  avatar: https://example.com/avatar.jpg
  desc: "一句话介绍"
```

---

## 🤝 贡献 & License

欢迎提 Issue 和 Pull Request。

本项目基于 [MIT License](./LICENSE) 开源。
