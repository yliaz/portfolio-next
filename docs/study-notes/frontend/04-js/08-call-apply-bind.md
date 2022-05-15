---
index: 8
title: call()、apply() 和 bind()
description: call()、apply() 和 bind() 对比
icon: js
date: 2020-04-27
category:
  - 学习笔记
tag:
  - JavaScript
---

## 显示绑定

- `call()`、`apply()`、`bind()`本质上都是**改变函数执行上下文中this所绑定的对象**。
- 这种**直接指定**this绑定的对象的方式称为**显示绑定**。



## call()和apply()用法

- 当一个对象A没有某个方法，而另一个对象B有，我们可以借助 `call()` 和 `apply()` **用B的方法来完成对A的操作**。

### call()用法

```javascript
// 一个红色的苹果
let apple = {
	color: "red",
	talk: function (name) {
		console.log(`I am a ${this.color} ${name}`);
	}
}
// 一个黄色的香蕉
let banana = {
	color: "yellow"
}
调用苹果的talk()方法，将this指定为banana对象
apple.talk.call(banana, 'banana');

// 控制台输出：I am a yellow banana
```

### apply()用法

```javascript
// 定义一个苹果
let apple = {
	color: "red",
	talk: function (name, emoji) {
		console.log(`I am a ${this.color} ${name} ${emoji}`);
	}
}
// 定义一个香蕉
let banana = {
	color: "yellow"
}
调用苹果的talk()方法，将this指定为banana对象，参数以数组形式传入
apple.talk.apply(banana, ['banana', '🍌'])

// 控制台输出：I am a yellow banana 🍌
```

### call()和apply()的区别

- 两者的**作用完全一样**，只是**接受的参数有些不同**。
- call()需要把参数**按顺序逐个传递**进去，而apply把参数**放在数组里传进去**。

- 因此，当**明确知道函数有几个参数**时，使用call()，当对于函数的**参数个数不太确定**的时候，使用apply()。

### 常见用法

#### 数组追加

```javascript
let array1 = [1,2,3];
let array2 = [4,5,6];
Array.prototype.push.apply(array1, array2);
console.log(array1);

// 控制台输出：[1,2,3,4,5,6]
```

#### 获取数组中最大值和最小值

```javascript
let array = [5,4,2,7,3,9,1,8,3];
console.log('最小值: ' + Math.min.apply(null, array));
console.log('最大值: ' + Math.max.apply(null, array));

// 控制台输出：最小值: 1
//           最大值: 9
```

#### 验证是否为数组

```javascript
functionisArray(obj){ 
    return Object.prototype.toString.call(obj) === '[object Array]' ;
}
```

#### 伪数组使用数组方法

```javascript
// Chrome环境下NodeList使用Array的方法
Array.prototype.map.call($0.querySelectorAll('div'), (e) => {console.log(e)});
```

### 举个例子 🌰

- 定义一个`log()`方法，让其代理`console.log()`方法。

```javascript
function log(message) {
    console.log(message);
}

log('Hello');
// 控制台输出：Hello
log('Hello', 'world');
// 控制台输出：Hello
```

- 如果输入的参数不确定，上面的方法就失效了，此时可以借助apply()实现。

```javascript
function log() {
    console.log.apply(console, arguments);
}

log('Hello');
// 控制台输出：Hello
log('Hello', 'world');
// 控制台输出：Hello world
```

- 如果我们想对每一个log加一个`【JS对你说】`前缀呢？
- 可以想到，arguments是一个伪数组，我们可以先把它转化成数组，再执行对应的操作。

```javascript
function log() {
	  Array.prototype.map.call(arguments, (e) => {console.log(`【JS对你说】${e}`)});
}

log('Hello', '你好');
// 控制台输出：
//【JS对你说】Hello
//【JS对你说】你好
```



## bind()的用法

### bind()的概念

- 说完了`call()`和`apply()`，再来谈谈`bind()`。bind()也是可以改变this所绑定的对象。
- 我们先看一下[MDN上对于bind()的描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)：

`**bind()**` **方法创建一个新的函数，在** `**bind()**` **被调用时，这个新函数的 this 被指定为** `**bind()**` **的第一个参数，而其余参数将作为新函数的参数，供调用时使用。**

- 与 `call()` 和 `apply()` 不同的是，`bind()` 会**返回对应的函数**，便于后续的调用。

### 代码示例

```javascript
let apple = {
	  color: "red",
	  talk: function (name) {
		    console.log(`I am a ${this.color} ${name}`);
	  }
}

let banana = {
	  color: "yellow"
}

banana.talk = apple.talk.bind(banana, 'banana')
banana.talk();
// 控制台输出：I am a yellow banana
```

### 要注意的

- 一旦强制绑定后，不能再进行修改。也就是说，即使进行了多次绑定，仅有第一次会生效。
- 给banana绑定talk()后，banana中talk()这个函数的name是`bound talk`。

- bind()不会立即执行，而要后续调用。



## 总结

- `call()`、`apply()`、`bind()` 都是用来改变this绑定的对象的；
- `call()`、`apply()`、`bind()` 的第一个参数都是要绑定的对象；

- `call()`、`apply()`、`bind()` 都可以利用后续参数来传参；
- `call()`、`apply()` 会立即调用，`bind()` 会返回函数用来后续进行调用；





参考资料：

[【优雅代码】深入浅出妙用JavaScript中apply、call、bind - Chokcoco](https://www.cnblogs.com/coco1s/p/4833199.html)

[【译】JavaScript中至关重要的Apply、Call和Bind - Joe's Blog](https://hijiangtao.github.io/2017/05/07/Full-Usage-of-Apply-Call-and-Bind-in-JavaScript/)