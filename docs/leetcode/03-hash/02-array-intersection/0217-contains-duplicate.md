---
title: 217. 存在重复元素
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 217. 存在重复元素

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/contains-duplicate/'>

  给你一个整数数组 `nums` 。如果任一值在数组中出现至少两次 ，返回 `true` ；如果数组中每个元素互不相同，返回 `false`。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：nums = [1,2,3,1]
    输出：true


  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：nums = [1,2,3,4]
    输出：false

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：nums = [1,1,1,3,3,4,3,2,4,2]
    输出：true

  </TabItem>
</Tabs>

## 想法

第一想法是哈希。去重后比较长度也可，但是哈希可以提前返回，平均下来能少进行一些判断。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts1" label="TypeScript 1">

```ts
// 哈希
function containsDuplicate(nums: number[]): boolean {
    let set: Set<number> = new Set()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (set.has(num)) {
            return true
        }
        set.add(num)
    }
    return false
};
```

  </TabItem>

  <TabItem value="ts2" label="TypeScript 2">

```ts
// 去重后比较长度
function containsDuplicate(nums: number[]): boolean {
    return [...new Set(nums)].length !== nums.length
};
```

  </TabItem>
</Tabs>