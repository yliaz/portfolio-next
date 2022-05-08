---
index: -20200630
title: 动手实现数据响应式 Demo
description: 自己动手实现一个响应式 Demo
icon: vue
date: 2020-06-30
category:
  - 技术博客
tag:
  - Vue
---

如果你有时间，请看完[官方视频](https://www.vuemastery.com/courses/advanced-components/build-a-reactivity-system/)；如果你看不下去，可以看看我下面👇的总结。

## 从实现一个响应式Demo说起

### 一个没有响应式的世界

- 看下面一段代码：

```javascript
let price = 5
let quantity = 2
let total = price * quantity

console.log(`total is ${total}`)	// total is 10

price = 20	// 修改了变量price

console.log(`total is ${total}`)	// total is 10
// total的值并没有对应着做出改变
```

- 当我们修改了price的值时，虽然在计算total时会使用到price，但是total的值**并不会响应式地更新**。 



- **【问题来了】我们怎样才能将「计算**`**total**`**值的过程」保存下来，然后每次**`**price**`**或者**`**quantity**`**的值发生变化后，都运行这个「计算**`**total**`**值的过程」去自动更新total的值呢？**



### 保存计算total的逻辑以复用

- 我们可以提取出计算 `total` 的逻辑，之后每次 `price` 或者 `quantity` 发生变化的时候，都会再执行一遍这个逻辑。这样的话，当 `price` 或者 `quantity` 发生变化时，就可以自动将这种变化更新到 `total` 上面了。
- 我们使用target来提取出这个「计算 `total` 值的逻辑」，然后使用 `record()` 将它保存在一个小盒子里，等需要用的时候，再使用 `replay()` 重新执行「这个过程」。伪代码如下：

```javascript
let price = 5
let quantity = 2
let total = 0
let target = null

target = function() {
    total = price * quantity
}

/* record()和replay()目前未定义 */
record()	// 将target所指的函数（计算逻辑）记录一下，存放起来

target() // 执行一次target所指的函数（计算逻辑）


/* 
 * ......
 * 修改了 price 或者 quantity 的值 
 * ......
 */

replay() // 执行 record 存放起来的函数（计算逻辑），即重新运行target所指的函数
```

- 可以看到，我们使用 `record()` 把计算 `total` 值的逻辑保存了起来，并在 `price` 或者 `quantity` 发生变动时使用 `replay()` 重新计算 `total` 的值。做到了 `total` 的值可以随着 `price` 和 `quantity` 的值更新而去更新。我们在 `total` 身上实现了响应式。
- 下面我们实现一下 `record()` 和 `replay()` ，使得代码可以运行。

```javascript
let price = 5
let quantity = 2
let total = 0
let target = null
let storage = []		// 用于存放target

target = () => { total = price * quantity }

function record() { storage.push(target) }
function replay() { storage.forEach(run => run()) }

record();						// 保存「计算total值的逻辑」
target();						// 初始化total的值

console.log(total)	// 10
price = 20					// 修改price
console.log(total)	// 10
replay()						// 使用之前保存的「计算total值的逻辑」，重新计算total的值
console.log(total)	// 40
```

### 使用观察者模式重构

- 下面我们使用观察者模式（Observer Pattern）重构一下我们的代码。

观察者模式：当订阅者所观察的对象发生变动时，会通知特定的订阅者。

- 在下面的代码中，当订阅者（subscriber）所订阅的变量值变化时，会收到通知（notify）并执行一些操作。例如，对于刚才的「计算total的值的逻辑」，当计算 `total` 需要使用的 `price` 和 `quantity` 的值发生变化时，`total` 会收到通知，从而去执行「重新计算」这一操作。

```javascript
// Dep是Dependency（依赖）的缩写
class Dep {
    constructor() {
        // 订阅者，用来存放所有的target
        this.subscribers = [];
    }
    depend() {
        // 如果有一个target还不在subscribers中，就将它添加进去
        if(target && !this.subscribers.includes(target)) {
             this.subscribers.push(target);
        }
    }
    notify() {
        // 执行subscribers中的所有target
        this.subscribers.forEach(sub => sub());
    }
}

const dep = new Dep();

let price = 5
let quantity = 2
let total = 0
let target = null

// 对于传进来的函数，将其添加到dep的subscribers数组中
function watcher(myFunc) {
    target = myFunc;
    dep.depend();
    target();
    target = null
}

watcher(() => { total = price * quantity });

// Test Code
console.log(total);		// 10
price = 20;
console.log(total);		// 10
dep.notify();
console.log(total);		// 40
```



### 使用 Object.defineProperty()

- 还是刚刚的需求，这次我们借助 `Object.defineProperty()` 为 `data.price` 和 `data.quantity` 分别添加 `getter` / `setter`，并通过在getter和setter中添加一些逻辑来实现响应式。

#### Show Me the Code

```javascript
// 将数据存放在一个对象中
let data = {
    price: 5,
    quantity: 2
}
let target, total, salePrice

// Dep没变
class Dep {
    constructor() {
        this.subscribers = [];
    }
    depend() {
        if(target && !this.subscribers.includes(target)) {
             this.subscribers.push(target);
        }
    }
    notify() {
        this.subscribers.forEach(sub => sub());
    }
}

// 为data中的每个属性添加一个getter和setter
Object.keys(data).forEach(key => {
    let internalValue = data[key];
    const dep = new Dep();
    Object.defineProperty(data, key, {
        // 获取某个属性的时候，添加依赖
        get() {
            console.log(`获取了${key}的值`)
            dep.depend();
            return internalValue;
        },
        // 修改某个属性的时候，提醒订阅者
        set(newVal) {
            internalValue = newVal;
            console.log(`修改了${key}的值为${newVal}`)
            dep.notify();
        }
    })
})

// 添加订阅
function watcher(myFunc) {
    target = myFunc;
    target();
    target = null;
}

watcher(() => {
  total = data.price * data.quantity  
});

// Test Code
console.log(total);		// 10
data.price = 20;
console.log(total);		// 40
```

#### 理解一下这段代码：

- 当程序运行到第50行，执行 `watcher()` 时，会执行传入的函数（第46行），也就是要「计算total的值」
- 因为计算 `total` 的值需要用到 `data.price` 的值和 `data.quantity` 的值，因此会去调用二者的getter

- 当执行 `data.price` 的 `getter` 时，会执行其中的 `dep.depend()`，将当前的 `target` 添加到 `dep` 的 `subscriber` 中
- 也就是将「计算total的值」这一个逻辑添加到了 `data.price` 中 `dep` 对象的 `subscriber` 数组上

- 下一次修改 `data.price` 值的时候，会调用 `price` 的 `setter`，便会执行 `dep.notify()`，也就是执行 `subscriber` 数组中的所有函数
- 这时，因为「计算total的值」这一个逻辑在 `subscriber` 中，所以会被执行.

- 这一串操作组合起来就是：当修改 `price` 时，会自动「计算total的值」，`total` 的值就实现了响应式。
- 对于 `data.quantity` 也是同理，不再赘述。



## 小结

- 总结一下我们刚刚实现响应式的逻辑：

- - 例如对于 `c = a + b`；
  - 计算`c`的值时会用到`a`，会调用`a`的`getter`，`a`的`getter`中会执行一些操作来记住「`c`需要我」；

- - 下次a的值变化时，会调用它的`setter`，`a`会想起「`c`需要我」，就会通知`c`也修改一下它的值；