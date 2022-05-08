---
index: 2
title: 单个元素/组件的过渡和动画
description: 单个元素/组件的过渡和动画
icon: vue
date: 2020-05-21
category:
  - 学习笔记
tag:
  - Vue
---

## 单元素/组件的过渡

### 使用按钮控制页面的展示

- 下面的例子中，我们将使用一个按钮来控制 `hello` 这行字的展示与否。

```vue
<template>
  <div id="demo">
    <button v-on:click="show = !show">
      Toggle
    </button>
    <p v-if="show">hello</p>
  </div>
</template>
<script>
  new Vue({
  	el: '#demo',
  	data: {
    	show: true
  	}
	})
</script>
```

- 效果如下图所示，即点击按钮时，`hello` 会在「显示」和「隐藏」两个状态之间切换。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1591099614677-60634e1a-077e-46d3-b79e-fcb3cce15001.gif)

### 实现“渐隐渐现”效果

#### 过渡动画的原理

- 我们可以通过使用 `transition` 组件给任何元素和组件添加进入/离开过渡。
- 在给出代码之前，我们先看看 transtion 的原理：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1591152754103-874dd619-3572-48cd-aee2-6766430cbcf2.png)

- **Enter**和**Leave**分别表示**进入阶段动画**和**离开阶段动画**。
- 在 Enter 阶段，可以使用 `v-enter`、`v-enter-to`、`v-enter-active` 来控制动画：

- - `v-enter` ：进入过渡的「起始」状态；
  - `v-enter-to` ：进入过渡的「结束」状态；

- - `v-enter-active` ：进入过渡「进行期间」的状态；

- 在 Leave 阶段，可以使用 `v-leave`、`v-leave-to`、`v-leave-active` 来控制动画：

- - `v-leave` ：离开过渡的「起始」状态；
  - `v-enter-to` ：离开过渡的「结束」状态；

- - `v-enter-active` ：离开过渡「进行期间」的状态；

- 我们以**Enter阶段**为例：

- - 过渡开始后的**第一帧：**给元素加上 `v-enter` 和 `v-enter-active` 两个类；
  - 过渡开始后的**第二帧**：去除 `v-enter` 类，加上 `v-enter-to` 类，并向着**结束状态****开始过渡**；

- - 过渡将要结束前的**最后一帧**：去除 `v-enter-to` 类和 `v-enter-active` 类，**完成过渡**。



#### 实现hello文字的“渐隐渐现”

- 要实现 hello 的“渐隐渐现”，只需要做两件事：

- - 用 `transition` 组件包裹 **hello** 所在的 `p` 元素；

```vue
<transition name="fade">
  <p v-if="show">hello</p>
</transition>
```

- - 添加对动画的描述；

```vue
<style>
  
  /* 动画时长为2s */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  
  /* 文字出现的开始状态为opacity为0 */
  /* 文字消失的结束状态为opacity变为0 */ 
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  
</style>
```

- 看看效果吧！

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1591154959691-7db381ba-1f9d-44bc-ab6c-99d28083bdab.gif)

- Tada！完美实现了我们的想法！

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1591156292719-b42dc1b8-d481-4388-b26c-f9a2aaf32dc1.gif) 





## 单元素/组件的动画

### 使用animation制作动画

- 下面我们借助 `animation` 实现同样的功能，需要改变的只有**style**标签的内容

```vue
<style>
  
  /* 进入动画 */
  .fade-enter-active {
    animation: fade-in 2s;
  }
  
  /* 离开动画 */
  .fade-leave-active {
    animation: fade-in 2s reverse;
  }

  /* 定义动画fade-in */
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
```

- 看一下实现效果：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1591158206292-1e619696-89b8-42bb-9451-9704c438a54d.gif)

- 就是这么简单！

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1591160488030-cc9d92c5-cf40-476d-a1e7-b236b6256126.gif) 

### 使用 Animate.css 库

#### 自定义 transition 类名

- 要自定义 transition 的类名，只需要在 transition 组件上进行一些修改。
- 例如，要自定义类名 `.fade-enter-active` 为 `enter`，只需要在 `transition` 组件的标签内添加一句 `enter-active-class="enter"` 即可。同理可以自定义 `.fade-leave-active` 为 `leave`。

```vue
<transition name="fade" enter-active-class="enter" leave-active-class="leave">
  <p v-if="show">hello</p>
</transition>
```

#### 使用 Animate.css

- 借助自定义类名，我们就可以使用 Animate.css 库提供的动画了。
- 首先按照[官网](https://animate.style/)的引导引入一下 Animate.css；

- 然后只需要在需要的类上添加对应的动画名就可以了。

```javascript
/* main.js */
import animate from 'animate.css'
Vue.use(animate);
<transition 
  enter-active-class="animate__animated animate__fadeIn" 
  leave-active-class="animate__animated animate__fadeOut"
>
    <p v-if="show">hello</p>
</transition>
```

- 效果跟刚刚类似

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1591175231233-96b3c946-d73c-468a-bd34-5474a269a118.gif)

注意，这里的语法是 animate.css v4.x 版本的语法，如果你使用的是v3.x版本则没有 `animate__` 前缀。详细资料参见官网[Migration from v3.x and under](https://animate.style/#migration)



## 小结

- 给**元素/组件**添加**动画/过渡**总共分两步：

- - 将对应元素放在 `transition` 组件中；
  - 在 CSS 中描述对应的过渡或动画：

- - - 对于过渡 `transition` ：通过控制 Enter 和 Leave 不同阶段的状态来控制过渡；
    - 对于动画 `animation` ：可以使用 `@keyframes` 来描述动画的各个阶段，并在 `v-enter-active` 和 `v-leave-active` 中加入 `animation`；