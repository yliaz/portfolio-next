---
index: 5
title: HTML 作弊表
description: HTML 作弊表
icon: html
date: 2020-04-15
category:
  - 学习笔记
tag:
  - HTML
---

:::tip 对应面试题

- [1. 列出常见的标签，并简单介绍这些标签用在什么场景？](../../interview/frontend/html/element#common-elements)
- [2. `data-` 属性的作用？](../../interview/frontend/html/attribute#data-attribute)
- [3. HTML 全局属性（Global Attributes）有哪些？](../../interview/frontend/html/attribute#global-attributes)
- [4. 你是如何理解 HTML 语义化的？](../../interview/frontend/html/other#html-semantic)

:::

**学习 HTML 最好的方式就是边学边做实验**

## HTML 初窥

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

### 指定文档类型为HTML5

```html
<!DOCTYPE html>
```

### 为文档设定主语言

```html
<html lang="zh-CN">
```

> [网页头部的声明应该是用 lang="zh" 还是 lang="zh-cn"？](https://www.zhihu.com/question/20797118)

### 几个元素

- **`<html>` 元素是 HTML 页面的根元素**
- **`<head>` 元素包含了文档的元（meta）数据**

- **`<body>` 元素包含了可见的页面内容**

## HTML 头部

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
```

>  部分资料来自：[head标签里有什么](https://developer.mozilla.org/zh-CN/docs/learn/HTML/Introduction_to_HTML/The_head_metada)

### `<title>`  元素

```html
<title>网页标题</title>
```

- 网页标题
- 添加书签时作为书签名

- 搜索引擎的搜索结果

### `<meta>`  元素

`<meta>` 元素用于描述元数据

>  关于 meta 元素的更多内容，可以查看：[HTML常用meta标签总结](https://www.yuque.com/gangafengliu/frontend-rookie/html-meta)

### 为站点增加自定义图标

```html
<link rel="shortcut icon" href="img/favicon.jpg" type="image/x-icon">
```

### 在HTML中使用CSS和JavaScript

```html
<link rel="stylesheet" href="my-css-file.css">
```

- `rel="stylesheet"`：这是文档的样式表
- `href="my-css-file.css"`：样式表文件的路径

```html
<script src="my-js-file.js"></script>
```

- `<script>`应放在尾部，确保在加载脚本之前浏览器已经解析了HTML内容

## HTML 章节标签

### 标题 ` <h1>` ~` <h6>`

- 定义标题

```html
<h1>这是标题 1</h1>
<h2>这是标题 2</h2>
<h3>这是标题 3</h3>
<h4>这是标题 4</h4>
<h5>这是标题 5</h5>
<h6>这是标题 6</h6>
```

### 区域  `<section>`

- 定义一块区域（章节、头部、底部等）

```html
<section>
<h1>WWF</h1>
<p>The World Wide Fund for Nature (WWF) is....</p>
</section>
```



### 文章  `<article>`

- 定义独立的内容（论坛帖子、博客文章、新闻故事、评论）

```html
<article>
  <h1>Internet Explorer 9</h1>
  <p> Windows Internet Explorer 9(缩写为 IE9 )在2011年3月14日21:00 发布。</p>
</article>
```

### 段落 `<p>`

- 定义段落

```html
<p>这是一个段落。</p>
```

### 页眉 `<header>`

- 定义文档或文档一部分区域的页眉

```html
<header>
	<h1>Internet Explorer 9</h1>
  <p><time pubdate datetime="2011-03-15"></time></p>
</header>
```

### 页脚  `<footer>`

- 定义文档或文档一部分区域的页脚

```html
<footer>
  <p>&copy;</p>
  <p>Posted by: Hege Refsnes</p>
  <p><time pubdate datetime="2012-03-01"></time></p>
</footer>
```

### 主要内容 `<main>`

- 指定文档的主体内容（是唯一的）

```html
<main>
  <p>这是主体内容</p>
</main>
```

### 旁支内容 `<aside>`

- 定义 `<article>` 标签外的内容

```html
<aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>
```

### 通用划分 `<div>`

- 用于组合块级元素，以便通过 CSS 来对这些元素进行格式化

```html
<div style="color:#0000FF">
  <h3>这是一个在 div 元素中的标题。</h3>
  <p>这是一个在 div 元素中的文本。</p>
</div>
```

---

## HTML 内容标签

### 图片

```html
<img 
  src="images/dinosaur.jpg"
  alt="一只恐龙"
  width="400"
  height="340"
>
```

详见[`<img>` 标签](./html-img)

### 有序列表 `<ol>` + `<li>`

```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

### 无序列表 `<ul>` + `<li>`

```html
<ul>
  <li>咖啡</li>
  <li>茶</li>
  <li>牛奶</li>
</ul>
```

### 描述列表 `<dl>` + `<dt>` + `<dd>`

```html
<dl>
  <dt>Coffee</dt>
    <dd>Black hot drink</dd>
  <dt>Milk</dt>
    <dd>White cold drink</dd>
</dl>
```

### 预格式化文本 `<pre>`

保留空格和换行符，字体等宽

```html
<pre>
此例演示如何使用 pre 标签
对空行
和     空格
进行控制
</pre>
```

### 水平线 `<hr>`

```html
<hr>
```

### 换行 `<br>`

```html
<br>
```

### 超链接 `<a>`

`href` 属性：超链接指向的网址

`title` 属性：鼠标悬浮后显示，补充信息

```html
<a 
   href="http://www.google.com"
   title="全球最大的搜索引擎"
>
  访问谷歌
</a>
```

不仅文字可以作为超链接的内容，图像等其他元素也可以

```html
<a href="http://www.google.com">
  <img src="google-logo.png" alt="这个图像指向了google首页">
</a>
```

也可以通过在页面中添加锚点，使得超链接跳转到页面某个特定的地方。

```html
<!-- 锚点 -->
<h2 id="Mailing_address">邮寄地址</h2>

<!-- 超链接指向锚点 -->
<p>要提供意见和建议，请将信件邮寄至 <a href="#Mailing_address">我们的地址</a>。</p>
```

### 强调文本 `<em>`

偏重语气的强调

```html
<em>强调文本</em>
```

### 重要文本 `<strong>`

加粗

```html
<strong>加粗文本</strong>
```

### 代码 `<code>`

```html
<code>一段代码</code>
```

### 短（行内）引用 `<q>`

```html
<p>孔子云：<q>知知而知之，不治而不知，是知也。</q></p>
```

### 块引用 `<blockquote>`

```html
<p>孔子云：
<blockquote site="www.baidu.com">
  
<pre>
    知知而知之，不治而不知，是知也。
    有朋自远方来，不亦乐乎！
  </pre>
</blockquote>
</p>
```

### 缩略语 `<abbr>`

鼠标悬浮时展示 title 中的内容

```html
<p>我们使用 <abbr title="超文本标记语言（Hyper text Markup Language）">HTML</abbr> 来组织网页文档。</p>
```

---

## HTML 全局属性

所有标签都具有的属性

| 属性            | 描述                   |
| --------------- | ---------------------- |
| class           | 元素的类名             |
| contenteditable | 是否可以编辑元素的内容 |
| hidden          | 对元素进行隐藏         |
| id              | 元素唯一的id           |
| style           | 元素的行内样式         |
| tabindex        | Tab键控制次序          |
| title           | 元素的额外信息         |

---

## HTML 默认样式

- **不同浏览器拥有各自的默认样式**

> [浏览器默认值汇总](https://segmentfault.com/a/1190000011611140)

- **在Chrome中查看默认样式**
  Chrome开发者工具 --> Elements -->Styles --> user agent stylesheet
- **CSS reset**

> [CSS Reset（CSS重置） - 徐任达](https://www.yuque.com/xiuran/front-end/gug0go)

