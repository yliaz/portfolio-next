---
title: 35. 搜索插入位置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 35. 搜索插入位置

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/search-insert-position/'>

  给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

  请必须使用时间复杂度为 `O(log n)` 的算法。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：nums = [1,3,5,6], target = 5
    输出：2

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：nums = [1,3,5,6], target = 2
    输出：1

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：nums = [1,3,5,6], target = 7
    输出：4

  </TabItem>
</Tabs>

## 想法

1. 第一个想法就是遍历一次
2. 二分查找更快一些

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts1" label="TypeScript 1">

```ts
// 遍历
function searchInsert(nums: number[], target: number): number {
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i
        }
    }
    return nums.length
};
```

  </TabItem>
  <TabItem value="ts2" label="TypeScript 2">

```ts
// 二分查找
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

  </TabItem>
</Tabs>