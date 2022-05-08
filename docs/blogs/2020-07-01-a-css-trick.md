---
index: -20200701
title: 5行CSS实现<span>内文字单行水平居中多行靠左
description: 巧妙借助 inline-block 的特性，使 <span> 在文字单行时表现出 inline 的特征，而在多行时表现出 block 的特征
icon: css
date: 2020-07-01
category:
  - 技术博客
tag:
  - CSS
---

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587022003942-8e89f44a-1218-40be-aac7-5506d2fb6570.gif)

## 相关代码（含注释）

### HTML 部分

- 外层是一个**`<div>`标签**，内层是一个**`<span>`标签**。
- `<div>`标签给一个**wordsContainer**类，`<span>`给一个**words**类。
- 我们使用**多个BMW**来测试。

```html
<body>
	<div class="wordsContainer">
    <span class="words">BMW BMW BMW</span>
  </div>
</body>
```

### CSS 部分

- 我们给**`<div>`标签**和**`<span>`标签**分别加上样式，**核心代码只有四行**，其它的都是为了方便调试。

```css
.wordsContainer {
  
  /* 核心代码 START */
  /* 设置<div>内部内容居中 */
  text-align: center;
  /* 核心代码 END */
  
  border: 1px solid green;
  height: 100px;
  overflow: auto;
}

.words {
  
  /* 核心代码 START */
  /* 1.将span设置为inline-block */
  display: inline-block;
  /* 2.设置换行 */
  word-wrap: break-word;
  /* 3.设置span内部文字靠左 */
  text-align: left;
  /* 4.设置<span>元素的最大宽度，我这里给的是<div>宽度的90% */
  max-width: 90%;
  /* 核心代码 END */
  
  margin: 10px auto 10px auto;
  border: 1px solid red;
}
```

### 效果展示

| **单行文本**                                                 | **多行文本**                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587018970199-3ba490dd-dc2a-4a37-b2f3-ae7b3171f997.png) | ![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587018981324-d43398d2-4223-4843-a647-e550aeba85c5.png) |



#### 简单解释一下

- 灵感来自于[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align)上的这句话：

The `text-align` CSS property sets the horizontal alignment of a block element or table-cell box. 

`text-align` CSS属性定义行内内容（例如文字）如何相对于他的块父元素对齐。



- 所以我们给**外层的`<div>`元素**设置的`text-align: center`实际上的意思是：**使得`<div>`内部的`<span>`相对于div居中**。
- 而给**内层的`<div>`元素**设置的`text-align: left`实际上的意思是：**使得`<span>`内部的文字相对于span靠左**。



- 我们再看一下MDN上对于inline-block的阐释，可能有助于理解后面的解释。

[inline-block](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display-legacy)

The element generates a block element box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would).

元素会产生一个块元素盒子，并且像内联盒子一样（表现得更像一个被替换的元素），可以融入到周围内容中。



- 当**只有一行文字时**，给`<span>`加个红色边框后可以看到，`<span>`**表现出了inline的特征**，虽然在`<span>`内部文字靠左，但**由于文字被`<span>`包裹了，而`<span>`相对于`<div>`又是居中的，所以`<span>`中的文字相对于`<div>`也是居中的**（如图）。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587020245241-f1fa00f3-880f-4071-96d9-370ecde45e4c.png)



- 当**有多行文字时**，`<span>`则**表现出了block的特征**，通过设置`word-wrap: break-word;`使得文字可以自动换行，此时`<span>`内部设置的`text-align: left`（文字靠左）便表现得更加明显。**文字相对于`<span>`靠左，相对于`<div>`也是靠左显示**（如图）**。**

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587020349564-cd3fad17-3135-4ceb-9828-fa79d3659211.png)



![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1587022186619-507e3677-ef85-4f90-a78e-96144cffa0db.gif)