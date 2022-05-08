---
title: 元素
---

# 元素

## 1. 列出常见的标签，并简单介绍这些标签用在什么场景？  {#common-elements}

- 如果是标题，就用 `<h1> ~ <h6>` ；
- 如果是一段话，就用 `<p>` ；
- 如果不知道它是什么，如果这个东西能占一行，就用 `<div>` ；
- 如果没有一行，就一个小小的位置，就用 `<span>` ；
- 如果是可点击的就用一个 `<a>` 链接；
- 如果像那种并列一排排的，甚至还有一点一点，就用“列表”；
- 如果看到一个表格，就用` <table>` ；
- 如果看到了一个输入框，就用 `<input>` 。

***

## 2. `<img>` 的 `title` 和 `alt` 有什么区别？{#differ-between-title-alt-in-img}
- `title` 通常当鼠标滑动到元素上的时候显示；
- `alt` 是 `<img>` 的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。

***

## 3. 如何在 HTML 页面上展示 `<div></div>` 这几个字符？ {#use-entity}

```html
&lt;div&gt;&lt;/div&gt;
```

***

## 4. 行内元素和块级元素的区别？  {#inline-element-vs-block-element}

1. 格式上，默认情况下， `行内元素` 不会以新行开始，而 `块级元素` 会新起一行。
2. 内容上，默认情况下， `行内元素` 只能包含文本和其他行内元素。而 `块级元素` 可以包含行内元素和其他块级元素。
3. 行内元素与块级元素属性的不同，主要是盒模型属性上：`行内元素` 设置 width 无效，height 无效（可以设置 line-hei
   ght），设置 margin 和 padding 的上下不会对其他元素产生影响。

***

## 5. 列举常见的行内元素和块级元素？  {#inline-element-and-block-element-examples}

- 行内元素：a b span img strong sub sup button input label select textarea
- 块级元素：div ul ol li dl dt dd h1~h6 p

***

## 6. 什么是 `空元素`？  {#blank-element}

标签内没有内容的 HTML 标签被称为空元素。空元素是在开始标签中关闭的。

常见的空元素有：br hr img input link meta

***

## 7. `<link>` 标签定义的作用？  {#link-element}

link 标签定义文档与外部资源的关系。

link 元素是空元素，它仅包含属性。 此元素只能存在于 head 部分，不过它可出现任何次数。

link 标签中的 rel 属性定义了当前文档与被链接文档之间的关系。常见的 stylesheet 指的是定义一个外部加载的样式表。 

***

## 8. 页面导入样式时，使用 `link` 和 `@import` 有什么区别？  {#link-vs-import}

1. **从属关系**区别。 @import 是 CSS 提供的语法规则，只有导入样式表的作用；link 是 HTML 提供的标签，不仅可以加
载 CSS 文件，还可以定义 RSS、rel 连接属性、引入网站图标等。
2. **加载顺序**区别。加载页面时，link 标签引入的 CSS 被同时加载；@import 引入的 CSS 将在页面加载完毕后被加载。
3. **兼容性**区别。@import 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link 标签作为 HTML 元素，不存在兼容
性问题。
4. **DOM 可控性**区别。可以通过 JS 操作 DOM ，插入 link 标签来改变样式；由于 DOM 方法是基于文档的，无法使用 @i
mport 的方式插入样式。
