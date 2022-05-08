---
index: -20200706
title: 避免 CSS 样式冲突的办法
description: 本文介绍一些避免 CSS 样式冲突的办法
icon: css
date: 2020-07-06
category:
  - 技术博客
tag:
  - CSS
---


## 细化选择符

通过使用组合器（Combinator）将选择器的描述写得更加精确（参考[CSS选择器 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)），例如对于下述代码片段，如果想给`.cellphones`中的`.apple`增加样式，只使用`.apple`，势必会对`.fruit`中的`.apple`也造成影响。

```html
<div class="cellphones">
  <div class="apple"></div>
</div>
<div class="fruit">
  <div class="apple"></div>
</div>
```

可以使用后代组合器（Descendant Combinator）或子代组合器（Child Combinator）这种更为精确的描述。描述得越精确，优先级越高，优先级更高的描述会覆盖优先级较低的描述。

```css
/* 后代组合器：所有后代节点 */
.cellphones .apple {
	border: 1px solid black;
}

/* 更加精确的后代组合器 */
body .cellphones .apple {
  border: 1px solid blue;
}

/* 子代组合器：直接子节点 */
.cellphones > .apple {
  border: 1px solid red;
}
```

如果给`.apple`按顺序加上上述全部样式，最终，边框将呈现蓝色。

详细的优先级规则参见[CSS 优先级](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)

## 再写一次选择器名

本质上是上一种情况的特例。例如对于`.apple`，添加如下样式：

```css
.cellphones > .apple.apple {
  border: 1px solid purple;
}
.cellphones > .apple {
  border: 1px solid red;
}
```

最终，边框将呈现紫色。

## 改变CSS样式表中的顺序

对于相同类型选择器指定的样式，在CSS文件中的顺序靠后的样式会覆盖之前的样式。

例如对于下述代码中的`div`元素，浏览器渲染的结果会是红色的：

```html
<div class="redBorder" class="blackBorder"></div>
```

```css
.blackBorder {
  border: 1px solid black;
}
.redBorder {
  border: 1px solid red;
}
```

需要注意的是，尽管在HTML文件中`.blackBorder`出现在`.redBorder`后，但优先级的判断是根据他们在CSS文件中的顺序。也就是说，CSS文件中更为靠后的`.redBorder`才会被采用。

## 主动提升优先级（不建议）

还有一种简单粗暴但是并不建议的办法，就是在需要使用的样式后加上关键字`!important`可以将样式优先级提到极高。例如：

```html
<div class="redBorder" class="greenBorder"></div>
```

```css
.greenBorder {
  border: 1px solid green !important;
}
.redBorder {
  border: 1px solid red;
}
```

对于上述代码，边框将显示为绿色。

使用 `!important` 是一个非常不好的习惯，会破坏样式表中固有的级联规则，使得调试变得非常困难！



:::note 参考资料
- [优先级 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)
- [css样式冲突怎么解决 - 魔法时光机](http://www.517php.com/html/1.html)
:::