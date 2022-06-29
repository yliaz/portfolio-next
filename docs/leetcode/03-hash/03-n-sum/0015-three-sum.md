---
index: 15
title: 15. 三数之和
description: 三数之和
icon: leetcode
date: 2022-05-11
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: warning <a href="https://leetcode-cn.com/problems/3sum/" target="_blank">三数之和</a> <Badge text="中等" type="warning"/>

给你一个包含 `n` 个整数的数组 `nums`，判断 `nums` 中是否存在三个元素 `a`，`b`，`c` ，使得 `a + b + c = 0` ？请你找出所有和为 `0` 且不重复的三元组。

注意：答案中不可以包含重复的三元组。 

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
```

:::

::: code-group-item 示例2

```
输入：nums = []
输出：[]
```

:::

::: code-group-item 示例3

```
输入：nums = [0]
输出：[]
```

:::

::::

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function threeSum(nums: number[]): number[][] {
    let result: number[][] = []
    const newNums = nums.sort((a, b) => a - b)
    for (let i = 0; i < newNums.length - 2; i++) {
        if (newNums[i] > 0) {
            break;
        }
        if (i > 0 && newNums[i] === newNums[i - 1]) continue
        let left = i + 1
        let right = newNums.length - 1
        while(left < right) {
            const sum = newNums[i] + newNums[left] + newNums[right]
            if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            } else {
                result.push([newNums[i], newNums[left], newNums[right]])
                left++
                right--
                while(left < right && newNums[left] === newNums[left - 1]) {
                    left++
                }
                while(left < right && newNums[right] === newNums[right + 1]) {
                    right--
                }
            }
        }
    }

    return result
};
```

:::
::::