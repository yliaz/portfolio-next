---
index: 1
title: CSS "层叠"之我见
description: CSS 的全称是Cascading Style Sheets，即层叠样式表，“样式表”（style sheets）几个字易于理解，意思就是包含了各种样式的一个列表，而“层叠”（cascading）二字背后却有更多的东西等待挖掘。
icon: css
date: 2020-04-12
category:
  - 学习笔记
tag:
  - CSS
---

## 层叠的几层含义

###  样式层叠

可以多次对同一个选择器进行样式声明。

```css
div {
	background: red;
}
div {
	border:1px solid green;
}
```

### 选择器层叠

可以用不同的选择器对同一个元素进行样式声明。

```html
<div id="greenBorder" class="redBorder"></div>
```

```css
#greenBorder {
	border: 1px solid green;
}
.redBorder {
	border: 1px solid red;
}
```



### 样式表层叠

- 内联样式

```html
<p style="color: red">红色字体</p>
```

- 内部样式

```html
<head>
<style type="text/css">
p {color: red}
</style>
</head>
```

- 外部样式表

```css
p {
  color: red
}
```

一般来说，内联样式 > 内部样式 > 外部样式。



## 重置默认样式

一般会使用reset.css将浏览器默认样式reset掉，下面是一段经典的reset.css。

参考自：[reset.css知多少 - Chokcoco](https://www.cnblogs.com/coco1s/p/6249038.html)

```css
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
fieldset, img {
    border: 0;
}
address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal;
}
ol, ul {
    list-style: none;
}
caption, th {
    text-align: left;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: normal;
}
q:before, q:after {
    content: '';
}
abbr, acronym {
    border: 0;
}
```

## 层叠特性使得CSS十分灵活但难以捉摸

当多个CSS样式表作用于同一元素时，可能会引发冲突。一些相关内容可以查看[如何解决CSS样式冲突](https://www.yuque.com/gangafengliu/frontend-tricks/solve-css-conflict)。

![](https://zhuye-1308301598.file.myqcloud.com/markdown/giphy.gif)