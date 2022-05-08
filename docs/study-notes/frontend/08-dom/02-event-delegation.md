---
index: 1
title: 事件委托
description: 事件委托
icon: site-structure
date: 2020-07-21
category:
  - 学习笔记
tag:
  - DOM
---


## 定义

- 通俗地讲，事件委托就是**把一个元素的事件响应处理程序委托给另一个元素**。



## 举个例子 🌰

### HTML代码

```html
<ul id="myLink">
    <li id="1">aaa</li>
    <li id="2">bbb</li>
    <li id="3">ccc</li>
</ul>
```

- 这里有一个无序列表，我们想给其中的每个`<li>`标签都加上一个点击事件。
- 在不知道事件委托的情况下，最笨的方法就是用一个循环给每个`<li>`标签都加上一个点击事件处理程序。

### 不使用事件委托

```javascript
// 不使用事件委托
// 先找到所有<li>标签
let myLink = document.getElementById('myLink');
let li = myLink.getElementsByTagName('li');
// 使用for循环给每个<li>标签都加上一个点击事件处理程序
for(let i = 0; i < li.length; i++) {
    li[i].onclick = (e) => {
        let e = event || window.event;
        let target = e.target || e.srcElement;
        alert(e.target.id + ':' + e.target.innerText);  
    };
}
```

- 这样做存在很多**问题：**

- - 非常消耗内存；
  - 当有动态添加的元素时，需要重新给元素绑定事件；

### 使用事件委托

- 当我们可以通过**使用事件委托**将事件委托给它的父级元素。

```javascript
let myLink = document.getElementById('myLink');
// 给父级元素添加一个点击事件处理程序
myLink.onclick = (e) => {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    // 使用target和nodeName来找到<li>标签，并设定点击事件仅对<li>生效
    if(e.target.nodeName.toLowerCase() == 'li') {
        alert(e.target.id + ':' + e.target.innerText);
    }
};
```



## 优点

- 不需要给每一个元素都分配一个处理程序，减少内存空间占用；
- HTML结构非常灵活，方便动态元素的处理；



## 缺点

- 层级太多的话，事件冒泡可能会被某一层阻止。