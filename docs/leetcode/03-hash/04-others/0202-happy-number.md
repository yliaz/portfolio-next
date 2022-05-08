---
title: 202. 快乐数
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 202. 快乐数

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/happy-number/'>

  编写一个算法来判断一个数 `n` 是不是快乐数。

  「快乐数」 定义为：

  > 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果这个过程 结果为 1，那么这个数就是快乐数。

  如果 `n` 是快乐数就返回 `true` ；不是，则返回 `false` 。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：n = 19
    输出：true
    解释：
      12 + 92 = 82
      82 + 22 = 68
      62 + 82 = 100
      12 + 02 + 02 = 1

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：n = 2
    输出：false

  </TabItem>
</Tabs>

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function isHappy(n: number): boolean {
    function calcSum(n) {
        return String(n).split('').reduce((res, cur) => res += (+cur) * (+cur), 0)
    }

    let nums: Set<number> = new Set()
    while(n !== 1 && !nums.has(n)) {
        nums.add(n)
        n = calcSum(n)
    }
    return n === 1
};
```

  </TabItem>
</Tabs>