---
index: 977
title: 977. 有序数组的平方
description: 有序数组的平方
icon: leetcode
date: 2022-04-19
category:
  - 力扣刷题
tag:
  - 力扣-数组
---

::: tip <a href="https://leetcode-cn.com/problems/squares-of-a-sorted-array/" target="_blank">有序数组的平方</a>  <Badge text="简单" type="tip"/>

给你一个按**非递减顺序**排序的整数数组 `nums`，返回**每个数字的平方**组成的新数组，要求也按**非递减顺序**排序。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]；排序后，数组变为 [0,1,9,16,100]
```

:::

::: code-group-item 示例2

```
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

:::

::::

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function sortedSquares(nums: number[]): number[] {
    let leftIndex = 0
    let rightIndex = nums.length - 1
    const result = new Array(nums.length)
    for (let i = nums.length - 1; i >= 0; i--) {
        const leftSquare = nums[leftIndex] * nums[leftIndex]
        const rightSquare = nums[rightIndex] * nums[rightIndex]
        if (leftSquare <= rightSquare) {
            result[i] = rightSquare
            rightIndex--
        }  else {
            result[i] = leftSquare
            leftIndex++
        }
    }
    return result
};
```

:::

::::