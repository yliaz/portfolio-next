---
title: 459. 重复的子字符串
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 459. 重复的子字符串

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/repeated-substring-pattern/'>

  给定一个非空的字符串 `s` ，检查是否可以通过由它的一个子串重复多次构成。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入: s = "abab"
    输出: true
    解释: 可由子串 "ab" 重复两次构成。

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入: s = "aba"
    输出: false

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入: s = "abcabcabcabc"
    输出: true
    解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)

  </TabItem>
</Tabs>

## 思路

不好意思又偷懒了。。。但是打败了95%的提交😄。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function repeatedSubstringPattern(s: string): boolean {
    return (s + s).slice(1, -1).includes(s)
};
```

  </TabItem>
</Tabs>