---
title: 367. 有效的完全平方数
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 367. 有效的完全平方数

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/valid-perfect-square/'>

给定一个 正整数 `num` ，编写一个函数，如果 `num` 是一个完全平方数，则返回 `true` ，否则返回 `false` 。

进阶：不要 使用任何内置的库函数，如  `sqrt` 。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：num = 16
    输出：true

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：num = 14
    输出：false

  </TabItem>
</Tabs>

## 想法

二分查找，有点类似于[69题](sqrtx)

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

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

  </TabItem>
</Tabs>