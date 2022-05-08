---
index: -20200711
title: VS Code 自定义 Emmet 代码片段
description: 使用 VS Code 写 HTML 时，每次 !+Tab 之后还要修改 lang 和 viewport ，十分麻烦。通过自定义 Emmet 的 Snippets，可以一劳永逸，舒服啊！
icon: vscode
date: 2020-07-11
category:
  - 技术博客
tag:
  - VS Code
---

> 使用VS Code写HTML时，每次 `!+Tab` 之后还要修改 lang 和 viewport ，十分麻烦。通过自定义 Emmet 的 Snippets，可以一劳永逸，舒服啊！

<!--truncate-->

### 找到expand-full.js文件

- 在应用程序（Application）中找到Visual Studio Code，右键点击，选择“显示包内容”；
- 在以下路径中找到expand-full.js文件；

```
/Contents/Resources/app/extensions/emmet/node_modules/vscode-emmet-helper/out/expand/expand-full.js
```

### 修改expand-full.js文件

#### 修改lang为zh-CN

- 找到defaultVariables，将lang修改为`zh-CN`；

```javascript
const defaultVariables = {
		lang: 'zh-CN',
		locale: 'en-US',
		charset: 'UTF-8'
};
```

#### 修改viewport

- 找到`meta:vp`，进行修改；

```javascript
"meta:vp": "meta[name=viewport content='width=${1:device-width}, initial-scale=${2:1.0}, minimum-scale=${3:1.0}, maximum-scale=${4:1.0}, user-scalable=${5:no}']",
```

### 实现效果

最后实现的效果如下：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1582167954494-c2b455b4-40c2-4f0a-a55d-a7370d1e563c.gif)



即：

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Document</title>
</head>

<body>

</body>

</html>
```

以此类推，触类旁通，也可以自定义其他Emmet代码片段。