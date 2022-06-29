---
index: 1
title: 349. 两个数组的交集
description: 两个数组的交集
icon: leetcode
date: 2022-05-06
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: tip <a href="https://leetcode-cn.com/problems/intersection-of-two-arrays/" target="_blank">两个数组的交集</a> <Badge text="简单" type="tip"/>

给定两个数组 `nums1` 和 `nums2` ，返回它们的交集 。输出结果中的每个元素一定是唯一的。我们可以不考虑输出结果的顺序 。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
```

:::

::: code-group-item 示例2

```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
```

:::

::::

## 想法

用Set搞定，so easy～

## 代码


:::: code-group

::: code-group-item TypeScript 1

```ts
function intersection(nums1: number[], nums2: number[]): number[] {
    let nums: Set<number> = new Set()
    const result: Set<number> = new Set()
    for (let i = 0; i < nums1.length; i++) {
        nums.add(nums1[i])
    }
    for (let i = 0; i < nums2.length; i++) {
        if (nums.has(nums2[i])) {
            result.add(nums2[i])
        }
    }
    return [...result]
};
```

:::

::: code-group-item TypeScript 2

```ts
function intersection(nums1: number[], nums2: number[]): number[] {
    return [...new Set(nums1.filter(i => nums2.includes(i)))]
};
```

:::

::::