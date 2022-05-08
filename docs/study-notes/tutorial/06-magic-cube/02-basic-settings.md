---
title: 一些基本设置
---

## 安装 styled-components

```shell
yarn add styled-components
yarn add --dev @types/styled-components
```

## 添加全局样式表

将 `styles/global.css` 重命名为 `global.scss` 文件，并用以下内容覆盖：

```scss
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body {
  background-color: #F1F4F6;
}

a {
  color: inherit;
  text-decoration: none;
}
```

同时，记得修改 `pages/_app.tsx` 内的 `import` 语句

```ts
import '../styles/globals.scss'
```

