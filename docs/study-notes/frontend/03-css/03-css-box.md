---
index: 1
title: CSS 盒模型
description: 本文介绍 CSS 盒模型相关知识
icon: css
date: 2020-04-14
category:
  - 学习笔记
tag:
  - CSS
---

##  什么是盒模型？

**盒模型**又称框模型（Box Model），包含以下几个要素：

- **content**（元素内容）
- **padding**（内边距）

- **border**（边框）
- **margin**（外边距）



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582105585020-d4cfcabe-697a-4171-a9af-e1b1822bc944.png)

## 两种盒模型

### content-box（内容盒）

- **content-box**又称**W3C标准盒，内容边界就是盒子边界**
- **content-box**的宽度 **width = 内容宽度**



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582105914115-aa4d5f14-c4ab-4835-b68e-dd84f06a52a1.png)



### border-box（边框盒）

- **border-box**又称**怪异盒**或**IE盒，边框边界才是盒子边界**
- **border-box**的宽度 **width = 内容宽度 + padding + border**



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582105882873-6d08dcb9-2596-401f-8821-cffd41f8d5c9.png)



注意区分几个概念：

- 内容大小（content的大小）、盒子大小（height * width）
- 盒子大小（不包含margin）、盒子所占位置的大小（包含margin）



## CSS如何设置这两种模型？

- 设置为content-box



```css
.content-box {
	box-sizing: content-box;
}
```



- 设置为border-box



```css
.border-box {
  box-sizing: border-box;
}
```


**参考文章**

[CSS盒模型完整介绍 - Kain](https://segmentfault.com/a/1190000013069516)

[面试官：谈谈你对CSS盒模型的认识？ - 前端小智](https://segmentfault.com/a/1190000015235886)