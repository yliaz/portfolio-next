---
index: 1
title: JavaScript 基本语法速览
description: JavaScript 基本语法速览
icon: js1
date: 2020-04-20
category:
  - 学习笔记
tag:
  - JavaScript
---

本文部分内容来自[《你不知道的JavaScript（下卷）》](https://book.douban.com/subject/27620408/)，详细资料参见[原书](https://www.itpanda.net/book/167)，建议支持[正版](https://item.jd.com/12291874.html)。

## 代码和语句

### 代码

- **代码：** **代码**是**一组**特定的**指令**，用来指示计算机要执行哪些任务。
- **语法：** 指令的格式和组合规则。



### 语句

- **语句**描述了一个行为、动作，也可以理解为一个特定的任务。
- 语句一般**以分号结尾**。（这是[Google JavaScript 代码风格指南](https://juejin.im/post/5bd01d4a518825781e647e90)中所提倡的）



```javascript
a = b * 2;
// 这条语句描述了一个行为：计算机获取名为b的变量的值，将这个值乘以2，再将结果保存在名为a的变量中。
```



### 程序

- **程序**是多个**语句**的有序排列，描述了程序要执行的**所有步骤**。



## 表达式

- **表达式：**对一个**变量**或**值**的引用。



```javascript
1 + 2							// 值为3
add(1, 2)					// 值为函数add()的返回值
console.log				// 值为函数本身
console.log(3)		// 返回值是undefined（虽然在控制台打印的是3）
```



语句和表达式的区别：

1. 表达式一般都有值，语句可能有也可能没有；
2. 语句一般会改变环境（声明、赋值）；



## 大小写敏感

JavaScript是大小写敏感的

- `var a` 不同于 `var A`
- `object` 不同于 `Object`

- `function` 不同于 `Function`



## 空格

- 大部分空格没有实际意义
- `return` 后不能加「回车」，如果加「回车」，会自动在 `return` 后补一个 `undefined`



## 标识符

### 规则

- 第一个字符可以是`Unicode字母`或`$`或`_`或`中文`
- 后面的字符可以是上面的字符或数字



### 变量名是标识符

```javascript
var $ = 1
var _ = 2
var ____ = 3
var 你好 = "Hi"
```



## 注释

### 语法

```javascript
// 单行注释可以放在一句代码上方
let a = 1		// 单行注释也可以放在一句代码末尾
/*
这是一段多行注释
多行注释适用于需要大量解释的情况
*/
```



### 注释的几条原则

- 没有注释的代码不是最优的；
- **过多注释**可能是**拙劣代码**的征兆；

- 注释应该解释**为什么**，而非**是什么**；
- 如果编写的代码容易令人迷惑，注释可以解释一下实现原理；



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1584068306673-ca52a7ed-e3d7-4f6b-8cd5-1cebed4eebdc.gif)



### 好的注释和坏的注释

 👍**好的注释**

- 踩坑注解
- 解释代码为何如此奇怪

- 遇到的bug

 💩**坏的注释**

- 把代码翻译成中文
- 过时的注释

- 发泄不满



## 条件语句

### if语句

```javascript
/* 语法 */
if (表达式) {
  语句1
} else if (表达式) {
  语句2
} else {
  语句3
}
```



### switch语句

```javascript
/* 语法 */
switch (fruit) {
  case "banana":
    /* 执行一些语句 */
    break;
  case "apple":
    /* 执行一些语句 */
    break;
  /* ... */
}
```



关于`break;`：

- 大部分时候，不要忘了`break;`
- 少部分时候，可以利用`break;`



### 问号冒号表达式

```javascript
/* 语法 */
表达式1 ? 表达式2 : 表达式3
```



### &&

- 语法

```javascript
A && B && C && D
/* 会取第一个假值，若A、B、C都是真值则取D */
/* 不会取 true/false */
```



- 例如，对于 A&&B：

| A && B      | A === true | A === false |
| ----------- | ---------- | ----------- |
| B === true  | A          | B           |
| B === false | A          | B           |



- 常用例子：

```javascript
console && console.log && console.log("hi")
```



### ||

- 语法

```javascript
A || B || C || D
/* 会取第一个真值，若A、B、C都是假值则取D */
/* 不会取 true/false */
```



- 常用1

```javascript
A || B
/* 等价于 */
if (!a) {
	b
} else { }
```



- 常用2

```javascript
a = a || 100
/* 等价于 */
if (a) {
  a = a
} else {
	a = 100
}
```



## 循环语句

### while循环

```javascript
while (表达式) {
  语句
}
```

- 判断表达式真假
- 若为真：执行语句，再判断真假

- 若为假：退出循环



### for循环

```javascript
for (语句1; 表达式2; 语句3) {
	循环体
}
```

- 执行语句1
- 判断表达式2真假

- 若为真：执行循环体+语句3
- 若为假：退出循环



### break和continue

- break：退出整个循环
- continue：退出当前这一次循环



## label语句（标识符）

```javascript
foo: {
	console.log(1);
	break foo;
	console.log('本行不会输出');
}
console.log(2);
/* 执行结果是输出数字1和2 */
```