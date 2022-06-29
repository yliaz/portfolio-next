---
index: 10058
title: 剑指 Offer 58. 左旋转字符串
description: 左旋转字符串
icon: leetcode
date: 2022-05-17
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: tip <a href="https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/" target="_blank">反转字符串 II</a> <Badge text="简单" type="tip"/>

字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串 `"abcdefg"` 和数字 `2`，该函数将返回左旋转两位得到的结果`"cdefgab"`。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入: s = "abcdefg", k = 2
输出: "cdefgab"
```

:::

::: code-group-item 示例1

```
输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
```

:::

::::

## 思路

偷懒用 API 大法。如果要追求 O(1) 的空间复杂度，可以通过三次反转字符串实现，代码都在下面。

## 代码

:::: code-group

::: code-group-item TypeScript API 大法

```ts
function reverseLeftWords(s: string, n: number): string {
    return s.slice(n) + s.slice(0, n)
};
```

:::

::: code-group-item TypeScript 三次反转

```ts
function reverseLeftWords(s: string, n: number): string {
    function reverse(left, right) {
        while(left < right) {
            [arr[left++], arr[right--]] = [arr[right], arr[left]]
        }
    }
    let left = 0
    let right = n - 1
    const arr = s.split('')
    reverse(left, right)
    left = n
    right = arr.length - 1
    reverse(left, right)
    left = 0
    right = arr.length - 1
    reverse(left, right)
    return arr.join('')
};
```

:::

::::