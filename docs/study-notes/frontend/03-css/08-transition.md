---
index: 8
title: Transition 变换
description: 介绍一下 Transition 变换相关知识
icon: css
date: 2020-04-19
category:
  - 学习笔记
tag:
  - CSS
---

## 使用transform进行图形变换

### 概述

transform可以实现以下几种变换：

- 位移（translate）
- 缩放（scale）

- 旋转（rotate）
- 倾斜（skew）



### 位移（translate）

```css
.element {
  /* 分开写 */
  transform: translateX(20px);
	transform: translateY(10px);
  /* 合起来写 */
  transform: translate(20px, 10px);
}
```



### 缩放（scale）

```css
.element {
  /* 分开写 */
  transform: scaleX(2);
	transform: scaleY(.5);
  /* 合起来写 */
  transform: scale(2, .5);
}
```



### 旋转（rotate）

```css
.element {
  transform: rotate(25deg);
}
.rotateXItem{
  transform: rotateX(50deg);
}
.rotateYItem{
  transform: rotateY(70deg);
}
.rotateZItem{
  transform: rotateZ(100deg);
}
```

- 效果图：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582689874994-58766277-b3ad-45f1-a36d-fbacffff4acd.png)![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582689923117-04b3840c-6804-44fd-b09a-271ac729a765.png)



一般用于360度旋转制作loading



### 倾斜（skew）

```css
.element {
  transform: skewX(20deg);
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582690095248-bb6c9452-e225-436c-9a4d-7067799160c9.png)



inline 元素不支持 transform，需要先变成 block



## 使用transition进行动画过渡

### 作用

- 补充中间帧



### 语法

```css
.example {
  /* 属性过渡 */
  transition: [属性名] [时长] [过渡方式] [延迟];
  /* 同时进行两个属性过渡 */
  transition: [属性名1] [时长1] [过渡方式1] [延迟1], [属性名2] [时长2] [过渡方式2] [延迟2];
}
```



### 过渡方式

- linear
- ease / ease-in / ease-out / ease-in-out

- cubic-bezier
- step-start / step-end / steps

[过渡方式函数表示](https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function)



### 并不是所有属性都能过渡

- display: none --> display: block 不能过渡
- visibility: hidden --> visibility: visible 可以过渡

- background（?）
- opacity（?）



## 使用animation进行动画过渡

### 语法

```css
/* keyframes语法1：使用from和to */
@keyframes animation-name-1{
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateY(100%);
  }
}

/* keyframes语法2：使用百分数 */
@keyframes animation-name-2{
  0% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateY(100px);
  }
}

/* animation语法 */
.someElement {
	/* 不相关代码 */
  animation: [动画名] [时长] [过渡方式] [延迟] [次数] [方向] [填充模式] [是否暂停]; 
  /* 不相关代码 */
}

/* 举个例子 */
.someElement {
	/* 不相关代码 */
  animation: animation-name-1 5s infinite; 
  /* 不相关代码 */
}
```



### animation属性值

- 时长：1s / 1000ms
- 过渡方式：linear等（与transition取值相同）

- 次数：3 / infinite
- 方向：reverse / alternate / alternate-reverse

- 填充模式：none / forwards / backwards / both
- 是否暂停：paused / running