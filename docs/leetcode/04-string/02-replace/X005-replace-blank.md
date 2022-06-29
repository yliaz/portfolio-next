---
index: 10005
title: 剑指 Offer 05. 替换空格
description: 替换空格
icon: leetcode
date: 2022-05-18
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: tip <a href="https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/" target="_blank">替换空格</a> <Badge text="简单" type="tip"/>

请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：s = "We are happy."
输出："We%20are%20happy."
```

:::

::::

## 思路

由后至前

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function replaceSpace(s: string): string {
    let t = new Array(s.length * 3).fill(0)
    const arr = s.split('')
    let left = arr.length - 1, right = t.length - 1
    while(left >= 0) {
        if (arr[left] === ' ') {
            [t[right - 2], t[right - 1], t[right]] = ['%', '2', '0']
            right -= 3
            left--
        } else {
            t[right--] = arr[left--]
        }
    }
    return t.slice(right + 1, t.length).join('')
};
```

:::

::::
