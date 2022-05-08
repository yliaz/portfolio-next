---
index: 4
title: 常用 meta 标签
description: 常用 meta 标签
icon: html
date: 2020-04-14
category:
  - 学习笔记
tag:
  - HTML
---

:::tip 对应面试题

- [1. 页面出现了乱码，是怎么回事？如何解决？](/docs/interview/frontend/html/meta#meta-charset)
- [2. meta 有哪些常见的值？](/docs/interview/frontend/html/meta#common-meta)
- [3. meta viewport 是做什么用的，怎么写？](/docs/interview/frontend/html/meta#meta-viewport)

:::

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1586577205260-b67592fd-8593-4c48-ae24-81d5f442c7b5.png)

`<meta>` 元素用于描述元数据，一般都在 `<head>` 元素内。

## 1. charset

> The charset attribute specifies the character encoding used by the document. (*whatwg.org*)

告知浏览器当前页面使用的是哪种**编码方式**，以便浏览器使用恰当的方式进行**解码**。

```html
<!-- 页面使用的是UTF-8编码，浏览器也应按此编码进行解码 -->
<meta charset="utf-8">
<!-- 使用UTF-8 意味着可以选择任何语言-->
```

## 2. name="xxx" content="xxx"

```html
<!-- 下面这样一类meta标签的形式是统一的 -->
<meta name="xxx" content="xxx">
```

### 2.1 适配移动端

#### 恰当设置viewport（name="viewport"）

- width：宽度
- height：高度

- initial-scale：初始比例
- minimium-scale：最小比例  

- maximium-scale：最大比例
- user-scalable：用户缩放

```html
<!-- 下面的代码是淘宝网移动端的viewport -->
<meta name="viewport" content="width=device-width,
                               initial-scale=1,
                               minimum-scale=1,
                               maximum-scale=1,
                               user-scalable=no,
                               viewport-fit=cover">
```

`width=device-width`：宽度 = 设备宽度

`initial-scale=1.0`：初始比例 = 1

`minimum-scale=1.0`：最小比例 = 1

`maximum-scale=1.0`：最大比例 = 1

`user-scalable=no`：用户缩放 = 不允许

`viewport-fit=cover`：网页内容完全覆盖窗口，详见：[网页适配 iPhone X，就是这么简单](https://aotu.io/notes/2017/11/27/iphonex/index.html#viewport-fit)

>  更多资料可以参考：
>
> - [聊聊Viewport那些事](https://juejin.im/post/5a910349f265da4e9449cffd)
> - [viewport的深入理解](https://www.cnblogs.com/2050/p/3877280.html)

### 2.2 搜索引擎优化

#### 2.2.1 关键字（name="keywords"）

告知搜索引擎网页关键字，便于爬取

```html
<meta name="keywords" content="关键字1, 关键字2">
```

#### 2.2.2 内容描述（name="description"）

告知搜索引擎网页描述。

```html
<meta name="description" content="这里写一些关于网站的一些描述">
```

### 2.3 其他网页信息

#### 2.3.1 作者（name="author"）

标注网页作者

```html
<meta name="author" content="尴尬风流">
```

#### 2.3.2 制作网页所用软件（name="generator"）

标明制作网页所用的软件

```html
<meta name="generator" content="Visual Studio Code1.43.2">
```

#### 2.3.3 内核选择（name="renderer"）

指定双内核浏览器（例如360浏览器等）使用哪个内核渲染页面

```html
<meta name="renderer" content="webkit | ie-comp">
```

## 3. http-equiv

### 3.1 指定浏览器渲染方式

使用**X-UA-Compatible**指定用哪个版本进行渲染

```html
<!-- 使用IE和Chrome的最新版本进行渲染 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<!-- 模拟IE7渲染模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=7">
```

此处存疑，与浏览器适配相关，后续回来补充。

### 3.2 自动刷新并指向某页面

使用refresh，网页将在设定的时间内，自动刷新并跳转到设定的网址

```html
<!-- 每隔5秒刷新一次页面 -->
<meta http-equiv="refresh" content="5">

<!-- 2秒后跳转到首页 -->
<meta http-equiv="refresh" content="2; url='/'">

<!-- 1秒后跳转到google.com -->
<meta http-equiv="refresh" content="2; url='google.com'">
```

参考资料：[小tip: 使用meta实现页面的定时刷新或跳转 - 张鑫旭](https://www.zhangxinxu.com/wordpress/2015/03/meta-http-equiv-refresh-content/)