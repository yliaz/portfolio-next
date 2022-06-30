---
index: -20220620
title: vue3 + vite2 + ts 脚手架搭建
description: 脚手架搭建记录
icon: vue
date: 2022-06-20
category:
  - 技术博客
tag:
  - Vue
  - vite
  - TypeScript
---

## 0. 写在前面

首先还是要配好本地环境，主要是 `node` 和 `yarn` 等，我还是比较推荐用 `nvm` 管理不同版本的 `node`，不过因人而异，但是 vite 需要 node 版本 >= 12。

## 1. 初始化 vite 项目

:::: code-group

::: code-group-item Yarn

```bash
yarn create vite my-vue-app -- --template vue-ts
```

:::

::: code-group-item npm

```bash
npm create vite@latest my-vue-app -- --template vue-ts
```

:::

::::

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

在根目录下新建 `tsconfig.json` 文件，在其中添加关于 TypeScript 的配置

```json
{
  "compilerOptions": {
    "baseUrl": "./", // 告诉编译器到哪里去找模块
    "target": "esnext", 
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true, // 将每个文件作为单独的模块
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "types": ["vite/client"], // 添加要包含的类型声明文件名列表，只有在这里列出的模块的声明文件才会被加载进来
    "skipLibCheck": true, // 忽略所有声明文件（*.d.ts）的类型检查
    "paths": {  // 模块名到基于 baseUrl 的路径映射的列表
      "@/*": ["src/*"],
      "views/*": ["src/views/*"],
      "components/*": ["src/components/*"],
      "assets/*": ["src/assets/*"],
      "stores/*": ["src/stores/*"]
    }
     
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"], // 指定需要编译的文件范围
  "exclude": ["node_modules","dist"], // 将第三方依赖包，打包后的静态文件都排出在外
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 2.3 配置 ESlint

#### 2.3.1 安装 ESlint

:::: code-group

::: code-group-item Yarn

```bash
yarn add --dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-vue
```

:::

::: code-group-item npm

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-vue
```

:::

::::

#### 2.3.2 排除不需要 ESlint 校验的文件

1. 新建 `.eslintignore` 文件

2. 填入内容

```
/build/
/dist/
/node_modules/
*.js
```

#### 2.3.3 配置 ESlint 相关规则

1. 新建 `.eslintrc.js` 文件

2. 配置内容

