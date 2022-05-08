---
title: HTML5
---

# HTML5

## 1. HTML5 有哪些新特性、移除了那些元素？

HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

新增的有：

- 绘画 `canvas`;
- 用于媒介回放的 `video` 和 `audio` 元素;
- 本地离线存储 `localStorage` 长期存储数据，浏览器关闭后数据不丢失;
- `sessionStorage` 的数据在浏览器关闭后自动删除;
- 语意化更好的内容元素，比如 `article`、`footer`、`header`、`nav`、`section`;
- 表单控件，`calendar`、`date`、`time`、`email`、`url`、`search`;
- 新的技术 `webworker`, `websocket`;
- 新的文档属性 `document.visibilityState`

移除的元素有：

- 纯表现的元素：`basefont`，`big`，`center`，`font`, `s`，`strike`，`tt`，`u`;
- 对可用性产生负面影响的元素：`frame`，`frameset`，`noframes`；

***

## 2. 如何处理 HTML5 新标签的浏览器兼容问题？

1. IE8/IE7/IE6 支持通过 `document.createElement` 方法产生的标签，可以利用这一特性让这些浏览器
支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式。

2. 当然也可以直接使用成熟的框架，比如 `html5shiv` ;
```html
`<!--[if lt IE 9]>
      <script> src="https://cdn.jsdelivr.net/npm/html5shiv/dist/html5shiv.min.js"</script>
      <![endif]-->`
```
[if lte IE 9]……[endif] 判断 IE 的版本，限定只有 IE9 以下浏览器版本需要执行的语句。
