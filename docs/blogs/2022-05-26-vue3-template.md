# vue3 + vite2 + ts 脚手架搭建

## 0. 写在前面

首先还是要配好本地环境，主要是 `node` 和 `yarn` 等，我还是比较推荐用 `nvm` 管理不同版本的 `node`，不过因人而异，但是 vite 需要 node 版本 >= 12。

## 1. 初始化 vite 项目

```bash
npm create vite@latest my-vue-app -- --template vue-ts
```

初始化之后就可以进入项目目录，启动本地服务器了。

```bash
cd my-vue-app
yarn install
yarn dev
```

项目默认运行在3000端口，可以明显感受到构建速度比 webpack 要快上不少。

## 2. 配置

### 2.1 扩展 vite 配置

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
​
const pathResolve = (dir: string) => resolve(__dirname, dir)
​
// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 设置公共基础路径
  plugins: [vue()],
  build: {
    outDir: 'dist',     // 指定打包路径，默认为项目根目录下的 dist 目录
    terserOptions: {
      compress: {
        keep_infinity: true,  // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true // 生产环境去除 debugger
      },
    },
    chunkSizeWarningLimit: 1500 // chunk 大小警告的限制（以 kbs 为单位）
  },
  resolve: {
    // 设置路径别名
    alias: {
      '@': pathResolve('./src'), // 设置 `@` 指向 `src` 目录
      views: pathResolve('./src/views'),
      components: pathResolve('./src/components'),
      assets: pathResolve('./src/assets'),
    },
  },
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
​
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^/api/, '')
      }
    }
  }
})
```

### 2.2 配置 TypeScript

