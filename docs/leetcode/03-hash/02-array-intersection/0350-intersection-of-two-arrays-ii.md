---
title: 350. 两个数组的交集 II
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 350. 两个数组的交集 II

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/'>

  给你两个整数数组 `nums1` 和 `nums2` ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：nums1 = [1,2,2,1], nums2 = [2,2]
    输出：[2,2]

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    输出：[4,9]

  </TabItem>
</Tabs>

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts1" label="TypeScript 1">

```ts
function intersect(nums1: number[], nums2: number[]): number[] {
    let numsMap: Map<number, number> = new Map()
    let result: number[] = []
    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i]
        numsMap.set(num, (numsMap.get(num) || 0) + 1)
    }
    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i]
        const times = numsMap.get(nums2[i])
        if (times) {
            result.push(num)
            numsMap.set(num, times - 1)
        }
    }
    return result
};
```

  </TabItem>
</Tabs>