---
index: 217
title: 217. 存在重复元素
description: 存在重复元素
icon: leetcode
date: 2022-05-09
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: tip <a href="https://leetcode-cn.com/problems/contains-duplicate/" target="_blank">存在重复元素</a> <Badge text="简单" type="tip"/>

给你一个整数数组 `nums` 。如果任一值在数组中出现至少两次 ，返回 `true` ；如果数组中每个元素互不相同，返回 `false`。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入：nums = [1,2,3,1]
输出：true
```

:::

::: code-group-item 示例2

```
输入：nums = [1,2,3,4]
输出：false
```

:::

::: code-group-item 示例3

```
输入：nums = [1,1,1,3,3,4,3,2,4,2]
输出：true
```

:::

::::

## 想法

第一想法是哈希。去重后比较长度也可，但是哈希可以提前返回，平均下来能少进行一些判断。

## 代码

:::: code-group

::: code-group-item TypeScript 哈希法

```ts
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

:::

::: code-group-item TypeScript 去重后比较长度

```ts
function containsDuplicate(nums: number[]): boolean {
    return [...new Set(nums)].length !== nums.length
};
```

:::

::::
