---
index: 10
title: Promise
description: Promise 简单入门
icon: js
date: 2020-04-29
category:
  - 学习笔记
tag:
  - JavaScript
---

## Promise是干嘛的？

- Promise是一个对象，它代表了异步操作最终的完成和失败。
- 我们可以使用 `.then` 去运行其中的代码，并规定成功（resolve）和失败（reject）时执行什么操作。



## 为什么要使用Promise对象？

- 传统方法存在以下几个**问题**：

- - **名称不规范**；
  - 容易出现**回调地狱**；

- - 很难进行**错误处理**；



## 如何创建一个 new Promise

- 创建new Promise很容易，只需遵循特定的规则。例如：

```javascript
// 创建一个Promise对象，名为myPromise
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // 成功时调用resolve()
        resolve('成功了')
    }, 500);
    // 失败时调用reject()
    // 这里没写reject()
})
myPromise.then((message) => {
    // 成功时
    console.log('Yeah!' + message);
}, (message) => {
    // 失败时
    console.log('No!' + message);
})
```

- 或者如果想让某个函数拥有Promise功能，只需要将Promise对象作为它的返回值。例如：

```javascript
我们让一个名为doSomething的函数拥有与上面👆类似的promise
function doSomething() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 成功时调用resolve()
            resolve('成功了')
        }, 500);
        // 失败时调用reject()
        // 这里没写reject()
    })
}
doSomething().then((message) => {
    // 成功时
    console.log('Yeah!' + message);
}, (message) => {
    // 失败时
    console.log('No!' + message);
})
```



## 使用Promise.prototype.then

- then() 方法会返回一个Promise对象；
- then() 接收两个参数，一个成功回调函数和一个失败回调函数；

- 👆上面的例子中其实已经用到Promise了，这里补充一下语法；

```javascript
Promise.prototype.then((value) => {
    // Promise状态变为成功时回调的函数
}, (reason) => {
    // Promise状态变为失败时回调的函数
})
```

- 正因为then() 方法会返回一个Promise对象，所以可以进行链式调用

```javascript
// 创建了一个Promise对象
let myPromise2 = new Promise(function(resolve, reject) {
    // 成功时将1作为参数调用resolve()
    resolve(1);
});

myPromise2.then(function(value) {
    console.log(value);    // 控制台打印出：1
    // 改变value的值
    return value + 1;
}).then(function(value) {
    console.log(value);    // 控制台打印出：2
});
```



## 使用Promise.all

- Promise.all() 包含一个数组类型的参数，数组中的每个元素是一个Promise对象。
- 参数内**所有的promise都成功**，则整个回调成功；

- 参数内所有的promise中**只要有一个失败**，则整个回调失败，失败原因就是**第一个失败的promise的结果**；
- 换句话讲：👬**兄弟同心，其利断金**；**一条鱼🐟腥一锅汤**🍲；

```javascript
let promise1 = Promise.all([1,2,3]);
let promise2 = Promise.all([1,2,3, Promise.resolve(4)]);
let promise3 = Promise.all([1,2,3, Promise.reject(5)]);

setTimeout(function(){
    console.log(promise1);		// 控制台：Promise {<resolved>: Array(3)}
    console.log(promise2);		// 控制台：Promise {<resolved>: Array(4)}
    console.log(promise3);		// 控制台：Promise {<rejected>: 5}
});
```

## 使用Promise.race

- Promise.race返回一个Promise
- 一旦它的参数中某个Promise成功或失败，它立马成功或失败

- 换句话讲：**谁快谁🐂🍺！**



```javascript
let promise5 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, "5");
});
let promise6 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 500, "6"); 
});

Promise.race([promise5, promise6]).then(function(value) {
  console.log(value); 	// 控制台打印：5
  // promise5更快，所以整体成功了！
}, function(reason) {
  // 未被调用
});
```