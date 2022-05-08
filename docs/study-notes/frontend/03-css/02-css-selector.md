---
index: 1
title: CSS 选择器全解
description: CSS 选择器知识大总结
icon: css
date: 2020-04-13
category:
  - 学习笔记
tag:
  - CSS
---

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587480543514-95cd7fc4-70d8-4c07-87fb-964220eec815.png)

:::note 提示
CSS 选择器规定了CSS规则会被应用到哪些元素上
:::

## 写在前面

- 本文使用一个统一的HTML案例，并通过使用不同的选择器例子来测试究竟哪些元素被添加了样式（主要是宽度为1px的边框），对应的HTML代码如下，为了方便你的理解，我在下面附带了一个树状的元素图。

### HTML代码

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
<div class="grandfather1">grandfather1
  <div class="father1">father1
    <div id="son11" name="TedMosby" nickName="Ted Teddy" language="zh-CN"><span>son11</span></div>
    <div id="son12" name="BobMosby"><span>son12</span></div>
    <div id="daughter11" name="LilyMosby"><span>daughter11</span></div>
  </div>
</div>
</body>
</html>
```

### 树状图

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587453946725-4211a388-deac-409e-8f93-e411e988e2dc.png)

## 继承

- [继承](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance)是CSS中最基本的内容之一。
- 继承没有任何特定性（地位最低），我们随时可以用一个选择器来覆盖元素从父选择器继承来的样式。

### 可以继承的样式

- 一般来说，与「字体」相关的属性都会继承。以下几个属性都会继承。

font-size：字体大小

font-weight：字体粗细

font-family：字体家族

color：字体颜色

### 不可以继承的样式

- 一般来说，与「框」相关的属性都不会继承。以下几个属性都不会继承。

border：边框

margin：外边距

padding：内边距

background：背景色

## 基本选择器

### 通配选择器（Universal Selector）

- 选择所有元素

```css
/* 给所有元素都加上一个🍎色边框 */
* {
  border: 1px solid red;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587454725978-952a4415-0153-45b7-92f7-4a264692223e.png)


由于截图工具的原因，`<body>` 的右侧边框无法在截图中体现出来。

### 类型选择器（Type Selector）

- 选择某个类型的元素（例如div或span）

```css
/* 给所有div元素加上一个🍏色边框 */
div {
  border: 1px solid green;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587454827108-a416b155-8659-4f70-9314-9daddf6e8822.png)

### 类选择器（Class Selector）

- 选择「class属性的值 === 给定值」的所有元素
- 语法：.[给定值]

```css
/* 给所有class值为father1的div添加一个🧀色边框 */
.father1 {
  border: 1px solid Gold;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587455972160-8ad33b7b-b3dd-40ce-a32f-52ee5d0bc14d.png)

### ID 选择器（ID Selector）

- 选择「ID属性值 === 给定值」的哪个（唯一的）元素
- 语法：#[给定值]

```css
/* 给所有ID值为son11的div添加一个🥕色边框 */
#son11 {
  border: 1px solid orange;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587454972155-1cea5905-87bc-4be2-9c8a-c79eb13d1118.png)

### 属性选择器（Attribute Selector）

- **通过属性名和属性值来匹配元素**

#### 语法1：[attr]

- 带**有以attr命名的属性**

```css
/* 给有name属性的div加一个🍐色边框 */
[name] {
  border: 1px solid yellowgreen;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587455065516-c55dd6f8-8e1f-4ec6-9b48-8986e8d5c962.png)

#### 语法2：[attr=value]

- 带有以attr命名的属性
- attr属性的**属性值是value**

```css
/* 给name属性值为TedMosby的div加一个🍇色边框 */
[name=TedMosby] {
  border: 1px solid violet;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587456101749-ef2725d1-3cc1-473a-8788-74ce13f90ca7.png)

『#ID属性值』 等同于『id=[ID属性值]』

#### 语法3：[attr~=value]

- 带有以attr命名的属性
- 该属性的值是一个以空格为分隔的列表

- 列表中**至少有一个值是value**

```css
/* 给nickName属性列表中包含Teddy的div添加一个🍆色边框 */
[nickName~=Teddy] {
  border: 1px solid blueviolet;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587455250705-ae9e6b7e-ec5a-4ee2-9cad-e7c22a06f228.png)

『.[类名]』 等同于 『class~=[类名]』

#### 语法4：[attr|=value]

- 带有以attr命名的属性
- 该属性的**值是value**或**以"value-"为前缀**

```css
/* 给language属性为zh-CN的div添加一个🍒色边框 */
[language|=zh] {
  border: 1px solid Coral;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587455366880-32b202be-919d-42ec-b52f-296f7a32e766.png)

#### 语法5：[attr^=value]

- 带有以attr命名的属性
- 属性值**以value开头**

```css
/* 给name属性以Ted开头的div添加一个🥒色边框 */
[name^=Ted] {
  border: 1px solid forestGreen;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587456169304-56618395-0187-44b3-b869-f8fcc8d5b82d.png)

#### 语法6：[attr$=value]

- 带有以attr命名的属性
- 属性值**以value结尾**

```css
/* 给name属性以Mosby结尾的div添加一个🌰色边框 */
[name$=Mosby] {
  border: 1px solid Brown;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587456248218-b4f29c25-4347-4a40-b334-6a40eeb325da.png)

#### 语法7：[attr*=value]

- 带有以attr命名的属性
- 属性值**包含value**

```css
/* 给name属性包含Mos的div添加一个🍅色边框 */
[name*=Mos] {
  border: 1px solid Tomato;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587455661859-23d3f8f1-9d5f-4350-ac58-6ab7288246e8.png)

