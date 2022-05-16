---
index: 704
title: 704. 二分查找
description: 704. 二分查找
icon: leetcode
date: 2022-04-15
category:
  - 力扣刷题
tag:
  - 力扣-数组
---

::: tip x 的平方根 <Badge text="简单" type="tip"/>

给定一个 n 个元素有序的（升序）整型数组 `nums` 和一个目标值 `target`  ，写一个函数搜索 `nums` 中的 `target` ，如果目标值存在返回下标，否则返回 `-1` 。

[题目链接](https://leetcode-cn.com/problems/binary-search/)

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：nums = [-1,0,3,5,9,12], target = 9
输出：4
解释：9 出现在 nums 中并且下标为 4
```

:::

::: code-group-item 示例2

```
输入：nums = [-1,0,3,5,9,12], target = 2
输出：-1
解释：2 不存在 nums 中因此返回 -1
```

:::

::::

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function search(nums: number[], target: number): number {
    if (nums.length === 0) {
        return -1
    }
    let left = 0;
    let right = nums.length - 1

    // 使用闭区间
    while(left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        const num = nums[mid]
        if (num === target) {
            // 找到了，完活了！
            return mid
        } else if (num < target) {
            // 说明在 mid 的右侧，移动左指针到 mid 右侧+1位置
            left = mid + 1
        } else {
            // 说明在 mid 的左侧，移动右指针到 mid 左侧-1位置
            right = mid - 1
        }
    }
    return -1
};
```

:::

::::