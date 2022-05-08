---
index: 1
title: computed 和 watch 异同
description: computed 和 watch 异同
icon: vue
date: 2020-05-20
category:
  - 学习笔记
tag:
  - Vue
---

## computed

- **computed**即**计算属性**，会对绑定到视图的对象进行处理，**监听到变化时，会执行对应的方法**。
- 计算属性是**基于依赖进行缓存的**，只有当依赖发生变化时，才会重新求值。

- 看一下Vue官网的例子：

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

- 声明了一个计算属性 `reversedMessage`，其后面的函数会作为 `vm.reversedMessage` 的 `getter`。



## watch

- **watch**表示**侦听**，用来**观察**和**响应**Vue实例上的数据变动。我们可以在watch中写一些方法，当某些数据变动时，让他们执行。
- 还是刚才Vue官网那个例子，我们尝试用**watch**重新写一下：

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
var vm = new Vue({
  el: '#example',
  data() {
    return {
      message: 'Hello',
    }
  },
  watch: {
    message: {
      handler: function() {
        this.reversedMessage = this.message.split('').reverse().join('')
      },
      immediate: true
    }
  }
})
```

- 可以明显地感受到watch的写法相对更加复杂一点。不过实现起来也没什么特别的问题。



## computed和watch异同

### 相同点

- 都是数据之间的依赖关系的一种实现。目的是在一个数据改变时，相应地去对另一个数据进行一些更新或者进行一些其他操作。

### 不同点

- **computed**主要用于关联数据的处理，即一个数据被修改了，与它相关联的数据也可以进行更新。
- **watch**主要用于观测到某个数据变化后执行一系列较为复杂的操作逻辑。

- 当有一些数据会随着其他数据变动时，优先考虑使用**computed**，可以防止对于**watch**的滥用。