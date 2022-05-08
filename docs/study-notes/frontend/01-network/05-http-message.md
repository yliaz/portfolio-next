---
index: 5
title: HTTP 报文
description: HTTP 报文
icon: http
date: 2020-04-08
category:
  - 学习笔记
tag:
  - 网络
  - http
---

这一部分基本上是[《图解HTTP》](https://www.itpanda.net/book/2)这本书第三、六章的笔记，获取更多信息可以查看[原书](https://book.douban.com/subject/25863515//)，建议支持[正版](https://item.jd.com/11449491.html)。

## HTTP 报文

### 定义

- **HTTP报文**：用于HTTP协议交互的信息。
- 请求端发出的报文叫**请求报文**，响应端发出的报文叫**响应报文**。

### 组成

- **HTTP报文**本身是**由多行数据（用CR+LF作换行符）构成的字符串文本**。
- **HTTP报文**分为**报文首部**和**报文主体**两块，两者以空行（CR+LF）划分。

- HTTP报文不一定要有报文主体。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583923295122-ae1702d7-90b0-46bd-9f5e-a80d7aacd961.png)



### 请求报文和响应报文

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583921970907-43b99cc8-55c6-4aea-b34d-9d40b6590962.png)



- **请求行**：包含用于请求的方法、请求URL和HTTP版本。
- **状态行**：包含表明响应状态的状态码、原因短语和HTTP版本。

- **首部字段**：包含表示请求和响应的各种条件和属性的各类首部。
- **其他**：可能包含HTTP的RFC里未定义的首部（cookie等）。



## HTTP 首部

HTTP协议的请求和响应报文中必定包含HTTP首部。

### HTTP 首部字段传递重要信息

- 首部字段起到传递额外重要信息的作用。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583923527358-4658af95-47c1-4006-ab90-2f33a87421a0.png)

### HTTP 首部字段结构

- 首部字段结构：`首部字段名: 字段值（可以有多个值）`
- 例如：`Content-Type: text/html`

- 再例如：`Keep-Alive: timeout=15, max=100`



### HTTP 首部字段类型

- **通用首部**字段：请求报文和响应报文都会使用的首部。
- **请求首部**字段：补充了请求的附加内容、客户端信息、相应内容优先级。

- **响应首部**字段：补充了响应的附加内容、也会要求客户端附加额外的内容信息。
- **实体首部**字段：针对实体部分使用的首部，补充了资源更新时间等于实体有关的信息。



## HTTP 首部字段

### 通用首部字段

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583924405730-7b3aaaa7-477a-4e9f-b956-17c237d7383f.png)



### 请求首部字段

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583924433534-01a548be-fa7a-466b-98ed-251f8bad14f3.png)



### 响应首部字段

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583924457404-0feb3bde-a703-43e2-85d7-a6ea0281b294.png)



### 实体首部字段

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583924501413-47a3f08a-a9ab-473e-958c-ef57873bd4a1.png)

### 为cookie服务的首部字段

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583924682868-620f2303-b273-4d03-9167-32bc23d368ca.png)

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583924740045-7602ed8f-ec24-47da-b5d1-895d63b94196.png)



关于各个首部的讲解此处不予赘述，请参见原书。