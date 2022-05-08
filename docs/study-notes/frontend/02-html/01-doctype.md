---
index: 1
title: 关于 Doctype
description: 关于 Doctype
icon: html
date: 2020-04-11
category:
  - 学习笔记
tag:
  - HTML
---

:::tip 对应面试题

1. [DOCTYPE 有什么作用，怎么写？](/interview/frontend/02-html/01-doctype.html#_1-doctype-有什么作用-怎么写)
2. [HTML 5 为什么只写 `<!DOCTYPE html>`](/interview/frontend/02-html/01-doctype.html#_2-html5-为什么只写-doctype-html)
3. [DOCTYPE 作用？严格模式与混杂模式如何区分？它们有何意义？](/interview/frontend/02-html/01-doctype.html#_3-doctype-作用-严格模式与混杂模式如何区分-它们有何意义)
4. [什么是 DTD？](/interview/frontend/02-html/01-doctype.html#_4-什么是-dtd)

:::

## DOCTYPE 是什么，有什么作用？

DOCTYPE 声明一般位于文档的第一行，它的作用主要有两个：

- 规范浏览器的行为，告知浏览器需要使用标准模式来解析文档，否则浏览器将以怪异模式（quirks mode）进行解析。
- 可以加入对特定 DTD 的引用（针对 `HTML(≤4)` ，基于 `SGML`），由于 `HTML5` 并不基于 `SGML`，所以没有 DTD 一说，因此 DOCTYPE 声明简化为：

```html
<!DOCTYPE html>
```

## DOCTYPE 有几种？

- `HTML5` 的 `DOCTYPE` 只有一种：

```html
<!DOCTYPE html>
```

- `HTML4.01` 的 `DOCTYPE` 有三种：`Strict`，`Transitional` 和 `Frameset`；

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

## SGML、HTML、XML、XHTML、HTML5 的关系？

![image-20211120212806870](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20211120212806870.png)

`SGML` 标准通用标记语言（Standard Generalized Markup Language)是可以定义标记语言的元语言。`SGML` 就定义了一种语言的语法，比如说 `XML` 的注释如何定义等等，这个定义语法的文档就是 DTD。

而 `XML` 和 `HTML`（指HTML4.0）就是被 `SGML` 定义的两种语言，大的区别就是 `XML` 是定义数据用的，`HTML` 是定义外观的。另外，因为历史原因，`HTML` 的语法比较松散，`XML` 的语法比较严格，比如说属性名的大小写敏感等。正因此，W3C决定规范一下 `HTML` 的语法，就创造出了 `XHTML`：使用 `XML` 的严格的语法进行 `HTML` 的外观定义。即：`XML`+`HTML`→`XHTML`。

XHTML因为过于严格的语法所以发展不如意（一些W3C的人跑到了WHATWG），到现如今，W3C 在制定 `HTML5` 标准时，希望摆脱 SGML 的一些无用的功能和声明，并延续 HTML4 的风格，而非严格的 XHTML 的风格。
