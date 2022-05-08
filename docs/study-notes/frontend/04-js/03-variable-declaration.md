---
index: 3
title: 细说 var、let 和 const
description: 这篇文章主要为了谈一下 var、let 和 const 的区别
icon: js1
date: 2020-04-22
category:
  - 学习笔记
tag:
  - JavaScript
---

这篇文章主要为了谈一下以下四种声明的区别：

1. `a = 1`
2. `var a = 1`
3. `let a = 1`
4. `const a = 1`

## 1. 含义不明的 `a = 1`

### 1.1 变量 `a` 不存在时

```jsx
// 当我们直接声明 a = 1 时，如果变量 a 不存在，一般会声明一个全局变量 a
a = 1
console.log(window.a)  // 1
```

### 1.1 变量 `a` 已经存在时

```jsx
// 如果变量 a 存在，则这是一条普通的赋值语句
var a
function fn() {
    a = 1
    console.log(a)  // 1
}
```

> 即 `a = 1` 既可能是声明+赋值语句，也可能只是赋值语句，含义不明，容易误解。

## 2. 变量提升 `var a = 1`

### 2.1 `var a = 1` 的使用

```jsx
// 与 a = 1 相比，var a = 1 一定是一条声明+赋值语句
function fn() {
    var a = 1
    console.log(a)  // 1
}
```

### 2.1 变量提升

```jsx
// 一段代码
console.log(age);
var age = 29;

// 变量提升后，上面的代码会变为
var age;
console.log(age);  // undefined
age = 29;
```

```jsx
// 但是var有变量提升的机制，即使在看起来永远不会执行到的部分，也会先提升到前面
function fn() {
    if (true) {
				console.log(a)
    } else {
        var a  // a会变量提升
        console.log(2)  // 1
    }
}
```

## 3. 块作用域 `let a = 1`

### 3.1 为什么我们需要 `let` ？

```jsx
// 由于var的作用域在函数或全局内，因此，类似于下面这种代码无法实现局部变量
{
    var a = 1 // 仍然会有变量提升
}

// 声明局部变量的方法，使用立即执行匿名函数
(function () {
    var a = 1
    window.fn = function() {
        console.log(a)
    }
    fn()  // 1
}())
```

为了不出现上面这种看起来十分傻X的代码，ES6为我们提供了 `let` 和 `const`

```jsx
{
    let a = 1
    window.fn = function() {
        console.log(a)
    }
    fn()  // 1
}
console.log(a)  // a is not defined
```

### 3.2 `let` 的特点

1. let 存在块作用域

```jsx
{
    let a = 1
}
console.log(a)  // a is not defined
```

1. let 不可重复声明

```jsx
let a = 1
let a = 2  // Identifier 'a' has already been declared
```

1. let 没有变量提升，必须先声明再使用

```jsx
a = 1  // Cannot access 'a' before initialization
let a
```

### 3.3 关于暂时性死区

> 只要块级作用域内存在 let，它所声明的变量在这块作用域内不会再受到外部的影响。下面代码中红色部分就是所谓的暂时性死区（Temporal Dead Zone）。

```jsx
// 一个暂时性死区的例子
var a = 1
{        
    a = 2
    let a  // Cannot access 'a' before initialization
}
```

```jsx
// 另一个暂时性死区的例子
function fn(x = y, y = 2) {
    return [x, y]
}
fn()
```

<aside>
📖 关于块作用域，还有一些需要解释的，我会在你不知道的JavaScirpt读书笔记中进行相关的记录。


</aside>

## 4. 常量 `const a = 1`

### 4.1 `const` 的特点

> 所有 `let` 的规则均适用于 `const`

1. 存在块作用域（同 `let`）
2. 不可重复声明（同 `let`）
3. 必须先声明后使用（同 `let`）
4. 声明的变量（内存地址）不可改变

```jsx
// 对于简单类型（Number/String/Boolean），值不可变
const a = 1
a = 2  // Uncaught TypeError: Assignment to constant variable.
```

```jsx
// 对于复杂类型（Object/Array），内存地址不可变，其内容是可变的
const a = []
a = [1, 2]  // Uncaught TypeError: Assignment to constant variable.

const b = []
b.push(1)
console.log(b)  // [1]
const c = {}
c.name = 'Bob'
console.log(c)  // { name: 'Bob' }

// 可以使用 Object.freeze() 冻结不想改变的对象
const d = Object.freeze({})
d.name = 'Alice'  // 常规模式无效，严格模式报错
console.log(d) // 常规模式：{}
```

1. 声明时，必须初始化

```jsx
const a  // Missing initializer in const declaration
```