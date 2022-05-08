---
index: 1
title: 网络基础入门
description: 本文介绍一些网络基础入门知识
icon: network
date: 2020-04-04
category:
  - 学习笔记
tag:
  - 网络
---

这一部分基本上是[《图解HTTP》](https://www.itpanda.net/book/2)这本书**第一章**的笔记，获取更多信息可以查看[原书](https://book.douban.com/subject/25863515//)，建议支持[正版](https://item.jd.com/11449491.html)。

### 使用HTTP访问Web

- **客户端**（Client）通过发送请求获取**服务器**（Server）上的资源。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583896054789-cec7be28-e922-4ddd-a934-977dd4e75d5f.png) 



### TCP/IP协议族

#### 什么是TCP/IP协议族

- **协议**：网络设备之间通信所采取的**规则**。
- **TCP/IP 协议族**：通常我们使用的网络是在TCP/IP协议族基础上运作的。**HTTP是它内部的一个子集**。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583896506987-955527cb-5258-4895-b852-455eb8a82fea.png) 

#### TCP/IP的分层管理

- 应用层：提供各类服务，HTTP位于此层。
- 传输层：提供两台计算机之间的数据传输，TCP位于此层。

- 网络层：选择数据包的传输路线。
- 链路层：硬件范畴。



#### TCP/IP 通信传输流

- 这里我们模拟客户端向服务器发送请求。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583897917456-3f9648aa-d0cc-4683-b77c-ddd780382a2f.png) 



- 发送端在层与层之间传输数据时，每经过一层必定会打上一个该层所属的首部信息；
- 接收端在层与层之间传输数据时，每经过一层必定会消去对应的首部。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583898094115-8d23e5af-0ce5-47a3-b27f-68b07d9c879e.png) 



### 几个协议

#### IP协议（负责传输）

- IP协议位于**网络层。**
- **P协议**的作用：把各种数据包传送给对方，传输过程依赖于**IP地址**和**MAC地址。**

- **IP地址**：指明了节点被分配到的地址（可变）。
- **MAC地址**：网卡所属的固定地址（基本不变）。

- **ARP协议**：使用该协议可以由IP地址反查出MAC地址。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583898611993-ac70ad9b-2a9c-44e0-b0e8-d65d4a908dee.png) 

没有人能全面预测互联网中的传输状况

在到达通信目标之前的中转过程中，计算机和路由等设备只能获悉很粗略的传输路线。



#### TCP/IP 协议（确保可靠性）

- TCP协议位于**传输层**。
- TCP协议的**作用**：提供**字节流服务**（将报文段分割成数据包），并提供**可靠的数据传输**（确认送达）。

- 如何提供可靠的传输：**三次握手🤝🤝🤝（**使用**SYN**和**ACK**标志**）**及其他各种手段。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583898978623-88dcd144-99d2-421a-9bbb-884f21778eb4.png) 

若握手🤝过程中莫名中断，会再次以同样顺序发送数据包。



#### DNS 协议（负责域名解析）

- DNS协议位于**应用层**。
- DNS协议的作用：提供**域名**到**IP**地址之间的解析服务。（正反向均可）

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583899279357-334be7ef-fa96-4218-9193-f1dc96a130bc.png) 



#### 各种协议和HTTP协议之间的关系

- 用一张图来表示：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583899385397-bbff7aa8-8a73-434c-8ca3-838dcad7deb1.png) 