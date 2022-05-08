---
title: 59. 螺旋矩阵 II
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 59. 螺旋矩阵 II

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/spiral-matrix-ii/'>

  给你一个正整数 `n` ，生成一个包含 `1` 到 `n2` 所有元素，且元素按顺时针顺序螺旋排列的 `n x n` 正方形矩阵 `matrix` 。


</BrowserWindow>


## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

![示例](https://zhuye-1308301598.file.myqcloud.com/markdown/spiraln.jpg)

    输入：n = 3
    输出：[[1,2,3],[8,9,4],[7,6,5]]

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：n = 1
    输出：[[1]]

  </TabItem>
</Tabs>

## 想法

刚开始脑子很懵，没想到最后的代码居然异常地优雅！

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function generateMatrix(n: number): number[][] {
    // 先生成一个空的二维数组
    let result = new Array(n).fill([]).map(() => new Array(n).fill(0))
    let up = 0, down = n - 1, left = 0, right = n - 1, index = 1
    // 模拟螺旋，代码很优雅哈哈😄，简洁明了
    while(index <= n * n) {
        for (let i = left; i <= right; i++) {
            result[up][i] = index++
        }
        up++
        for (let i = up; i <= down; i++) {
            result[i][right] = index++
        }
        right--
        for (let i = right; i >= left; i--) {
            result[down][i] = index++
        } 
        down--
        for (let i = down; i >= up; i--) {
            result[i][left] = index++
        }
        left++
    }
    return result
};
```

  </TabItem>
</Tabs>

