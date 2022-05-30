---
index: 54
title: 54. 螺旋矩阵
description: 螺旋矩阵
icon: leetcode
date: 2022-04-23
category:
  - 力扣刷题
tag:
  - 力扣-数组
---

::: warning <a href="https://leetcode-cn.com/problems/spiral-matrix/" target="_blank">螺旋矩阵</a> <Badge text="中等" type="warning"/>

给你一个 `m` 行 `n` 列的矩阵 `matrix` ，请按照 **顺时针螺旋顺序** ，返回矩阵中的所有元素。

:::


## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/spiral1.jpg)

:::

::: code-group-item 示例2

```
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/spiral.jpg)

:::

::::


## 想法

模仿[59题](0059-spiral-matrix-ii)的写法，也是[剑指 Offer 29题](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function spiralOrder(matrix: number[][]): number[] {
    let m = matrix.length, n = matrix[0].length
    let left = 0, right = n - 1, up = 0, down = m - 1, index = 0
    const length = m * n
    let result = new Array(length).fill(0)
    while(index < m * n) {
        for (let i = left; i <= right && index < length; i++) {
            result[index++] = matrix[up][i]
        }
        up++
        for (let i = up; i <= down && index < length; i++) {
            result[index++] = matrix[i][right]
        }
        right--
        for (let i = right; i >= left && index < length; i--) {
            result[index++] = matrix[down][i]
        }
        down--
        for (let i = down; i >= up && index < length; i--) {
            result[index++] = matrix[i][left]
        }
        left++
    }
    return result
};
```

:::

::::
