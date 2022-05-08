---
index: 1
title: 事件冒泡和事件捕获
description: 事件冒泡和事件捕获
icon: site-structure
date: 2020-07-20
category:
  - 学习笔记
tag:
  - DOM
---

本文参考自《JavaScript高级程序设计(第3版)》13.1 节**事件流**。

## 事件模型

### 事件捕获

- 如果你点击了页面中的 `<div>` 元素，那么这个点击事件会按照如下顺序传播。
- `document` **==>** `html` **==>** `body` **==>** `div`

- 即，事件会**先通知给祖宗，最后通知给儿子**。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1588840704725-3ef461b1-9937-4763-888e-fda1ca2d1acf.png)

### 事件冒泡

- 如果你单击了页面中的 `<div>` 元素，那么这个点击事件会按照如下顺序传播。
- `div` **==>** `body` **==>** `html` **==>** `document`

- 即，事件会**先通知给儿子，最后通知给祖宗**。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1588840589310-c19b8a36-8f91-437b-b028-7725954792bd.png)



## 事件机制

### DOM事件机制（处理程序）

- 使用addEventListener()来指定事件处理程序，它接收三个参数；
- `addEventListener(监听事件类型, 事件处理函数, 布尔值)`

- 其中的布尔值指明了在什么阶段调用事件处理程序

- - 默认为 `false`，表示在**冒泡阶段**调用事件处理程序；
  - 如果设为 `true`，表示在**捕获阶段**调用事件处理程序；

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1588847643030-5a7afba6-c3dd-4819-881e-c9ce842ab08a.png)

```javascript
/* 举个例子 🌰 */
btn.addEventListener("click", () => {
    alert("点击了");
}, false);
```



### 举个例子 🌰

- 源代码如下（也可以在[JSBin](http://js.jirengu.com/lonul/7/edit?html,js,output)查看）

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <div id="a">
    <div id="b">
      <div id="c"></div>
    </div>
  </div>
</body>
</html>
#a{
    width: 300px;
    height: 300px;
    background: tomato;
}
#b{
    width: 200px;
    height: 200px;
    background: orange;
}
#c{
    width: 100px;
    height: 100px;
    background: yellow;
}
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");

c.addEventListener("click", event => {
    console.log("c1");
}, false);

c.addEventListener("click", event => {
    console.log("c2");
}, true);

b.addEventListener("click", event => {
    console.log("b");
}, true);

a.addEventListener("click", event => {
    console.log("a1");
}, true);

a.addEventListener("click", event => {
    console.log("a2")
}, false);

a.addEventListener("click", event => {
    console.log("a3");
    // 阻止冒泡事件和捕获事件
    // 注释前后控制台输出不同
    event.stopImmediatePropagation();
}, true);

a.addEventListener("click", event => {
    console.log("a4");
}, true);
```

- 我们创建了三个盒子，并分别给他们加上一些点击事件。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1588849370420-6071a5ed-b33b-42b7-b5d7-f9ea6b9494cb.png)

【问】问题一：点击b或c，会输出什么？

【答】`a1`、`a3`

- stopImmediatePropagation 包含了 stopPropagation 的功能，即阻止事件传播（捕获或冒泡），但同时也阻止该元素上后来绑定的事件处理程序被调用，所以不输出 a4。 
- 因为事件捕获被拦截了，自然不会触发 b、c 上的事件，所以不输出 b、c1、c2，冒泡更谈不上了，所以不输出 a2。



【问】问题二：点击a，会输出什么？

【答】`a1`、`a2`、`a3`

- 比较容易出错的答案是`a1`、`a3`、`a2`，虽然这三个事件处理程序注册时指定了`true`、`false`，但现在点击的是`a`这个盒子本身，它处于事件流的目标（target）阶段，**不是冒泡阶段**、也**不是捕获阶段**，事件处理程序**被调用的顺序是注册的顺序**。



【问】如果在a3中**取消**阻止冒泡事件和捕获事件，点击c，会输出什么？

【答】`a1`、`a3`、`a4`、`b`、`c1`、`c2`、`a2`

- 不解释了，直接看图吧

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1588851862170-ea5a41be-739e-44f9-b1cf-39cddbc5c940.png)



【参考资料】

[【MDN】EventTarget.addEventListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

[【掘金】你真的理解事件冒泡和事件捕获吗？ - CodeFei](https://juejin.im/post/5cc941436fb9a03236394027#heading-5)

[【掘金】JS中的事件委托或事件代理详解 - 慕容初晨](https://juejin.im/post/5acb1bcf6fb9a028dc414fc6#heading-3)

[【知乎】JavaScript事件委托详解 - 技术杂谈](https://zhuanlan.zhihu.com/p/26536815)

[【简书】JavaScript阻止事件冒泡 - 一点红3340](https://www.jianshu.com/p/89254c0c96c9)

[JS阻止冒泡和取消默认事件（默认行为）](http://caibaojian.com/javascript-stoppropagation-preventdefault.html)