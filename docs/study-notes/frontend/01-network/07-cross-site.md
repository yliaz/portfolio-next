---
index: 7
title: 关于跨域
description: 关于跨域
icon: network
date: 2020-04-10
category:
  - 学习笔记
tag:
  - 网络
  - http
---

## 同源

### 同源和同源策略

- **同源策略（SOP）**：同源策略（Same Origin Policy）是一种约定，由网景公司于1995年引入浏览器，它是浏览器最核心也是最基本的安全功能。如果缺少了同源策略，浏览器很容易受到XSS（[跨站脚本](https://zh.wikipedia.org/wiki/跨網站指令碼)）和CSFR（[跨站请求伪造](https://zh.wikipedia.org/wiki/跨站请求伪造)）攻击。
- **同源**：两个URL中**协议**、**域名**、**端口**均相同，就可以说他们是**同源**。

### 同源策略限制的行为

- 无法获取非同源网站的**Cookie**、**LocalStorage**和**IndexedDB**；
- 无法获取非同源网站的**DOM节点**；

- 发送**Ajax请求**后，**服务器端可以收到请求并正常返回响应，知识结果被浏览器拦截了**；



### 同源策略类别

- DOM同源策略：禁止对不同源页面DOM进行操作。主要场景是iframe跨域情况，不同域名的iframe是限制互相访问的。
- XMLHttpRequest同源策略：禁止使用XHR对象向不同源的服务器地址发起HTTP请求。



### 我们为什么需要同源策略？

- 为了用户的上网安全。



## 跨域

### 什么是跨域？

- 跨域是由浏览器的**同源策略**所**限制**的访问。



### 允许跨域加载资源的标签

- `<script src="XXX">`
- `<img src="XXX">`

- `<link href="XXX">`
- ......

详见[【MDN】浏览器的同源策略 - 跨源网络访问](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy#跨源网络访问)



## 解决跨域问题的方法

### JSONP

#### 基本原理

- 由于 `<script>` 标签不受浏览器同源策略的影响，允许跨域引用资源。因此可以通过动态创建标签，然后利用src属性跨域。

#### JavaScript代码示例

- 原生实现

```javascript
// 动态创建script标签
const script = document.createElement("script");
// 设置script的src
script.src = `${url}`;
// 使用后即销毁
script.onload = () => {
    script.remove();
}
// 把这个<script>标签放到body中
document.body.appendChild(script);
```

- jQuery

```javascript
$.ajax({
    url: `${url}`,
    type: 'GET',
    dataType: 'jsonp',  // 请求方式为jsonp
    jsonpCallback: "handleCallback",    // 自定义回调函数名
    data: {}
});
```

#### 优点

- 使用简便，没有兼容性问题。

#### 缺点

- 只支持GET请求；
- 请求的域中可能会夹带恶意代码，可能会受到XSS攻击；



### CORS

#### CORS简介

- **CORS**是一个W3C标准，全称是**跨域资源共享**（Cross-origin resource sharing）。它允许浏览器向跨域服务器发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
- CORS需要**浏览器和服务器同时支持**。



#### 不同角度理解CORS

- 对于**用户**而言，整个通信过程都是由浏览器自动完成，用户甚至觉察不到。
- 对于**开发者**而言，CORS通信与同源的AJAX通信在代码方面没有任何差别。

- 对于**浏览器**而言，一旦发现AJAX请求跨域，就会自动添加一些附加的头信息，有时还会多出一次附加的请求。
- 对于**服务器**而言，只要实现了CORS接口，就可以实现跨域通信。



#### 简单请求和复杂请求

- **简单请求**的条件

- - 请求方式为GET、POST或HEAD
  - HTTP信息不超出以下字段：

- - - `Accept`
    - `Accept-Language`

- - - `Content-Language`
    - `Last-Event-ID`

- - - `Content-Type`（application/x-www-form-urlencoded、multipart/form-data、text/plain）

- **复杂请求**：凡是不属于简单请求的，都是复杂请求。
- 区分简单请求和复杂请求的原因是，**浏览器**对这两种请求的**处理方式是不同的**。



#### 简单请求流程

- 对于简单请求，浏览器会在请求头中增加一个 `Origin` 字段，用来说明本次请求来自哪个源（协议+域名+端口），服务器根据这个值，决定是否同意这次请求。
- 如果Origin指定的源**在**服务器许可范围内，则进行正常的HTTP回应，响应头部会包含几个特殊的字段。

```
// 必有字段，一般是请求时Origin字段的值
Access-Control-Allow-Origin: http://barry.com:8888

// 可选字段，表示是否允许发送Cookie
Access-Control-Allow-Credentials: true
```

- 如果Origin指定的源不在服务器许可范围内，服务器也会返回一个正常的HTTP回应，但是响应头中不会包含`Access-Control-Allow-Origin` 字段，浏览器发现后就知道出错了，会抛出一个错误。这个错误会被`XMLHttpRequest` 的 `onerror` 回调函数捕获。
- CORS默认不发送Cookie和HTTP认证信息，如果要把Cookie发给服务器，需要：

- - **服务器**指定 `Access-Control-Allow-Credentials` 字段；
  - **开发者**在AJAX中设置 `withCredentials` 属性为 `true`；

```javascript
// 原生JS
...
let xhr = new XMLHttpRequest();
// 前端开发人员设置是否带cookie
xhr.withCredentials = true;
... 

// jQuery
$.ajax({
   ...
   xhrFields: {
       withCredentials: true    // 前端设置是否带cookie
   },
   crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
   ...
});
```

#### 复杂请求流程

- 归类为复杂请求的CORS请求会在正式通信之前，增加一次HTTP查询请求，称为**预检请求**（preflight）。
- 浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。

- 预检请求会使用**OPTIONS方法**。
- 一旦通过了预检请求，之后浏览器的每次CORS请求都是简单请求。



## 其他跨域方法

Nginx 做反向代理



参考文章：

[同源策略 - 维基百科](https://zh.wikipedia.org/wiki/同源策略)

[跨站脚本 - 维基百科](https://zh.wikipedia.org/wiki/跨網站指令碼)

[跨站请求伪造 - 维基百科](https://zh.wikipedia.org/wiki/跨站请求伪造)

[Web开发中跨域的几种解决方案](https://harttle.land/2015/10/10/cross-origin.html)

[【掘金】九种跨域方式实现原理 - 浪里行舟](https://juejin.im/post/5c23993de51d457b8c1f4ee1)

[【掘金】彻底理解浏览器的跨域 - Escape Plan](https://juejin.im/post/5cad99796fb9a068ab40a29a#heading-0)

[【掘金】浏览器同源策略及跨域的解决办法 - laixiangran](https://juejin.im/post/5ba1d4fe6fb9a05ce873d4ad)

[【SF】前端常见跨域解决方案 - 安静de沉淀](https://segmentfault.com/a/1190000011145364)

[【简书】详解跨域（最全的解决方案） - 极客教程](https://www.jianshu.com/p/a0dd1e712c3a)