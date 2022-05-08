---
index: 6
title: Grid 布局
description: 介绍一下 Grid 布局
icon: layout
date: 2020-04-17
category:
  - 学习笔记
tag:
  - CSS
---

本文参考资料：[A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

grid是一种二维空间布局，特别适合不规则布局。

gird属性较多，这里只简要列举出一部分



## 一些基本概念

### Grid容器（Grid Container）和Grid条目（Grid Item）

```html
<div class="container">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```

### Grid内部

- **Grid线（Grid Line）**
- **Grid元件（Grid Cell）**

- **Gird轨迹（Grid Track）**
- **Grid区域（Grid Area）**

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582685926956-c0474926-71a8-440e-ab43-536b909fd48b.png)



## 语法

### 指定container

```css
.container {
  display: grid | inline-grid;
}
```



### 设置每个行的高度/每列的宽度



```css
.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}
```



效果如下：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582686151707-4cd87388-4dff-4af0-9b62-5777fc1ed225.png)



还可以使用 `fr` “份儿”：

```css
.container {
  grid-template-columns: 1fr 50px 1fr 1fr;
}
```



### 定义一片区域

```css
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582686441255-2ffbc2b7-43a0-4380-abf5-37bce29f91ba.png) 



### 调整空隙



```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  grid-column-gap: 10px;
  grid-row-gap: 15px;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582686519634-7213efa0-df24-4a32-941d-5425cdae5448.png) 



其他语法可以现用现学，参考本文开头处列出的网址。（有空我会翻译一份中文版）