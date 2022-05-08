---
index: -20210321
title: 6个问题理解 JS 原型和原型链
description: 所有的函数都有一个prototype属性，存放着一个对象，当这个函数作为构造函数时，prototype中存放的对象就成为了构造函数构造出来的对象的原型。
icon: js2
date: 2021-03-21
category:
  - 技术博客
tag:
  - JavaScript
---

所有的函数都有一个prototype属性，存放着一个对象，当这个函数作为构造函数时，prototype中存放的对象就成为了构造函数构造出来的对象的原型。

我们用一个小例子来理解一下这段话，有如下一段代码：

```javascript
// 声明了一个名为Fn的函数
function Fn() { }
// 用Fn()构造了一个对象，名为a
let a = new Fn();
// 将Fn()的prototype属性的值赋给b
let b = Fn.prototype;
```

接着我们通过一连串的问题来理解**JavaScript中原型继承的实现**

不过首先我们先介绍两个需要用到的工具：

- `[对象名] instanceof [构造函数名]`**：**用来判断一个对象是否为某个构造函数的示例。换句话说，判断是否是使用某个构造函数构造了某个对象。

- `typeof [变量名]`**：**用来查询一个变量的类型

## 6个问题

### 【问题1】是不是Fn() 构造了a？

```javascript
a instanceof Fn			// true
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589267280923-e8e5a19b-df0f-431e-bfd0-085775cab898.png){width=300}



### 【问题2】既然Fn()构造了a，Fn.prototype（一个对象）就是a的原型咯？

```javascript
a.__proto__ === Fn.prototype			// true
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589267421636-a89f2e32-d3b2-4627-968b-aea653bb1887.png){width=300}



### 【问题3】因为b = Fn.prototype，也就是说，b是a的原型咯？

```javascript
a.__proto__ === b			// true
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589267558294-755170e5-2c4f-4e39-8819-e2a6050b2b09.png){width=300}



### 【问题4】b是不是一个对象？

```javascript
b instanceof Object			// true
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589267688074-3f546ac4-2a86-46f4-abcb-33dc9b443f76.png){width=300}



### 【问题5】如果b是对象，那么Object.prototype就是b的原型咯？

```javascript
b.__ptoto__ === Object.prototype			// true
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589268050707-9dacf964-5573-409c-8213-3126b0d77438.png){width=300}



### 【问题6】a, b和Object.prototype组成了一条原型链对吗？

- 即原型链是否是：`a` **--->** `b` **--->** `Object.prototype`

【答】我们给 `a`、`b` 和 `Object.prototype` 分别加上一个名为 `identifier` 的属性，然后使用`console.dir(a)` 打印一下 `a` 并全部展开看看：

```javascript
a.identifier = 'a在这儿';
d.identifier = 'b在这儿';
Object.prototype.identifier = 'Object.prototype在这儿';
console.dir(a);
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589269114862-241a11f5-176b-49e2-8b7a-60e98a71e85c.png){width=400}



## 关于Constructor

- 在刚刚打印出来的b对象中有一个属性叫做 `constructor`，我们点开它会发现一个非常有意思的现象。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589270671985-8ce25f82-fcc5-476b-8fcf-7039af5ca76c.png)

- **Fn()** 和 **Fn.prototype**呈现出一种**“****你中有我我中有你”**的状态。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1589270336425-cee521c9-8fab-43a0-9888-2e4679e6610e.gif)

- 事实也正是如此

- - **构造函数的prototype属性**中会存放它**所构造对象的原型**；
  - 这个**原型对象中的constructor属性**会存放这个**构造函数**；

- 即：

```javascript
Fn.prototype.constructor === Fn			// true
```