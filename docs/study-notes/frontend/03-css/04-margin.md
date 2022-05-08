---
index: 4
title: margin 的概念与应用
description: 介绍一些 margin 在实际使用时的小技巧
icon: css
date: 2020-04-15
category:
  - 学习笔记
tag:
  - CSS
---


## margin的相关属性

`margin`用于设置四个外边距，其后面的参数可以是1-4个

```css
div {
  /* 上右下左，缺省对称 */
  margin: 1px;								/* 左 = 右 = 下 = 上 = 1px */
  margin: 1px 2px;						/* 下 = 上 = 1px , 左 = 右 = 2px */
  margin: 1px 2px 4px;				/* 上 = 1px , 左 = 右 = 2px , 下 = 4px */
  margin: 1px 2px 4px 8px;		/* 上 = 1px , 右 = 2px , 下 = 4px , 左 = 8px */
}
```



## margin常见问题

### 老版本IE双边距问题

- **产生条件**

block元素 + 浮动 + `margin`

- **如何解决**

通过给浮动元素加上`display: inline`来解决。



### margin重叠（合并）问题

在CSS当中，相邻的两个盒子（可能是兄弟关系也可能是祖先关系）的外边距可以结合成一个单独的外边距。这种合并外边距的方式被称为重叠（合并），并且因而所结合成的外边距称为重叠外边距。



- **产生条件**

margin必须是邻接的，即：

- 同一层相邻元素之间（兄弟间）
- 没有内容将父元素和子元素分开时（父子间）
- 空的块级元素的上下边界（迷失自我）

设定为 `float` 或 `position: absolute` 的元素不会发生margin重叠



- **如何阻止合并**

- 兄弟合并是符合预期的，如果不需要可以用 `display: inline-block` 消除
- 父子合并尽量阻止，可以用添加 `padding`/`border`、`overflow: hidden`、`display:flex` 阻止



## margin负值的应用

### 绝对定位元素的居中

```css
.element {
  width: 600px; 
  height: 400px;
  position: absolute; 
  /* 水平居中 */
  left: 50%; 
  margin-left: -300px;    /* 宽度的一半 */
  /* 垂直居中 */
  top: 50%;
  margin-top: -200px;    /* 高度的一半 */
}
```

### 去除等距列表右侧margin

```css
.list{
    /* 无关代码 */
    margin-right: -10px;
		/* 无关代码 */
}
.list li{
    /* 无关代码 */
    margin-right: 10px;
  	/* 无关代码 */
}
```





margin还有很多特性并未整理到这篇博客中，可以参见以下**这些文章**：

- [外边距重叠 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- [css margin的相关属性，问题及应用 - 张鑫旭](https://www.zhangxinxu.com/wordpress/2009/08/css-margin的相关属性，问题及应用/)
- [CSS margin合并问题 - 前端下午茶](https://segmentfault.com/a/1190000013735912)
- [小tip: margin:auto实现绝对定位元素的水平垂直居中 - 张鑫旭](https://www.zhangxinxu.com/wordpress/2013/11/margin-auto-absolute-绝对定位-水平垂直居中/)
- [margin为负值产生的影响和常见布局应用 - 琦乐无穷](https://www.jianshu.com/p/549aaa5fabaa)
- [浅谈margin负值 - 一只萌媛的自我修炼](https://zhuanlan.zhihu.com/p/25892372)
- [我知道你不知道的负margin - 海玉的博客](http://www.hicss.net/i-know-you-do-not-know-the-negative-margin/)