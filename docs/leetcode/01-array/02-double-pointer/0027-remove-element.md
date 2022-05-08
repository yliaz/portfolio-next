---
title: 27. 移除元素
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 27. 移除元素

<BrowserWindow url='https://leetcode-cn.com/problems/remove-element/'>

  给你一个数组 `nums` 和一个值 `val` ，你需要 `原地` 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

  不要使用额外的数组空间，你必须仅使用O(1)额外空间并 `原地` 修改输入数组。

  元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：nums = [3,2,2,3], val = 3
    输出：2, nums = [2,2]
    解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：nums = [0,1,2,2,3,0,4,2], val = 2
    输出：5, nums = [0,1,4,0,3]
    解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。

  </TabItem>
</Tabs>

## 想法

与[26题](remove-duplicates-from-sorted-array)类似

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function removeElement(nums: number[], val: number): number {
    // 快慢双指针法
    let slowIndex = 0
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        // 如果快指针所指向的元素等于目标值，则直接跳过
        // 否则赋值给慢指针指向的元素并移动慢指针
        if (nums[fastIndex] !== val) {
            nums[slowIndex++] = nums[fastIndex]
        }
    }
    return slowIndex
};
```

  </TabItem>
</Tabs>