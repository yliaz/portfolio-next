---
title: 1672. 最富有客户的资产总量
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 1672. 最富有客户的资产总量

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/richest-customer-wealth/'>

  给你一个 `m` x `n` 的整数网格 `accounts` ，其中 `accounts[i][j]` 是第 `i​​​​​​​​​​​​` 位客户在第 `j` 家银行托管的资产数量。返回最富有客户所拥有的资产总量 。

  客户的资产总量就是他们在各家银行托管的资产数量之和。最富有客户就是资产总量最大的客户。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：accounts = [[1,2,3],[3,2,1]]
    输出：6
    解释：
    第 1 位客户的资产总量 = 1 + 2 + 3 = 6
    第 2 位客户的资产总量 = 3 + 2 + 1 = 6
    两位客户都是最富有的，资产总量都是 6 ，所以返回 6 。

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：accounts = [[1,5],[7,3],[3,5]]
    输出：10
    解释：
    第 1 位客户的资产总量 = 6
    第 2 位客户的资产总量 = 10 
    第 3 位客户的资产总量 = 8
    第 2 位客户是最富有的，资产总量是 10

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：accounts = [[2,8,7],[7,1,3],[1,9,5]]
    输出：17

  </TabItem>
</Tabs>

## 想法

两层循环，内层循环依次比较，太简单了有点。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function maximumWealth(accounts: number[][]): number {
    return accounts.reduce((result, nums) => {
        return Math.max(result, nums.reduce((sum, cur) => sum += cur, 0))
    }, 0)
};
```

  </TabItem>
</Tabs>