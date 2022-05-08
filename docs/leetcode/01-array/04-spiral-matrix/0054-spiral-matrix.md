---
title: 54. 螺旋矩阵
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 54. 螺旋矩阵

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/spiral-matrix/'>

  给你一个 `m` 行 `n` 列的矩阵 `matrix` ，请按照 **顺时针螺旋顺序** ，返回矩阵中的所有元素。

</BrowserWindow>


## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

![example1](https://zhuye-1308301598.file.myqcloud.com/markdown/spiral1.jpg)

    输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
    输出：[1,2,3,6,9,8,7,4,5]

  </TabItem>
  <TabItem value="example2" label="示例2">

![example2](https://zhuye-1308301598.file.myqcloud.com/markdown/spiral.jpg)

    输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    输出：[1,2,3,4,8,12,11,10,9,5,6,7]

  </TabItem>
</Tabs>

## 想法

模仿[59题](spiral-matrix-ii)的写法，也是[剑指 Offer 29题](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

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

  </TabItem>
</Tabs>

