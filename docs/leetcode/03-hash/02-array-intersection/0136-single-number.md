---
index: 136
title: 136. 只出现一次的数字
description: 只出现一次的数字
icon: leetcode
date: 2022-05-08
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: tip <a href="https://leetcode-cn.com/problems/single-number/" target="_blank">只出现一次的数字</a> <Badge text="简单" type="tip"/>

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入: [2,2,1]
输出: 1
```

:::

::: code-group-item 示例2


```
输入: [4,1,2,1,2]
输出: 4
```

:::

::::

## 想法

第一想法是哈希，可以做，但是这道题还有更节省空间的 Trick 方法。

## 代码

:::: code-group

::: code-group-item TypeScript 哈希法

```ts
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

:::

::: code-group-item TypeScript 神操作

```ts
/**
 * (a 异或 0) = a
 * (a 异或 a) = 0
 */

function singleNumber(nums: number[]): number {
    return nums.reduce((result, item) => result ^ item, 0)
};
```

:::

::::