---
title: 34. 在排序数组中查找元素的第一个和最后一个位置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 34. 在排序数组中查找元素的第一个和最后一个位置

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/'>

  给定一个按照升序排列的整数数组 `nums`，和一个目标值 `target`。找出给定目标值在数组中的开始位置和结束位置。

  如果数组中不存在目标值 `target`，返回 `[-1, -1]`。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：nums = [5,7,7,8,8,10], target = 8
    输出：[3, 4]

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：nums = [5,7,7,8,8,10], target = 6
    输出：[-1, -1]

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：nums = [], target = 0
    输出：[-1, -1]

  </TabItem>
</Tabs>

## 想法

二分查找的变体

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
// 二分查找
function searchRange(nums: number[], target: number): number[] {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        const num = nums[mid]
        if (target === num) {
            // 找到目标值后，向两侧延伸
            let start = mid, end = mid
            while(nums[start] === target) {
                start--
            }
            while(nums[end] === target) {
                end++
            }
            return [start + 1, end - 1]
        } else if (target > num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return [-1, -1]
};
```

  </TabItem>
</Tabs>