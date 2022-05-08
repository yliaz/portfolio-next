---
index: 2
title: HTML 元素基础
description: HTML 元素基础
icon: html
date: 2020-04-12
category:
  - 学习笔记
tag:
  - HTML
---

:::tip 对应面试题

1. [如何在 HTML 页面上展示 `<div></div>` 这几个字符？](/docs/interview/frontend/html/element#use-entity)
2. [行内元素和块级元素的区别？](/docs/interview/frontend/html/element#inline-element-vs-block-element)
3. [列举常见的行内元素和块级元素？](/docs/interview/frontend/html/element#inline-element-and-block-element-examples)
4. [什么是空元素？](/docs/interview/frontend/html/element#blank-element)
5. [HTML 的注释怎样写？](/docs/interview/frontend/html/other#html-element)

:::

## 元素

`元素` = `开始标签`（ + `内容` + `结束标签`）

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/element.png)

:::info 提示

1. 元素可以嵌套
2. 元素分为块级元素和行内元素，他们的[区别](/docs/interview/frontend/html/element#inline-element-vs-block-element)
3. 一些元素只有一个标签，称为空元素
4. 内容中连续的空白字符在渲染时会被合并为一个

:::

## 属性

`属性` = `属性名`（ + `属性值`）

:::info 注意

1. 布尔属性可以不写属性值，例如：`<input type="text" disabled="disabled">`
2. 属性值用单引号/双引号均可，但不能混用

:::

## 实体引用

如果需要插入一些特殊字符 `<`、`>` 等，则需要使用实体引用。

具体可以见表：[XML和HTML字符实体引用列表](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)

## 注释

注释 = `<!--` + `注释内容` + `-->`

```html
<p>我在注释外！</p>

<!-- <p>我在注释内！</p> -->
```

