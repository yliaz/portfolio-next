---
title: 349. 两个数组的交集
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 349. 两个数组的交集

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/intersection-of-two-arrays/'>

  给定两个数组 `nums1` 和 `nums2` ，返回它们的交集 。输出结果中的每个元素一定是唯一的。我们可以不考虑输出结果的顺序 。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：nums1 = [1,2,2,1], nums2 = [2,2]
    输出：[2]


  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    输出：[9,4]
    解释：[4,9] 也是可通过的

  </TabItem>
</Tabs>

## 想法

用Set搞定，so easy～

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts1" label="TypeScript 1">

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

  </TabItem>

  <TabItem value="ts2" label="TypeScript 2">

```ts
function intersection(nums1: number[], nums2: number[]): number[] {
    return [...new Set(nums1.filter(i => nums2.includes(i)))]
};
```

  </TabItem>
</Tabs>