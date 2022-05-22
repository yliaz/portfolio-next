---
index: 283
title: 283. 移动零
description: 移动零
icon: leetcode
date: 2022-04-17
category:
  - 力扣刷题
tag:
  - 力扣-数组
---

::: tip <a href="https://leetcode-cn.com/problems/move-zeroes/" target="_blank">移动零</a>  <Badge text="简单" type="tip"/>

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：nums = [0,1,0,3,12]
输出：[1,3,12,0,0]
```

:::

::: code-group-item 示例2

```
输入：nums = [0]
输出：[0]
```

:::

::::

## 想法

双指针

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
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

:::

::::