---
index: 7
title: Position 属性
description: 介绍一下 Position 属性
icon: css
date: 2020-04-18
category:
  - 学习笔记
tag:
  - CSS
---

## 概述

### `position` 是干嘛的？

- `position` 属性规定元素的**定位类型**。



### position属性有哪些值？

- `static`：默认值，待在文档流中
- `relative`：相对定位，升起来但不脱离文档流

- `absolute`：绝对定位，基准是祖先中最近的非static
- `fixed`：固定定位，基准是Viewport

- `sticky`：粘滞定位，当要消失时粘在可视区域边不走



### 小结

- 如果写了 `absolute` ，一般要补一个 `relative` ；
- 如果写了 `absolute` 和 `fixed` ，一定要加 `top` 和 `left` ；

- `sticky` 兼容性不太好；



## position: relative

### 使用场景

- 用于位移（少数情况）
- 用于当 `absolute` 的爸爸



### 配合 z-index

- `z-index: auto` 默认值：不创建新的层叠上下文
- `z-index: 0 / 1 / 2`

- `z-index: -1 / -2`



### 经验

- 不要写`x-index: 9999`
- 学会管理 `z-index`



## position: absolute

### 使用场景

- 脱离原来的位置，另起一层
- 鼠标提示



### 配合 z-index



### 经验

- 记得写 top 和 left；
- 善用 `left: 100%`；

- 善用 `left: 50%` + “负margin” （居中）



## position: fixed

### 使用场景

- 烦人的广告
- 回到顶部



### 配合 z-index



### 经验

- 手机上尽量不用，坑多