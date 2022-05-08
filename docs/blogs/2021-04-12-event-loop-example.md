---
index: -20210412
title: 一道谷歌面试题引发的思考
description: 最近刷Youtube偶然看见一个小姐姐分享自己遇到的两个Google面试题，由此产生了这篇文章。
icon: js2
date: 2021-04-12
category:
  - 技术博客
tag:
  - JavaScript
---

最近刷Youtube偶然看见一个小姐姐分享自己遇到的两个Google面试题（[点击查看原视频](https://www.youtube.com/watch?v=kDd33VxaxaY)），由此产生了这篇文章。

## 从一段代码讲起

### 😉一段十分普通的JS代码

- 先来看一段十分普通的JavaScript代码，我们试图在控制台用循环语句输出几个数字。

```javascript
let i = 0
for(i = 0; i<6; i++){
  console.log(i)
}
```



- 我们在Chrome和Firefox中分别运行了一下，运行结果如下：



**Chrome运行结果**

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583462503665-948e9980-f82e-4366-b684-e862836b80fd.png){width=400}



**Firefox运行结果**

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583462318187-2e656acb-33ad-448e-87e4-b340e5517726.png){width=400}



- 用脚趾想都知道，结果是会输出从0到5的6个数。



### 😏给代码加点料

- 下面我们给代码加点料，我们仍然使用同样的循环语句输出数字，只不过将`console.log`语句放在了`setTimeout`函数中且设置延时为0，看看控制台会输出什么结果？

```javascript
let i = 0
for(i = 0; i<6; i++){
  setTimeout(()=>{
    // 延时函数
    console.log(i)
  },0)
}
```



- 运行结果是如下：



 **Chrome运行结果**

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583461689589-3c5dc316-591d-4487-a272-d5199e35e717.png){width=400}

​            



**Firefox运行结果**

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583461690506-f96912aa-b0d7-4be7-a080-f9b5bc0300b3.png){width=400}



- 可以看到，两个浏览器的运行结果是相同的，都在控制台打印出了6个6



### 🤯WTF？

什么鬼？怎么会这样呢！



## 先来谈谈setTimeout函数

### 😳setTimeout() 函数是干嘛的？

- 查询mdn可以看到，文档中给出的描述是：

- `setTimeout()` 方法设置一个**定时器**，该定时器在定时器到期后执行一个函数或指定的一段代码。

- 再去W3School看看，他们给出的描述是：

`setTimeout()` 方法用于在指定的毫秒数后调用函数或计算表达式

- 听起来似乎更容易理解了一些，看看代码示例也许更容易理解



```javascript
/* 浏览器3秒后向你打个招呼！ */
setTimeout(
  function(){
    alert("Hello"); 
  }, 3000);
```

- 对于setTimeout()函数，更加白话的理解是：

**凡是放在这个函数中东西，都过一会再****做，至于过多久，可以通过设定毫秒数来调节。**



### 😅那么如果将延时设置为0呢？

- 用逻辑来理解的话，延时为0s === 不再过很久而是“**立即马上”**就做，可是“立即”究竟有多“立即”呢？“马上”究竟有多“马上”呢？
- 要尝试理解“立即马上”，需要引入Event Loop的一些概念。



### 🤔当我们使用setTimeout() 时，到底发生了什么？

下面一部分的资料基本来自于以下这个视频，建议你看看这个视频，讲得一级棒！（ [Ichiban! ](https://www.bilibili.com/video/av19162406/)）

B站地址：[什么是事件循环？ - Philip Roberts](https://www.bilibili.com/video/av94091994/)（视频审核中）

- 接下来我们要看看当使用setTimeout() 时，到底发生了什么。



## setTimeout()究竟做了什么？

我们使用一张图来演示在调用setTimeout()时发生了什么。不用看图，先往下看文字。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583482670303-74ad305b-6d8b-40e7-8550-e3ef577e8271.png)



### 😬一些术语的简单解释

你可以先跳过这部分，当然，看看也无妨。

1. **调用栈（Call Stack）**

- [MDN对于调用栈的解释](https://developer.mozilla.org/zh-CN/docs/Glossary/Call_stack)大概是这样的：

1. 每当我们调用一个函数的时候，这个函数就会被添加进**调用栈**并开始执行
2. 正在**调用栈**中执行的函数如果调用了其他函数，那么那个函数也会被放入**调用栈**

1. 调用栈中的函数执行完了之后，会被清出**调用栈**

- 说白了就是：要执行的函数push到调用栈顶部，执行完从调用栈顶部pop出来，后进先出。

关于调用栈的更多信息，可以参考[你不知道的JS错误和调用栈常识](https://segmentfault.com/a/1190000008621990)



1. **定时器（Timer）**

- 定时器可以理解为：定时执行某段代码，这里的`setTimeout()`函数就是JS为我们提供的一个定时器。

关于定时器的更多信息，可以参考[JavaScript标准参考教程 - 定时器](https://javascript.ruanyifeng.com/advanced/timer.html)



1. **Web APIs**

- Web APIs 是浏览器创建的一些线程，包含**计时器**等等。



1. **回调序列（Callback queue）**

- 一个包含了回调函数的有序序列。



1. **事件循环（Event Loop）的简单描述**

- 事件循环包含了以下几个步骤：

- - 函数入栈执行，当执行到**定时器**（这类异步任务）时，把它丢给Web APIs去执行，接着继续执行栈内的剩余任务（同步任务），**直到栈空；**
  - 在此期间Web APIs会执行定时器，**直到计时结束**，然后会将回调函数（也就是setTimeout的第一个参数）扔到回调序列中；

- - 当调用栈为空时，事件循环会把Callback中的一个任务放入栈中，开始执行，回到第一步；



看了这么多概念后，也许你已经一头雾水了，不要急，接下来我们用图片演示一遍事件循环的过程，之后你再回来看这些定义估计会**豁然开朗**了。



### 🧐图解setTimeout执行过程

- 依旧是这段代码，我们用图解的形式理解一下。

```javascript
let i = 0
for(i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}
```



1. 首先我们定义了变量`i`，并为它赋值，主程序开始。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583483802299-6ffce529-5f9a-40ae-b313-dd6eea63bf28.png)



1. 然后进入循环，循环的第一步就是**判断**`i<6`**是否成立**，需要把判断`i<6`的语句放入调用栈中执行。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583483664883-9be1d198-c1cc-48cc-b208-c1286515ea9c.png)



1. 此时i的值是0，i<6显然成立，会继续执行循环体内的代码，即setTimeout()。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583484020349-32faba60-c7e9-4faa-9f24-b28acf958bc5.png)



1. 作为一个定时器，`setTimeout()`会被扔到Web APIs中执行。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583485222662-cf8f1c9e-b3a0-4f30-8bc6-b53391f608e2.png)



