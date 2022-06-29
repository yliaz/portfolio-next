---
index: 454
title: 454. 四数相加 II
description: 四数相加 II
icon: leetcode
date: 2022-05-13
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: warning <a href="https://leetcode-cn.com/problems/4sum-ii/" target="_blank">四数相加 II</a> <Badge text="中等" type="warning"/>

给你四个整数数组 `nums1`、`nums2`、`nums3` 和 `nums4` ，数组长度都是 `n` ，请你计算有多少个元组 `(i, j, k, l)` 能满足：

- `0 <= i, j, k, l < n`
- `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0` 

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出：2
解释：两个元组如下：

1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
```

:::

::: code-group-item 示例2

```
输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
输出：1
```

:::
::::

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let hash: Map<number, number> = new Map()
    let result = 0
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const sum = nums1[i] + nums2[j]
            hash.set(sum, (hash.get(sum) || 0) + 1)
        }
    }
    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            const target = hash.get(-(nums3[i] + nums4[j]))
            if (target) {
                result += target
            }
        }
    }
    return result
};
```

:::

::::