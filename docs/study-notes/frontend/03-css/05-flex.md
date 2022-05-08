---
index: 5
title: Flex 布局
description: 介绍一下 Flex 布局
icon: layout
date: 2020-04-16
category:
  - 学习笔记
tag:
  - CSS
---

本文主要借鉴了CSS Tricks：[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 容器和条目

容器（container）就是外部的容器，条目（items）就是内部的条目。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582634275939-e26ac02c-bfc2-4b22-a138-025ccd78d5f0.png) 
![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582634334683-a90d0d4b-1033-45db-8731-01d103767a67.png) 

## container有哪些属性

### 定义一个flex容器

```css
.container {
  display: flex; /* or inline-flex */
}
```





### 改变items的流动方向

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582635047207-24f3945d-9e77-47cf-950b-b4deb1a8c5cc.png)



- `flex-direction: row`：行顺序
- `flex-direction: row-reverse`：行逆序

- `flex-direction: column`：列顺序
- `flex-direction: column-reverse`：列逆序





### 改变折行方式

```css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582635781959-131ab1b1-479f-41e2-9856-d86b7e3bba2c.png)



- `flex-wrap: nowrap`：不换行，使劲挤
- `flex-wrap: wrap`：能换行，就换行

- `flex-wrap: wrap-reverse`：向上换行？！





### 主轴对齐方式

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}
```



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582636158363-7a30ec72-cec3-400a-8ddb-6bcc7f312ff3.png) 



- `justify-content: flex-start`：都放在左侧
- `justify-content: flex-end`：都放在右侧

- `justify-content: center`：水平居中，尽可能靠近
- `justify-content: space-between`：尽可能远离

- `justify-content: space-around`：左右间距相等，margin不合并
- `justify-content: space-evenly`：左右间距相等，margin合并





### 次轴对齐

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}
```



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582636557798-e9bcc9b6-36db-4348-8b2f-1c4d3f3ef8c7.png) 



- `align-items: flex-start`：向上靠拢
- `align-items: flex-end`：向下靠拢

- `align-items: center`：垂直居中
- `align-items: stretch`：伸展以铺平

- `align-items: baseline`：按baseline对齐



### 多行内容

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}
```



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582636867410-6b226b9d-3bd8-45cf-bf6d-991e255aafc9.png) 



- `align-content: flex-start`：挤在上面
- `align-content: flex-end`：挤在下面

- `align-content: center`：挤在中间
- `align-content: stretch`：上下伸展以铺平上下空间

- `align-content: space-between`：尽可能远离
- `align-content: space-around`：行间距相等





## item的属性

### 条目顺序

- 使用order调整条目顺序

```css
.item {
  order: <integer>; /* default is 0 */
}
```



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582637209921-c3b921bf-3c38-4373-b65e-6a21a2068156.png) 



### 长胖

- 使用 `flew-grow` 控制按比例长胖

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582637491938-e0adc0d0-feed-48d1-93d7-878b749d4caa.png) 



### 变瘦

- 一般写 flex-shrink: 0 防止变瘦

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```



flex-shrink变瘦的计算公式：

假设有三个元素，他们的宽度分别为100px，150px，200px。设置他们仨的flex-shrink的值分别为3、2、1，当页面变窄时，第一个元素变窄宽度的计算公式为`(100*3)/(100*3+150*2+200*1) * 100`。



### 基准宽度

- 默认是 flex-basis: auto

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```



### 私人订制

- 使用 align-self

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582637613406-7e8fa36f-68ed-475f-8036-7a3b6fa4c7a7.png) 



## Bugs

参考资料：[flexbugs](https://github.com/philipwalton/flexbugs)