1. 此时，调用栈会继续执行后续代码，因为本次循环已经完成，所以会再次判断i<6，并进入下一次循环。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583484689331-35bb0f20-e4ab-4828-8e35-6146cc0d9173.png)



1. 几乎是在同一时刻(0s)，计时器完成了计时，将回调函数扔到回调序列中。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583484995990-0b49ed59-437f-489b-a187-973368b3921c.png)



1. 注意，这时候回调序列中的任务并不会马上执行，需要等到栈空才会开始进栈执行，因此会执行继续主程序。也就是循环体中的setTimeout()，因为是定时器，会被扔到Web APIs中执行。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583485545566-5e005eb4-9322-4c3a-acb1-83484a259aca.png)



1. 几乎是在同一时刻(0s)，计时器完成了计时，将回调函数扔到回调序列中。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583485746935-504f6d0f-c84f-473c-a33c-3c5df111c061.png)



1. 如此循环往复，直到i的值变为6时，循环彻底结束，主程序也随之结束。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583486116101-05c755ad-dedc-4edb-87dd-024d658fe645.png)



1. 此时回调序列中的任务还是进栈执行，打印`i`的值，而此时`i`的值为6，所以在控制台打印出了一个6。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583486811890-800105c6-9f90-43c9-8992-e0576b156ab7.png)



1. 回调序列中的任务会逐一进栈执行，直至最后一个回调函数`console.log()` ，连续打印出六个6。



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583486836192-670143ac-fa4f-41ab-a5e3-20efd866d861.png)



- 接下来用一段完整的动画演示（使用了[Loupe](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)工具）：



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583486895741-a6023cf0-cddd-4c52-bee5-f54d0df7f782.gif)





- 至此，我们基本解释了为何文章开头处那段代码会输出6个6，而不是0~5了。
- 你可以回头看看[前面](#muBGo)介绍的概念，估计会豁然开朗。



## 我偏要输出“0~5”！

- 我们已经解释了为何那段代码会输出6个6，但是如果我偏要用**for循环中嵌套setTimeout()的形式**输出0~5呢？

以下代码仅供参考，不再解释，因为我也不知道怎么解释！

### 😄方案一

- 在for循环体内声明`i`。



```javascript
for(let i = 0; i<6; i++){
  setTimeout(() => {
  	console.log(i)
  }, 0)
}
```



- 运行结果



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583488840454-d8977d63-e925-4732-b27b-97b7527aa8ae.png){width=400}



### 😁方案二

- 先声明函数，在`setTimeout()`中调用。



```javascript
let i = 0
function cb() {
  console.log(i)
}
for(i = 0; i<6; i++){
  setTimeout(cb(), 0)
}
```



- 运行结果



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583488883162-b9b0c9a9-c715-426d-a13c-7f0c3e6ad9ec.png){width=400}



### 😊方案三

- 使用立即执行函数？



```javascript
let i = 0
for(i = 0; i<6; i++){
  (function(i){
  	setTimeout(() => {
  		console.log(i)
  	}, 0)
  })(i)
}
```



- 运行结果



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583488925962-07aa2d15-2f60-4cab-8488-ad7707139d81.png){width=400}





### 方案四

```javascript
for(var i = 1; i <= 5; i++) {
  setTimeout(console.log.bind(console, i), i * 1000);
}
```

以上几种方案的本质都是将i限制在循环中每一次创建的函数实例中，无论是借助闭包，还是借助let的块作用域，以及 Function.proptotype.bind()。



鉴于本人才疏学浅，如有错误之处，还望批评指正！



## 参考资料

[浏览器事件循环机制 - 追风筝的人er](https://juejin.im/post/5afbc62151882542af04112d)

[如何序列化JavaScript中的并发操作：回调，承诺和异步等待 - itclanCoder](https://www.jianshu.com/p/e66c0541d91e)

[关于JS的for循环包裹异步函数的问题 - microkof](https://www.jianshu.com/p/690f58a3ff7b)

[JavaScript运行机制详解：再谈Event Loop - 阮一峰](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)

[【演讲】What the heck is the event loop anyway? - Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

[【演讲】In the loop - Jake Archibald](https://www.youtube.com/watch?v=cCOL7MC4Pl0)