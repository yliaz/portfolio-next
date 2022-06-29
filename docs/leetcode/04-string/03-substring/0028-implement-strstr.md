---
index: 28
title: 28. 实现 strStr()
description: 实现 strStr()
icon: leetcode
date: 2022-05-19
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: tip <a href="https://leetcode-cn.com/problems/implement-strstr/" target="_blank">实现 strStr()</a> <Badge text="简单" type="tip"/>

实现 `strStr()` 函数。

给你两个字符串 `haystack` 和 `needle` ，请你在 `haystack` 字符串中找出 `needle` 字符串出现的第一个位置（下标从 `0` 开始）。如果不存在，则返回  `-1`。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：haystack = "hello", needle = "ll"
输出：2
```

:::

::: code-group-item 示例2

```
输入：haystack = "aaaaa", needle = "bba"
输出：-1
```

:::

::: code-group-item 示例3

```
输入：haystack = "", needle = ""
输出：0
```

:::

::::

## 思路

据说需要 KMP，不过下次再为难自己吧。。。

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle)
};
```

:::

::::