## 组合选择器

- 语法：A, B（A、B均为基本选择器）

```css
/* 给name属性为BobMosby的儿子和LilyMosby的女儿添加🍓色边框 */
[name=TedMosby],
[name=LilyMosby]{
  border: 1px solid Crimson;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587456429424-47f22bf8-0e20-4709-831c-600048f662ac.png)

## 组合器

### 后代组合器（Descendant Combinator）

- 语法：`A B`

```css
/* 给所有grandfather1类div的后代元素添加一个🍑色边框 */
.grandfather1 div {
  border: 1px solid PeachPuff;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587456603644-af194c1d-8018-4f7c-b90b-c63491710ddd.png)

### 子代组合器（Child Combinator）

- 语法：`A>B`

```css
/* 给所有grandfather1类的直接子代元素添加一个🥔色边框 */
.grandfather1 > div {
  border: 1px solid Burlywood;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587456719295-d9bf0e1d-19f2-4fc9-8395-d7d82db7ec59.png)

### 一般兄弟组合器（General Sibling Combinator）

- 语法：`A~B`

```css
/* 给所有son11的兄弟姐妹添加一个🍌色边框 */
#son11 ~ div {
  border: 1px solid yellow;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587456847552-738799e6-b780-460f-9fc6-1631bc779ab5.png)

### 紧邻兄弟组合器（Adjacent Sibling Combinator）

- 语法：`A+B`

```css
/* 给son11的紧邻兄弟（或姐妹）添加一个🍈色边框 */
#son11 + div {
  border: 1px solid yellow;
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587456951418-1ed3add1-628a-48cb-b7c9-ebe0a01b353f.png)

## 伪类

伪类主要用于要选择元素的特殊状态

此处仅简单列举出一些常用伪类的用法，更多的可以查看[伪类 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

### 静态伪类

- `:link`：未点击过的链接
- `:visited`：点击过的链接

### 动态伪类

- `:hover`：鼠标悬停
- `:active`：鼠标按下未松开时

- `:focus`：获得焦点的元素

### 用户界面元素伪类

- `:checked`：被选中

`:checked`适用于Radio（单选按钮）或Checkbox（复选框）

- `::selection`：被鼠标左键选择的部分（注意是两个冒号）
- `:enabled` 和 `:disabled`：启用和禁用

- `:read-only`：元素不可被用户编辑

### 结构伪类

#### 父找子

- `:first-child`：第一个孩子
- `:nth-child(n)`：第n个孩子

- `:last-child`：最后一个孩子
- `:only-child`：没有任何兄弟元素的元素

#### 找兄弟中的同类

- `:first-of-type`：一组兄弟元素中某类型的**第一个元素**
- `:nth-of-type(n)`：一组兄弟元素中某类型的**第n个元素**

- `:last-of-type`：一组兄弟元素中某类型的**最后一个元素**
- `:only-of-type`：没有任何想同类型的兄弟元素的元素

#### 其他

- `:root`：根元素（即 html 元素）
- `:not`：某个元素之外的所有元素

- `:empty`：不包含任何子元素的元素
- `:target`：代表一个**唯一的**页面元素，「**该元素id值」 === 「URL中#后面的部分」**

例如对于URL：`http://www.example.com/index.html#section2`

👇下面的元素可以被`section:target`伪类选中：

```html
<section id="section2">Example</section>
```



## 选择器优先级

很多人都引用了这个🐟图却没有详细解释。

### 选择器优先级的计算

#### 计算公式

- 通配选择器（*）：优先级极低，+0分
- 类型选择器（div、span等）：+1分

- 类选择器（class="xxx"）/属性选择器/伪类选择器：+10分
- ID选择器（id="xxx"）：优先级为 +100分

- 内联样式（style="xxx"）：优先级为 +1000分
- 使用!important：优先级为 +10000分

#### 优先级计算过程

- **计算一个选择器的总分，总分越大优先级越高；**
- **总分相同的两个选择器，靠后的选择器优先级更高；**

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582511497246-3696ba58-fe47-4a7d-8961-1496a66054f4-20211121004810206.png)

### 一个挺有意思的问题

```html
<a href="https://www.google.com">Google</a>
a:link {
	color: blue;
}

a:visited {
  color: red;
}

a:hover {
  color: orange;
}

a:active {
  color: green;
}
```

#### 样式实际效果说明

- 当没按下之前，链接字体颜色为蓝色；
- 当鼠标移到链接上时，链接字体颜色为橙色；

- 当按下鼠标（到未松开之前），链接字体颜色为绿色；

其实是因为`:hover`，`:link`，`:active`同时生效，但是:active更靠后，所以表现得是`:active`生效了。

- 点击了链接后，链接字体颜色为红色；

#### 查了查MDN

- 事实上，关于这个问题，MDN也给出了建议：

*为了可以正确地渲染链接元素的样式，*`*:link*`*伪类选择器应当放在其他伪类选择器的前面，并且遵循LVHA的先后顺序，即：*`*:link*` *—* `*:visited*` *—* `*:hover*` *—* `*:active*`*。*



更多关于选择器的内容，大家可以阅读张鑫旭的[《CSS选择器世界》](https://book.douban.com/subject/34846688/)