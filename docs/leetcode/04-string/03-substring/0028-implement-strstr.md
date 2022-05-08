---
title: 28. 实现 strStr()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 28. 实现 strStr()

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/implement-strstr/'>

  实现 `strStr()` 函数。

  给你两个字符串 `haystack` 和 `needle` ，请你在 `haystack` 字符串中找出 `needle` 字符串出现的第一个位置（下标从 `0` 开始）。如果不存在，则返回  `-1`。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：haystack = "hello", needle = "ll"
    输出：2

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：haystack = "aaaaa", needle = "bba"
    输出：-1

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：haystack = "", needle = ""
    输出：0

  </TabItem>
</Tabs>

## 思路

据说需要 KMP，不过下次再为难自己吧。。。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle)
};
```

  </TabItem>
</Tabs>