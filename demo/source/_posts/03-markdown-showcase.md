---
title: Markdown 样式展示
date: 2024-01-28 15:00:00
tags: [Markdown, 测试, 排版]
headimg: https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80
views: 1337
---

这篇文章展示 HollowLight 主题对各类 Markdown 元素的渲染效果。

<!-- more -->

## 标题层级

# H1 一级标题
## H2 二级标题
### H3 三级标题
#### H4 四级标题
##### H5 五级标题
###### H6 六级标题

---

## 文字样式

普通段落文字。Lorem ipsum dolor sit amet，这里是一段普通的段落文字，用于展示正文字体、行高和颜色效果。

**加粗文字** 和 *斜体文字* 以及 ~~删除线~~ 也能正常渲染。

行内代码：`const answer = 42` 使用等宽字体和高亮背景。

[这是一个链接](https://github.com)，悬停时显示黄色下划线。

---

## 代码块

```javascript
// HollowLight 主题核心逻辑
function openWindow(url) {
  const win = document.getElementById('hl-window');
  const frame = document.getElementById('hl-window-frame');
  if (!win || !frame) return;

  const sep = url.includes('?') ? '&' : '?';
  frame.src = url + sep + 'window=true';
  history.pushState({ hollowWindow: true }, '', url);
  win.style.display = 'flex';
}
```

```css
/* ZZZ 切角卡片 */
.card {
  border-radius: 20px 20px 0 20px;
  background: var(--hl-card);
  transition: border-color 0.25s;
}

.card:hover {
  border-color: var(--hl-accent);  /* #fbfe00 */
  box-shadow: 0 0 20px rgba(251, 254, 0, 0.08);
}
```

---

## 引用块

> 「在空洞中，情报就是生命。绳网的每条信息都可能是某人存活的关键。」
>
> — 绳网管理员

嵌套引用：

> 第一层引用
>
> > 第二层引用，用于更深层的注释或来源说明

---

## 列表

无序列表：

- 瀑布流首页卡片
- iframe 弹窗阅读
- 相册 lightbox
- 归档时间轴
  - 按年份分组
  - 荧光黄大字年份
- 标签云

有序列表：

1. 克隆主题到 `themes/` 目录
2. 修改站点 `_config.yml` 设置 `theme: HollowLight`
3. 编辑主题 `_config.yml` 填写作者信息
4. 运行 `hexo server` 预览

---

## 表格

| 特性 | 描述 | 状态 |
|------|------|:----:|
| 瀑布流布局 | 纯 JS 实现，无依赖 | ✅ |
| 弹窗阅读 | iframe + pushState | ✅ |
| 相册 lightbox | 键盘导航支持 | ✅ |
| 深色代码高亮 | Hexo 内置 hljs | ✅ |
| 响应式布局 | 移动端适配 | ✅ |

---

## 图片

![示例图片](https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80)

图片会自动限制最大宽度并添加圆角。

---

## 分割线

上面已经出现了几条 `---` 分割线。它们渲染为从透明到透明的渐变细线，保持视觉的轻盈感。
