---
index: 2
title: URL 基础
description: 本文介绍一些 URL 基础知识
icon: network
date: 2020-04-05
category:
  - 学习笔记
tag:
  - 网络
---


## 0. URL概述

**URL**全称是**Uniform Resource Locator**，译为**统一资源定位符**。

一个URL包括以下几个部分：

例子：

```text
http://user:pass@www.example.com:80/dir/index.html?uid=1#ch1
```

- http:// ：协议方案名
- user:pass：登录信息（认证）

- www.example.com：服务器地址（域名 / IP地址）
- :80：服务器端口号

- /dir.index.html：带层次的文件路径
- ?uid=1：查询字符串

- \#ch1：锚点（片段标识符）



## 1. 协议（Scheme）

协议是浏览器请求服务器资源的方法。如果省略协议，浏览器会自动添加上默认的协议，一般是 `http`。

浏览器常见协议有以下几种：

- http:（HTTP协议）
- https:（HTTPS协议）

- ftp:（文件传输协议）
- file:（文件）

- javascript:（脚本程序）



## 2. IP地址（Internet Protocol）

IP主要约定两件事：

- 如何定位一台设备
- 如何封装数据报文，以跟其他设备交流

- 可以是IPv4地址（192.168.1.1），也可以是IPv6地址（[1050:0:0:0:5:600:300c:326b]）



## 3. 域名（Domain Name）

### 域名与IP

IP是房子的地址，域名是房子主人的名字。

- 一个域名可以对应不同IP（均衡负载）；
- 一个IP可以对应不同域名（共享主机）；



### 域名级别

例如对于域名 `en.wikipedia.org`

- `.org`是顶级域名
- `.wikipedia.com`是二级域名

- `.en.wikipedia.com`是三级域名

他们是父子关系，但不一定是同一个人在使用。类似于房子是你的，但其中的屋子可能租给了其他人。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582607310406-8a46599a-7a90-4d00-b072-98cf78734f04.png)

### 域名、IP与DNS

IP和域名通过DNS对应起来：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583900872615-8ea06a9a-6b05-4e24-b096-0807643936ca.png)

## 4. 端口（Port）

一台机器可以通过不同的端口提供不同服务。

- HTTP一般用80端口
- HTTPS一般用443端口

- FTP一般用21端口

共有65535个端口（基本够用）



## 5. 路径（Path）

- 资源所在网站的位置，路径可能只包含文件名，服务器默认情况下回跳转到该目录下的 index.html 文件，或者列出这个目录下的所有文件，至于如何显示，取决于服务器的设置。



## 6. 查询参数（Parameter）

- 查询参数是提供给服务器的额外参数，紧跟在路径后面，使用 `?` 与路径分割。查询参数可以有一组或多组，通过键值对的方式进行设置，使用 `=` 连接键值对，多组参数使用 `&` 进行连接。



## 7. 锚点（Anchor）

- 网页内部的定位点，通常放置在 URL 的末尾，通过 # 分割。 如果URL上存在锚点，浏览器加载页面后，会自动定位到元素上具有 id 属性，并且属性值等于锚点字符的位置。



参考资料：

[《图解HTTP》 - 上野宣](https://www.itpanda.net/book/2)

[前端学HTTP之URL](https://www.cnblogs.com/xiaohuochai/p/6144157.html)

[A cartoon intro to DNS over HTTPS - Lin Clark](https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/#trr-and-doh)

[IPv6地址格式 - IBM Knowledge Center](https://www.ibm.com/support/knowledgecenter/zh/ssw_ibm_i_72/rzai2/rzai2ipv6addrformat.htm)
