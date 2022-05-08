---
title: 69. x 的平方根
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 69. x 的平方根

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/sqrtx/'>

  给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

  由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

  __注意：__不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：x = 4
    输出：2

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：x = 8
    输出：2
    解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。

  </TabItem>
</Tabs>

## 想法

二分查找

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
// 二分查找
function mySqrt(x: number): number {
    let left = 0
    let right = x
    while(left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        const temp = mid * mid
        if (temp === x) {
            return mid
        } else if (temp > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return right
};
```

  </TabItem>
</Tabs>