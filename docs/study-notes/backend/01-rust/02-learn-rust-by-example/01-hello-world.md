---
title: 01 Hello World
icon: rust
article: false
index: 1
---

## 注释

```rust
// 这是单行注释
/**
 * 这是块注释 /* 可以嵌套 */
 */

fn main() {
    println!("Hello World!");
    println!("I'm Zhu Ye.");

    let x = 5 + /* 90 + */ 5;
    println!("Is `x` 10 or 100? x = {}", x);
}
```