我的配置：

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true, // 添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12
    node: true,
  },
  extends: [  // 使用预设的 lint 包（基础规则）
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: "vue-eslint-parser", // 指定要使用的解析器。我们指定为 vue-eslint-parser 即可
  parserOptions: {  // 给解析器传入一些其他的配置参数
    parser: '@typescript-eslint/parser',  // 使用的解析器
    ecmaVersion: "latest", // 支持的es版本
    sourceType: 'module' // 代模块类型，默认为script，我们设置为module
  },
  plugins: [
    '@typescript-eslint'  // 插件：增强 ESlint 功能
  ],
  /**
   * 可以在 rules 中添加自定义的规则
   * off 或 0：关闭规则
   * warn 或 1：开启规则，使用警告，不合规则的程序可以运行
   * error 或 2：开启规则，使用错误，不合规则的程序无法运行
   */
  rules: {  // 增加一些自定义规则
    // 三等号
    "eqeqeq": ['warn', 'always'],

    // 禁止出现未使用过的变量
    'no-unused-vars': 'warn',

    // 强制在关键字前后使用一致的空格
    'keyword-spacing': [
      'warn',
      {
          'overrides': {
              'if': {
                  'after': true
              },
              'for': {
                  'after': true
              },
              'while': {
                  'after': true
              },
              'else': {
                  'after': true
              }
          }
      }
    ],

    // 数组的括号内的前后禁止有空格
    'array-bracket-spacing': ['warn', 'never'],

    // 只有一个参数时，箭头函数体可以省略圆括号
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': 'off',

    // 禁止空语句（可在空语句写注释避免），允许空的 catch 语句
    // https://eslint.org/docs/rules/no-empty
    'no-empty': ['warn', {'allowEmptyCatch': true}],

    // 如果一个变量不会被重新赋值，必须使用 `const` 进行声明。
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 'warn',

    // vue html 属性小写，连字符
    'vue/attribute-hyphenation': ['warn', 'always'],

    // 禁止 components 中声明的组件在 template 中没有使用
    'vue/no-unused-components': 'warn',

    // 禁止在v-for或作用域内使用未使用过的变量
    'vue/no-unused-vars': 'warn',

    // html tag 是否自闭和
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md
    "vue/html-self-closing": ['warn', {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],

    "vue/multi-word-component-names": "off",

    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
```

## 3. 接入工具库

根据项目需要，主要包含以下几个：
- UI组件库：选择了 [Naive UI](https://www.naiveui.com/zh-CN/os-theme)
- Router：[vue-Router](https://router.vuejs.org/zh/)
- 状态管理：[Pinia](https://pinia.web3doc.top/)
- 图表：[EChart](https://echarts.apache.org/zh/index.html)
- 网络请求：[axios](http://axios-js.com/zh-cn/docs/index.html)

### 3.1 Naive UI

#### 3.1.1 安装

```bash
yarn add naive-ui
```

#### 3.1.2 按需引入

1. 在我们的 `src/utils` 新建一个 `demand-import.ts`

```ts
import {
    // create naive ui
    create,
    // component
    NButton
} from 'naive-ui'
​
export const naive = create({
    components: [NButton]
})
```

2. 然后在 `main.ts` 中引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { naive } from './utils/demand-import'
​
const app = createApp(App as any)
app.use(naive)
```

3. 然后就可以在页面上使用了

```vue
<template>
    <n-button type="tertiary">
        Tertiary
    </n-button>
</template>
```

### 3.2 vue-router

#### 3.2.1 安装

```bash
yarn add vue-router
```

#### 3.2.2 配置

1. 首先我们在 `src/views/home` 新建一个空白的 `index.vue` 文件。

```vue
<script lang="ts" setup>
// .
</script>
​
<template>
    <div>hello  vue3</div>
</template>
```

2. 然后在 `src/router` 目录下新建一个 `index.ts`，引入刚才新建的文件路由地址设为首页。

```ts
import {
    createRouter, createWebHashHistory, RouteRecordRaw,
} from 'vue-router'
​
const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'Home', component: () => import('views/home/index.vue')}
]
​
const router = createRouter({
    history: createWebHashHistory(),    // 这里使用的是 hash 模式，history 模式则使用 createWebHistory()
    routes,
})
​
export default router
```

3. 接着在 `src/main.ts` 中引入该文件。

```ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
​
const app = createApp(App as any)
app.use(router)
```

4. 在 `src/App.vue` 中添加 `router-view` 组件。

```vue
<template>
    <div class="app-view">
        <router-view></router-view>
    </div>
</template>
```

配置完成。


### 3.3 Pinia

#### 3.3.1 安装

```bash
yarn add pinia
```

#### 3.3.2 引入

在 `main.ts` 中引入

```ts
import { createPinia } from 'pinia'
​
app.use(createPinia())
```

#### 3.3.3 使用

以经典的 counter 为例。

1. 在 `src/stores` 下新建一个 `counters.ts` 文件

:::: code-group

::: code-group-item 普通写法

```ts
import { defineStore } from 'pinia'
​
// 使用 defineStore() 来定义一个 store
export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 0
        }
    },
    getters: {
        count() {
            return this.count
        }
    },
    actions: {
        increment() {
            this.count++
        }
    }
})
```

:::

::: code-group-item setup 写法

```ts
import { defineStore } from 'pinia'
​
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    function increment() {
      count.value++
    }
​
    return { count, increment }
})
```

:::

::::

然后在页面中就可以这样使用了：

```vue
<script lang="ts" setup>
    import { useCounterStore } from '@/stores/counter'
​
    const counter = useCounterStore()


    /**
     * ⚠️ 注意不能使用解构 const { count } = counter，这样写是错误的。
     */
</script>
<template>
    <div @click="counter.increment()">
        {{ counter.count }}
    </div>
</template>
```


### 3.4 ECharts 5

#### 3.4.1 安装

```bash
yarn add echarts
```

#### 3.4.2 使用

1. 在 `src/utils/` 下新建 `echarts.ts` 用来引入我们需要使用的组件。

```ts
import * as echarts from 'echarts/core'
import {
    BarChart,
    // 系列类型的定义后缀都为 SeriesOption
    BarSeriesOption,
    // LineChart,
    LineSeriesOption
} from 'echarts/charts'
import {
    TitleComponent,
    // 组件类型的定义后缀都为 ComponentOption
    TitleComponentOption,
    TooltipComponent,
    TooltipComponentOption,
    GridComponent,
    GridComponentOption,
    // 数据集组件
    DatasetComponent,
    DatasetComponentOption,
    // 内置数据转换器组件 (filter, sort)
    TransformComponent,
    LegendComponent
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
​
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
>
​
// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    LegendComponent
])
​
// eslint-disable-next-line no-unused-vars
const option: ECOption = {
    // ...
}
​
export const $echarts = echarts
```

2. 在页面中使用

```vue
<script lang="ts" setup>
    import { onMounted } from 'vue'
    import { $echarts, ECOption } from '@/utils/echarts'
​
    onMounted(() => {
        // 测试echarts的引入
        const ele = document.getElementById('echarts') as HTMLCanvasElement
        const myChart = $echarts.init(ele)
        const option: ECOption = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        }
        myChart.setOption(option)
</script>
```

### 3.5 axios

#### 3.5.1 安装

```bash
yarn add axios
```

axios 的具体封装会之后再写一篇文章。