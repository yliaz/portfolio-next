---
index: 904
title: 904. 水果成篮
description: 水果成篮
icon: leetcode
date: 2022-04-22
category:
  - 力扣刷题
tag:
  - 力扣-数组
---

::: warning <a href="https://leetcode-cn.com/problems/fruit-into-baskets/" target="_blank">水果成篮</a> <Badge text="中等" type="warning"/>

你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组 `fruits` 表示，其中 `fruits[i]` 是第 `i` 棵树上的水果**种类** 。

你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：

- 你只有**两个**篮子，并且每个篮子只能装**单一类型**的水果。每个篮子能够装的水果总量没有限制。
    
- 你可以选择任意一棵树开始采摘，你必须从每棵树（包括开始采摘的树）上恰好摘一个水果 。采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。
    
- 一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。

给你一个整数数组 `fruits` ，返回你可以收集的水果的**最大**数目。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：fruits = [1,2,1]
输出：3
解释：可以采摘全部 3 棵树。
```

:::

::: code-group-item 示例2

```
输入：fruits = [0,1,2,2]
输出：3
解释：可以采摘 [1,2,2] 这三棵树。如果从第一棵树开始采摘，则只能采摘 [0,1] 这两棵树。
```

:::

::: code-group-item 示例3

```
输入：fruits = [1,2,3,2,2]
输出：4
解释：可以采摘 [2,3,2,2] 这四棵树。如果从第一棵树开始采摘，则只能采摘 [1,2] 这两棵树。
```

:::

::: code-group-item 示例4

```
输入：fruits = [3,3,3,1,2,1,1,2,3,3,4]
输出：5
解释：可以采摘 [1,2,1,1,2] 这五棵树。
```

:::

::::

## 想法

最长子序列。滑动窗口。

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function totalFruit(fruits: number[]): number {
    let result = 0  // 用于记录最终结果
    /**
     * 定义三个指针
     * leftIndex：子数组的开头
     * rightIndex：子数组的末尾
     * middleIndex：子数组中第一个与前边所有数字不相同的数字
     */
    let leftIndex = 0, middleIndex = 1, rightIndex = 1

    // 寻找第一个 middleIndex 的位置
    while (rightIndex < fruits.length && fruits[leftIndex] == fruits[rightIndex]) {
        rightIndex++
    }
    middleIndex = rightIndex
    // 此时的middle指向了第一个与前面所有数字都不相同的数字
    // 也就是说，fruits[middle] 和 fruits[middle - 1]不相同

    while (rightIndex < fruits.length) {
        // 如果出现第三个数字，就把第三个数字前面子数组先截取出来，与result比对并取较大的值
        if ((fruits[rightIndex] !== fruits[middleIndex]) && (fruits[rightIndex] !== fruits[middleIndex - 1])) {
            result = Math.max(result, rightIndex - leftIndex)
            leftIndex = middleIndex  // 把第一个数字从子数组中全部剔除掉，使得子数组中仅包含后两个数字
        }
        if (fruits[rightIndex] !== fruits[rightIndex - 1]) {
            middleIndex = rightIndex  // 判断并更新 middleIndex
        }
        rightIndex++
    }
    // 此时 rightIndex 在末尾，最后需要再做一次判断
    result = Math.max(result, rightIndex - leftIndex)
    return result
};
```

:::

::::
