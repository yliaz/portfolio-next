---
title: 283. 移动零
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 283. 移动零

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/move-zeroes/'>

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：nums = [0,1,0,3,12]
    输出：[1,3,12,0,0]

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：nums = [0]
    输出：[0]

  </TabItem>
</Tabs>

## 想法

双指针

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
// 双指针
function moveZeroes(nums: number[]): void {
    let slowIndex = 0
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex ++) {
        const target = nums[fastIndex]
        if (target !== 0) {
            nums[slowIndex++] = target
        }
    }
    for (let i = slowIndex; i < nums.length; i++) {
        nums[i] = 0
    }
};
```

  </TabItem>
</Tabs>