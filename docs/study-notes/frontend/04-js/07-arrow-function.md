---
index: 7
title: 箭头函数
description: 箭头函数
icon: js1
date: 2020-04-26
category:
  - 学习笔记
tag:
  - JavaScript
---
 
> 小小地总结一下箭头函数。

## 1. 写法

```jsx
// 箭头函数的写法
const plusOne = (a) => {
    return a + 1
}

// 如果只有一个参数，可以省略小括号
const plusOne = a => {
    return a + 1
}

// 如果只有一条语句，可以省略大括号，需要注意返回值
const plusOne = a => a + 1 
```

## 2. 箭头函数的嵌套

```jsx
const plus = (x, y) => x + y
console.log(plus(1, 2))  // 3
// 可以写成：
const plus = x => y => x + y
console.log(plus(1)(2))  // 3
```

## 3. 关于箭头函数中的 `this`

首先需要注明的是，普通 `function` 是隐含一个 `this` 参数的。

```jsx
const test = {
    a: 1,
    plusOne: function(){
        return this.a + 1
    }
}

// 调用plusOne时：
console.log(test.plusOne(1))  // 2

// 我们可以指定this：
console.log(test.plusOne.call({ a: 10 }, 1))  // 11
```

箭头函数是没有隐含的 `this` 参数的

```jsx
window.a = 10
const test = {
    a: 1,
    plusOne: () => {
        console.log(this)  // window
        return this.a + 1
    }
}
// 调用plusOne时：
console.log(test.plusOne(1))  // 11

// 上面的代码，可以使用Babel转换成ES5，可以更清楚地看到this的指向
"use strict";

var _this = void 0;

window.a = 10;
var test = {
  a: 1,
  plusOne: function plusOne() {
    console.log(_this);
    return _this.a + 1;
  }
};

console.log(test.plusOne(1)); // 11

// void 0 其实就是 undefined，后面调用时发现this指向为undefined，所以使用了默认指向的window
```