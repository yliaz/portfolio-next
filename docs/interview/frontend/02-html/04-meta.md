---
title: meta 标签
---

# meta 标签

## 1. 页面出现了乱码，是怎么回事？如何解决？ {#meta-charset}

当我们保存一个写好的 HTML 文件，编码方式会保存为 UTF-8；

一个文件就是一堆的数据，即我们写的内容变成了一堆的数据。那这个数据到底是变成了 123，还是 456 呢？

这里我们就用到了“编码”，用的编码方式不一样，那么数据呈现的状态就不一样；

然后，当我们把这个以适当编码方式保存好的数据再次展示在浏览器页面上时（或用其他编辑器打开时），这个数据还要再恢复出来；

这时候，浏览器（或编辑器）需要使用相同的、与文件相对应的编码方式去解码（但浏览器不是万能的，你不告诉它，它就不知道用什么方式去解码，它会随意选择）；

这时，当编码是一种方式，而解码又是另一种方式时，页面就会出现“乱码”；而解决乱码的方式就是：只需要知道我在编辑器保存这个 HTML 文件时，保存的什么编码格式，然后在头部 `<meta charset="?">` 中告诉浏览器用什么方式来解码。

***

## 2. meta 有哪些常见的值？  {#common-meta}

1. 指定文档编码

```html
<meta charset="utf-8">
```

2. 适配移动端页面

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

3. 设置referer

```html
<meta name="referer" content="never">
```

4. 添加页面描述

```html
<meta name="description" content="注册即代表你同意《知乎协议》注册机构号……">
```

***

## 3. meta viewport 是做什么用的，怎么写？  {#meta-viewport}
meta viewport 是适配移动端页面的。

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

