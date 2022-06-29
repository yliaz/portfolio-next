---
index: 1
title: 1. 两数之和
description: 两数之和
icon: leetcode
date: 2022-05-10
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: tip <a href="https://leetcode-cn.com/problems/two-sum/" target="_blank">两数之和</a> <Badge text="简单" type="tip"/>

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出和为目标值 `target`  的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
```

:::

::: code-group-item 示例2

```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

:::

::: code-group-item 示例3

```
输入：nums = [3,3], target = 6
输出：[0,1]
```

:::

::::

## 想法

1. 枚举法
2. 哈希比较

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function twoSum(nums: number[], target: number): number[] {
    const tempHash = {}   // 哈希用来存储已经遍历过的值，并记录他们的坐标
    for (let index = 0; index < nums.length; index++) {
        // 计算当前值达到条件需要的目标值，并看是否已经在 Hash 中了
        const targetNum = tempHash[target - nums[index]]
        if (targetNum !== undefined) {
          // 如果在，说明找到了，返回二者的下标即可
          return [targetNum, index]
        } else {
          // 如果不在就先暂存到 Hash 中
          tempHash[nums[index]] = index
        }
    }
};
```

:::

::: code-group-item Ruby

```ruby
# 用时：52ms
# 内存消耗：205.6MB
def two_sum(nums, target)
  temp_hash = {}
  result = []
  nums.each_with_index do |num, index|
    temp = temp_hash[(target - num)]
    if temp.nil?
      temp_hash[num] = index
    else
      result = [temp, index]
      break
    end
  end
  result
end
```

:::

::::