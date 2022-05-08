---
title: 136. 只出现一次的数字
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 136. 只出现一次的数字

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/single-number/'>

  给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入: [2,2,1]
    输出: 1


  </TabItem>
  <TabItem value="example2" label="示例2">

    输入: [4,1,2,1,2]
    输出: 4

  </TabItem>
</Tabs>

## 想法

第一想法是哈希，可以做，但是这道题还有更节省空间的 Trick 方法。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts1" label="TypeScript 1">

```ts
// 哈希
function singleNumber(nums: number[]): number {
    const visited: Set<number> = new Set()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (visited.has(num)) {
            visited.delete(num)
        } else {
            visited.add(num)
        }
    }
    return [...visited][0]
};
```

  </TabItem>

  <TabItem value="ts2" label="TypeScript 2">

```ts
/**
 * (a 异或 0) = a
 * (a 异或 a) = 0
 * 

function singleNumber(nums: number[]): number {
    return nums.reduce((result, item) => result ^ item, 0)
};
```

  </TabItem>
</Tabs>