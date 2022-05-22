---
index: 35
title: 35. 搜索插入位置
description: 35. 搜索插入位置
icon: leetcode
date: 2022-04-12
category:
  - 力扣刷题
tag:
  - 力扣-数组
---

::: tip <a href="https://leetcode-cn.com/problems/search-insert-position/" target="_blank">搜索插入位置</a>  <Badge text="简单" type="tip"/>

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 `O(log n)` 的算法。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：nums = [1,3,5,6], target = 5
输出：2
```

:::

::: code-group-item 示例2

```
输入：nums = [1,3,5,6], target = 2
输出：1
```

:::

::: code-group-item 示例3

```
输入：nums = [1,3,5,6], target = 7
输出：4
```

:::

::::

## 想法

1. 第一个想法就是遍历一次
2. 二分查找更快一些

## 代码

:::: code-group

::: code-group-item TypeScript 遍历

```ts
function searchInsert(nums: number[], target: number): number {
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i
        }
    }
    return nums.length
};
```

:::

::: code-group-item TypeScript 二分查找

```ts
function searchInsert(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1
    if (target <= nums[left]) {
        return 0
    }
    if (target > nums[right]) {
        return right + 1
    }
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        const num = nums[mid]
        if (target === num) {
            return mid
        } else if (target > num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
};
```

:::

::::