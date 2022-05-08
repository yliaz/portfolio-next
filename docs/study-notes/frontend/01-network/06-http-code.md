---
index: 6
title: HTTP 状态码
description: HTTP 状态码
icon: http
date: 2020-04-09
category:
  - 学习笔记
tag:
  - 网络
  - http
---

这一部分基本上是[《图解HTTP》](https://www.itpanda.net/book/2)这本书第四章的笔记，获取更多信息可以查看[原书](https://book.douban.com/subject/25863515//)，建议支持[正版](https://item.jd.com/11449491.html)。

## 什么是状态码

### 状态码的作用

- **状态码**负责**表示客户端HTTP请求的返回结果**、**标记服务器端的处理是否正常**、**通知出现的错误**等工作。
- 借助状态码，用户可以知道服务器是正确处理了请求，还是出现了错误。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583913273725-e230066a-7096-481b-b681-7eae0f78d3f9.png)

### 状态码的分类

- 状态码中数字第1位指定了响应类别，有以下几种：

|      | 类别                             | 原因短语                   |
| ---- | -------------------------------- | -------------------------- |
| 1XX  | Information（信息性状态码）      | 接受的请求正在处理         |
| 2XX  | Success（成功状态码）            | 请求正常处理完毕           |
| 3XX  | Redirection（重定向状态码）      | 需要进行附加操作以完成请求 |
| 4XX  | Client Error（客户端错误状态码） | 服务器无法处理请求         |
| 5XX  | Server Error（服务器错误状态码） | 服务器处理请求出错         |



## 常用的状态码

状态码数量繁多，但经常使用的大概有14种。

### 2XX（成功）

#### 200 OK

- 客户端发来的请求在服务器端被正常处理了。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919146194-21f983e2-fd60-4f63-8ad5-cd139f102b4d.png)

#### 204 No Content

- 服务器接收的请求已经正常处理，但在返回的响应报文中不含主体。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919184477-22bcc854-b03c-4a55-80b8-ad157a873811.png)

#### 206 Partial Content

- 客户端进行了范围请求，而服务器成功执行了这部分的GET请求。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919237545-2b172806-f2ba-4384-88b7-992cb033d97c.png)

### 3XX（重定向）

#### 301 Moved Permanently

- 永久性重定向
- 请求的资源已被分配了新的URL，**以后**应使用新的URL。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919286266-f30c8e45-27f2-4850-8c58-5f18f1381138.png)

#### 302 Found

- 临时性重定向
- 请求的资源已被分配了新的URL，希望用户**本次**能使用新的URL访问。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919325514-082dda73-e65d-41e1-a2a0-e1fc3a27ee2c.png)

#### 303 See Other

- 与302功能相同，但明确表示客户端应**采用GET方法**获取资源。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919367240-0bb04a0b-459e-4ed8-b6f1-f656b2d2a749.png)

#### 304 Not Modified

- 客户端发送附带条件的请求时，服务器端允许访问资源，但未满足条件。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919404919-36157586-fc8c-438b-95bb-9186e878fba1.png)

#### 307 Temporary Redirect

- 临时重定向
- 功能与302相同。



### 4XX（客户端错误）

#### 400 Bad Request

- 请求报文中存在语法错误

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919464908-526c2c69-078a-4ffe-99dd-1fa6042c56d7.png)

#### 401 Unauthorized

- 发送的请求需要有通过HTTP认证的认证信息

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919517966-a3851fff-7473-428f-bbf3-5f261b5206b8.png)

#### 403 Forbidden

- 对请求资源的访问被服务器拒绝了。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919550439-9ea9d51f-a685-430d-9d8f-8d991b52eb03.png)

#### 404 Not Found

- 服务器上无法找到请求的资源

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919580749-ce96adf1-55b5-464d-8fcc-1f569846a05b.png)

### 5XX（服务器错误）

#### 500 Internal Server Error

- 服务器端在执行请求时发生了错误。
- 也可能是Web应用存在的Bug或某些临时的故障。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919612775-2da50c20-64f8-45d0-9073-24f9847a12e6.png)

#### 503 Service Unavailable

- 服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583919643197-ca88c1d8-e023-4ed4-b0cd-34a3b5153089.png)





有时候返回的状态码是错误的 ❌，但是用户可能觉察不到这一点。