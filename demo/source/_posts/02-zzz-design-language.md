---
title: 解构绝区零的设计语言
date: 2024-02-18 20:30:00
tags: [设计, UI, ZZZ]
headimg: https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80
---

《绝区零》的 UI 设计是近年来游戏界面设计中少见的佳作。今天拆解一下它的核心视觉语言，以及 HollowLight 是如何将其迁移到博客场景的。

<!-- more -->

## 核心视觉元素

### 切角（Corner Cut）

这是最具辨识度的特征。标准圆角矩形被改造成「右下角缺一块」的形状：

```css
.card {
  border-radius: 20px 20px 0 20px;  /* 右下角 = 0 */
}

/* 用伪元素填充缺角，颜色与背景一致 */
.card::after {
  content: '';
  position: absolute;
  bottom: 0; right: 0;
  border: 20px solid transparent;
  border-bottom-color: var(--hl-black);
  border-right-color: var(--hl-black);
}
```

### 荧光黄（#fbfe00）

这个黄色接近纯黄但偏绿，在纯黑背景上对比度极高，同时比纯黄（#ffff00）更有质感。

它在界面中扮演：
1. **强调色** — 标题、标签、激活态
2. **交互反馈** — hover 时边框变黄、发光
3. **进度/能量** — 技能条、加载动画

### 斜切 Tab

导航选中态不是简单的下划线，而是一个向右倾斜的平行四边形：

```css
.tab.choiced::before {
  content: '';
  transform: skew(-27deg) scaleY(1.5);
  background: var(--hl-accent);
}
```

## 移植到博客的取舍

游戏 UI 有一个奢侈条件：**用户只会看，不会输入**。博客需要良好的可读性，所以做了以下调整：

- 正文字号从 14px 提升到 16px
- 行高从 1.4 提升到 1.85
- 代码块不使用游戏字体，改用等宽字体
- 移动端去掉切角（太小看不出来，反而浪费空间）

赛博朋克美学 × 实用主义 = HollowLight 的设计哲学。
