---
index: 5
title: JavaScript 对象基本用法
description: JavaScript 对象基本用法
icon: js
date: 2020-04-24
category:
  - 学习笔记
tag:
  - JavaScript
---


> 对象类型是指一个组合值，你可以为其设置**属性**，每个属性可以持有属于自己的**任意类型**的值。
> 
> —— 《你不知道的JavaScript（下卷）》



## 声明一个对象

### 声明一个对象的两种语法

```javascript
/* 语法一 */
let obj1 = {
  'name': 'Barry',
  'age': 23
}

/* 语法二 */
let obj2 = new Object({
  'name': 'Barry',
  'age': 23
})
```



### 属性名和属性值

- 每个键值对代表对象的一个**属性**，包含键名和键值两个部分。
- 键名表示**属性名**，键值表示**属性值**

- 键名是**字符串**，不是标识符，（可以数字开头等等）
- 键名可以是**常量**或**变量**



- 以下是一些奇特的常量属性名：

```javascript
let obj = {
  1: true,		// 1 --> '1'
  3.2: true,	// 3.2 --> '3.2'
  1e2: true,	// 1e2 --> '100'
  1e-2: true,	// 1e-2 --> '0.01'
  .234: true,	// .234 --> '0.234'
  0xFF: true	// 0xFF --> '255'
}
```



- 可以使用 `Object.keys(obj)` 来打印出`obj`所有的属性名



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583307929033-95520dd9-51df-4794-b0ad-be6593150c7b.png)



### 使用变量作为属性名

- 语法对比

```javascript
let p1 = 'name'
let obj1 = { 
  p1: 'Barry' 		// 属性名为：'p1'（'p1'这个字符串）
}
let obj2 = {
  [p1]: 'Barry'		// 属性名为：'name'（变量p1的值）
}
```



- 不妨打印出来看一看



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583308697583-b6f76931-0af2-4f16-8dc4-6450c9eeda38.png)



### Symbol也能作为属性名



```javascript
let a = Symbol()
let obj = {
  [a]: 'Barry'
}
```

在“迭代”有用



### 对象的隐藏属性

- JavaScript中每一个对象都有一个隐藏属性，这个隐藏属性存储着其**共有属性组成的对象（原型）**的地址。

关于原型将在后续的笔记中详细介绍





## 删除属性

### 删除属性的语法

删除一个对象中的某个属性语法如下：

```javascript
/* 语法1 */
delete obj.name
/* 语法2 */
delete obj.['name']
```



- 删除属性后，对象中不再含有属性，即

```javascript
'name' in obj === false
```



### 区分“不存在属性”和“属性值为undefined”

- 定义一个名为`obj`的对象，并给它一个属性`p1`，属性值为`undefined`

```javascript
let obj = {
    'p1': undefined
}
```



- 此时，`obj`含有属性`p1`，`p1`并没有被删除，只不过其值为`undefined`，即

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583309931279-7afc8d71-babf-4fa4-a9b8-235f5781f877.png)



- 当执行了`delete obj.p1`后，才是真正删除了这个属性

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583310031238-cc388462-74d3-4d79-a441-89e4c5a760dc.png)



## 查看属性

### 查看所有属性

（以对象`obj`为例）

- 查看自身所有属性（不含共有属性）

```javascript
Object.keys(obj)
```



- 查看自身属性&共有属性

```javascript
console.dir(obj)
```



- 判断一个属性是自身的还是共有的

```javascript
obj.hasOwnProperty('toString')
```



### 查看对象的某一属性

#### 两种语法

```javascript
/* 中括号语法 */
obj['name']

/* 点语法 */
obj.name

/* 若属性名是一个变量 */
obj[name]
```



#### 一段例子

- 定义一个`obj`

```javascript
let p1 = 'name'
let obj = {
    [p1]: 'Barry',
    'age': 23
}
```



- 尝试访问`obj`的`p1`，只有`obj[p1]`成功

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583311938536-90e5d12b-4c34-4dba-854a-b1f6dca85fa6.png)



- 尝试访问`obj`的`age`，可以使用`obj['age']`和`obj.age`两种语法

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583311988174-89351f47-bc0d-4fb8-b42a-c45215b56360.png)



#### 一个奇怪的发现

- 定义一个obj，其中有两个属性，一个属性名为数字，另一个属性名以数字开头

```javascript
let obj = {
  '1': '111',
  '1a': '11aa'
}
```



- 尝试访问`obj`的`'1'`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583312219555-9bcef956-ff63-4855-90ba-b0a7d97060d8.png)



- 尝试访问obj的'1a'

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583312246501-3ef7ad1d-ef0e-4d43-ad29-3f1ed2819308.png)





## 修改或增加属性

若本身已有，则修改；若本身没有，则增加。

### 修改一个属性

- 正确的语法

```javascript
/* 语法一 */
obj.name = 'Barry'

/* 语法二 */
obj['name'] = 'Barry'

/* 神奇的写法 */
obj['na' + 'me'] = 'Barry'

/* 使用变量的写法 */
let key = 'name'
obj[key] = 'Barry'
```



- 错误的语法：`obj[name] = 'Barry'`



### 批量修改属性

```javascript
Object.assign(obj, {age: 18, gender: 'man'})
```



### 修改或增加共有属性

可以强制，但不推荐这样做，因为会引起很多问题。

- 尝试改toString

```javascript
obj.toString = 'xxx'		// 会在自身上增加toString属性，不会改变共有属性
```

- 结果

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583313200128-2e9ba1fe-2e5b-4512-90b0-cc5bf5afdc77.png)



### 修改隐藏属性

推荐使用`Object.create`

- 语法

```javascript
let common = {
  kind: 'human'
}
let xiaoLan = Object.create(common)
xiaoLan.name = 'xiao lan'
```

- 结果

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1583313544297-ce36dd06-37ee-4ad6-b8a6-1b865a7fb31c.png)



