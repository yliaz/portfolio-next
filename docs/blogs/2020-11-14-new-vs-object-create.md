---
index: -20201114
title: new 和 Object.create() 的区别
description: 这篇文章介绍一下 new 和 Object.create() 的区别。
icon: js2
date: 2020-11-14
category:
  - 技术博客
tag:
  - JavaScript
---

在使用 `new` 时，其实包含了以下几步绑定：

```javascript
// 执行let a = new Fn() 时发生的绑定：

// 创建一个简单的空对象
var obj = new Object();
// 将这个空对象的__proto__链接到Fn.prototype上
obj.__proto__ = Fn.prototype;
// 把构造函数的this指向obj，并执行构造函数把结果赋给result
var result = Fn.call(obj);
if (typeof(result) === 'object') {
    a = result; // 构造函数Fn的执行结果是引用类型，就把这个引用类型的对象返回给a
} else {
    a = obj; // 构造函数Fn的执行结果是值类型，就返回obj这个空对象给a
}
```



关于 `new` 和 `Object.create()` 的区别，stack overflow上有一个简洁而不简单的回答：

>  [【原文】](https://stackoverflow.com/questions/4166616/understanding-the-difference-between-object-create-and-new-somefunction)
>
> Very simply said, `new X` is `Object.create(X.prototype)` with additionally running the `constructor` function. (And giving the `constructor` the chance to `return` the actual object that should be the result of the expression instead of `this`.)

翻译一下：

简单说来，`new X` 就是在执行 `Object.create(X.prototype)` 的同时执行 `constructor` 中的函数。（使得 `constructor` 中的函数有机会返回一个应该作为表达式结果的真正的对象而不是 `this`）