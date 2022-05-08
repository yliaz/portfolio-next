---
index: 3
title: head 元素
description: head 元素
icon: html
date: 2020-04-13
category:
  - 学习笔记
tag:
  - HTML
---

:::tip 对应面试题

- [1. `<link>` 标签定义的作用？](/docs/interview/frontend/html/element#link-element)
- [2. 页面导入样式时，使用 `link` 和 `@import` 有什么区别？](/docs/interview/frontend/html/element#link-vs-import)

:::

## 网站标题

```html
<head>
  <title>我是网站标题</title>
</head>
```

## 元数据 `meta` 元素

详见：[常用 meta 标签](./meta)

## 自定义图标

```html
<head>
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
</head>
```

## 引入 CSS 和 JS 文件

```html
<head>
  <!-- 直接写 CSS -->
  <style type="text/css">
    body {background-color:yellow}
    p {color:blue}
  </style>
  
  <!-- 引入 CSS 外部样式表 -->
  <link rel="stylesheet" href="style.css">
  
  <!-- 直接写 JS -->
  <script type="text/javascript">
    let i = 0
  </script>
  
  <!-- 引入 JS 文件 -->
  <script src="main.js"></script>
</head>
```