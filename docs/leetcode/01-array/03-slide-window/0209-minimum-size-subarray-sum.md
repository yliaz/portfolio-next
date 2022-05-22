---
index: 209
title: 209. 长度最小的子数组
description: 长度最小的子数组
icon: leetcode
date: 2022-04-21
category:
  - 力扣刷题
tag:
  - 力扣-数组
---

::: warning <a href="https://leetcode-cn.com/problems/minimum-size-subarray-sum/" target="_blank">长度最小的子数组</a> <Badge text="中等" type="warning"/>

给定一个含有 `n` 个正整数的数组和一个正整数 `target` 。

找出该数组中满足其和 `≥ target` 的长度最小的 连续子数组 `[numsl, numsl+1, ..., numsr-1, numsr]` ，并返回其长度。如果不存在符合条件的子数组，返回 `0` 。

:::


## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

:::

::: code-group-item 示例2

```
输入：target = 4, nums = [1,4,4]
输出：1
```

:::

::: code-group-item 示例3

```
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

:::

::::

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function minSubArrayLen(target: number, nums: number[]): number {
    let minLength = nums.length + 1  // 特殊值便于最终的判断
    let leftIndex = 0, rightIndex = 0
    let total = 0
    while(rightIndex < nums.length) {
        total += nums[rightIndex++]  // 计算滑块中数字的和
        while(total >= target) {
            // 如果满足条件，则记录此时的滑块长度，并从头部缩减滑块长度
            minLength = Math.min(minLength, rightIndex - leftIndex)
            total -= nums[leftIndex++]
        }
    }
    return minLength > nums.length ? 0 : minLength
};
```

:::

::::