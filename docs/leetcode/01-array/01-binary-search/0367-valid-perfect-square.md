---
index: 367
title: 367. 有效的完全平方数
description: 367. 有效的完全平方数
icon: leetcode
date: 2022-04-14
category:
  - 力扣刷题
tag:
  - 力扣-数组
---

::: tip x 的平方根 <Badge text="简单" type="tip"/>

给定一个 正整数 `num` ，编写一个函数，如果 `num` 是一个完全平方数，则返回 `true` ，否则返回 `false` 。

进阶：不要使用任何内置的库函数，如  `sqrt` 。

[题目链接](https://leetcode.cn/problems/valid-perfect-square/)

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：num = 16
输出：true
```

:::

::: code-group-item 示例2

```
输入：num = 14
输出：false
```

:::

::::

## 想法

二分查找，有点类似于 [69题(x的平方根)](0069-sqrtx)

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function isPerfectSquare(num: number): boolean {
    let left = 0
    let right = num
    while(left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        const temp = mid * mid
        if (temp === num) {
            return true
        } else if (temp < num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    } 
    return false
};
```

:::

::::