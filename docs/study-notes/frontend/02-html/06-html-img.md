---
index: 6
title: img 标签
description: img 标签
icon: html
date: 2020-04-16
category:
  - 学习笔记
tag:
  - HTML
---

:::tip 对应面试题

- [1. `<img>` 的 `title` 和 `alt` 有什么区别？](/docs/interview/frontend/html/element#differ-between-title-alt-in-img)
- [2.  `title` 属性和 `alt` 属性分别有什么作用？](/docs/interview/frontend/html/attribute#title-and-alt)

:::

## 基本用法

`src`：图片资源路径

`alt`：浏览器无法正常显示图片时的替换文本

`width`：指定宽度

`height`：高度

`title`：鼠标悬停提示

```html
<img 
  src="images/dinosaur.jpg"
  alt="一只恐龙"
  width="400"
  height="340"
>
```

## 图片解说

```html
<figure>
  <img src="images/dinosaur.jpg" >
  <figcaption>这是一只恐龙</figcaption>
</figure>
```

## 使用 CSS 背景图片

```css
div {
  background-image: url("images/dinosaur.jpg");
}
```

:::info 提示

`<img>` **标签**和 **CSS 背景图片**的选择：

- 如果是有意义的内容，尽量使用语义化的 html 标签
- 如果仅仅是装饰，可以使用 CSS 背景图片

:::

## 图片自适应

> 这里是在 html 中控制加载的方法，优化图片加载效率时可用。

- 根据设备宽度加载不同尺寸的图片

```html
<img 
  srcset="elva-fairy-320w.jpg 320w,
          elva-fairy-480w.jpg 480w,
          elva-fairy-800w.jpg 800w"
  sizes="(max-width: 320px) 280px,
         (max-width: 480px) 440px,
         800px"
  src="elva-fairy-800w.jpg" 
  alt="Elva dressed as a fairy"
>
```

- 根据分辨率加载不同尺寸的图片

```html
<img 
  srcset="elva-fairy-320w.jpg,
          elva-fairy-480w.jpg 1.5x,
          elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg" 
  alt="Elva dressed as a fairy"
>
```

