---
title: 977. 有序数组的平方
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 977. 有序数组的平方

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/squares-of-a-sorted-array/'>

  给你一个按__非递减顺序__排序的整数数组 `nums`，返回__每个数字的平方__组成的新数组，要求也按__非递减顺序__排序。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：nums = [-4,-1,0,3,10]
    输出：[0,1,9,16,100]
    解释：平方后，数组变为 [16,1,0,9,100]；排序后，数组变为 [0,1,9,16,100]

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：nums = [-7,-3,2,3,11]
    输出：[4,9,9,49,121]

  </TabItem>
</Tabs>

## 想法



## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

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

  </TabItem>

</Tabs>