---
index: 459
title: 459. 重复的子字符串
description: 重复的子字符串
icon: leetcode
date: 2022-05-20
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: tip <a href="https://leetcode-cn.com/problems/repeated-substring-pattern/" target="_blank">实现 strStr()</a> <Badge text="简单" type="tip"/>

给定一个非空的字符串 `s` ，检查是否可以通过由它的一个子串重复多次构成。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入: s = "abab"
输出: true
解释: 可由子串 "ab" 重复两次构成。
```

:::

::: code-group-item 示例2

```
输入: s = "aba"
输出: false
```

:::

::: code-group-item 示例3

```
输入: s = "abcabcabcabc"
输出: true
解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
```

:::

::::

## 思路

不好意思又偷懒了。。。但是打败了95%的提交😄。

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function repeatedSubstringPattern(s: string): boolean {
    return (s + s).slice(1, -1).includes(s)
};
```

:::

::::