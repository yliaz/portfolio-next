---
index: 541
title: 541. 反转字符串 II
description: 反转字符串 II
icon: leetcode
date: 2022-05-16
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: tip <a href="https://leetcode-cn.com/problems/reverse-string-ii/" target="_blank">反转字符串 II</a> <Badge text="简单" type="tip"/>

给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

- 如果剩余字符少于 k 个，则将剩余字符全部反转。
- 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：s = "abcdefg", k = 2
输出："bacdfeg"
```

:::

::: code-group-item 示例1

```
输入：s = "abcd", k = 2
输出："bacd"
```

:::

::::

## 思路

主要在于最后一次循环的条件判断

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function reverseStr(s: string, k: number): string {
    let i = 0
    const array = s.split('')
    while(i < s.length) {
        let left = i
        let right = (i + k > s.length ? s.length - 1 : i + k -1)
        while(left <= right) {
            const temp = array[left]
            array[left++] = array[right]
            array[right--] = temp
        }
        i += 2 * k
    }
    return array.join('')
};
```

:::
::::