---
index: -20201029
title: 从输入 URL 到页面展示
description: 这篇Blog阐述的我对于那道著名的“从输入URL到页面展示究竟发生了什么”经典前端面试题的理解，也就是浏览器导航的过程。
icon: network
date: 2020-10-29
category:
  - 技术博客
tag:
  - 浏览器
---


这里以Chrome浏览器为例。在理解浏览器的导航过程之前，首先要了解👉[Chrome浏览器的多进程架构](/docs/frontend/network/about-chrome)👈，下面简单回顾一下👇

Chrome浏览器作为一个多进程架构的浏览器，包含了**浏览器进程**、**网络进程**、**渲染进程**、**GPU进程**和**插件进程**等多个进程。

## 浏览器导航过程概述

- 浏览器导航的过程可以用如下这个图粗略地描述

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587717214842-b4ca14af-53a6-450a-8681-a0b1e6b991bf.png)

- 下面我们对其中的每一步进行细致的分析



## 用户输入

### 处理URL

- 当用户在地址栏输入时，浏览器会判断输入的内容是**搜索内容**，还是要**请求的URL**。
- 如果是**搜索内容**，地址栏会**使用默认的搜索引擎**，合成**带搜索关键字的URL**；

- 如果输入的内容**符合URL规则**，地址栏会为其**加上协议**，合成**完整的URL**；

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587712675115-1bf39681-2455-4a61-ab2c-7e86598a1cb3.png)

### beforeonload事件

- 当用户输入关键字并敲了回车键之后，当前界面即将被替换成新的页面。
- 不过在这个流程继续之前，浏览器**给了当前页面一次执行beforeunload事件**的机会。

- beforeonload事件允许页面在退出之前执行一些数据清理操作，以及**询问用户是否真的要离开当前的页面**（最常用的就是当前页面有表单未提交时）。

```javascript
window.addEventListener("beforeunload", function (event) {
  event.returnValue = "\o/";
});
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587715742226-247d5441-6d55-49bb-b745-d8bb5b2377ac.png)

- 如果页面没有监听beforeonload事件或者用户同意继续的话，浏览器便进入了加载页面的状态。



## 发起URL请求

URL请求大致有以下几步：

- 首先在本地缓存中查找资源，如果没有，再去请求；
- 进行DNS解析，获取域名对应的IP；

- 使用IP地址与服务器建立连接；
- 网络进程构建请求并发送给服务器；

- 网络进程接收响应信息

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587716100296-c88121ae-0044-4899-bdb9-989fc35419e0.png)

全程都在网络进程中



### 在本地缓存中查找资源

- 浏览器的网络进程首先会**查看本地是否缓存了该资源**，如果有缓存资源，那么直接返回资源给浏览器进程。否则会直接**进入网络请求流程**。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587714510840-86eef22c-365a-4ced-8a66-b7690271b476.png)

### DNS解析

DNS解析的目的就是要**查找域名对应的IP地址**

- **查找浏览器缓存**：近期浏览过的网站，浏览器会将DNS缓存保留一段时间（如果没有则往下继续）；
- **查找系统缓存**：从系统中的hosts文件查找（如果没有则往下继续）；

- **查找路由器缓存**（如果没有则往下继续）；
- **查找ISP DNS缓存**：从网络服务商的DNS缓存中查找（如果没有则往下继续）；

- **向子域名服务器查****找域名对应的IP****，如果没有会逐步向上级域名服务器查找，直到根域名服务器；**



### 使用IP地址与服务器建立连接

- 完成了DNS解析后，网络进程会使用获取到的IP地址，与服务器建立TCP连接。

如果请求协议是HTTPS，还会先建立TLS连接。

### 构建请求并发送给服务器

- 连接建立之后，网络进程会构建请求（把一些相关数据放入请求头），并发送给服务器。

### 接收响应信息

- 服务器收到请求后，会根据请求信息生成对应的响应数据并返回给浏览器的网络进程。

关于HTTP请求和响应的更多信息可以查看[HTTP协议基础](https://www.yuque.com/gangafengliu/frontend-rookie/http-basics)



## 读取响应头信息

- 接收到服务器返回的响应头后，网络进程开始解析响应头。

### 重定向

- 如果返回的响应头中的状态码是301或302，说明服务器需要浏览器重定向到其他URL；
- 网络进程会从响应头的Location字段中读取重定向的地址，然后再发起新的HTTP或HTTPS请求，我们又回到了“URL请求”那一步。

### 响应数据处理

- 浏览器使用响应头中的Content-type字段来区分数据类型究竟是**下载类型**还是正常的**HTML页面**；

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587719852343-e870d145-96c6-48d2-817b-3d836b358a89.png)

## 准备渲染进程

- 通常情况下，打开一个新的页面会使用单独的渲染进程；
- 如果从A页面打开B页面，且A和B**属于同一站点**的话，那么B页面复用A页面的渲染进程；如果不是同一站点，浏览器进程会为B页面创建一个新的渲染进程。

同一站点：拥有相同的协议和根域名的站点。

- 渲染进程准备好之后，还不能立即进入文档解析状态。因为此时文档数据还在网络进程中，并没有进入到渲染进程，所以要先进入到**提交文档**阶段。

也可以使用rel="noopener noreferrer"来告诉浏览器新的子窗口不需要访问父窗口的任何内容，这样的话新开的页面会被重新分配一个新的渲染进程。



## 提交文档

### 什么是提交文档？

- 所谓**提交文档**，就是浏览器进程将网络进程接收到的HTML数据提交给渲染进程。

### 提交文档的步骤

1. 浏览器接收到网络进程的响应头数据后，向渲染进程发起提交文档的消息；
2. 渲染进程接收到“提交文档”的消息后，会和网络进程建立传输数据的管道；

1. 等文档数据传输完成后，渲染进程会返回“确认提交”的消息给浏览器进程；
2. 浏览器进程在收到确认提交的消息后，会更新浏览器界面的状态（安全状态、地址栏的URL、前进后退的历史状态，更新Web页面）。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587739730271-05758223-aa0f-4c33-891b-e5ef2cbe0b50.png)

## 渲染阶段

- 到了这里，浏览器导航流程其实已经结束了，要进入渲染阶段了。
- 一旦页面渲染完成，渲染进程会发送一个消息给浏览器进程，浏览器收到消息后，会停止标签图标上的加载动画。“从输入URL到页面显示”的整个过程也就圆满完成了。

- 关于渲染阶段的内容，打算重开一篇Blog来好好总结一下。