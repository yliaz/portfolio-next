---
index: 344
title: 344. 反转字符串
description: 反转字符串
icon: leetcode
date: 2022-05-15
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: tip <a href="https://leetcode-cn.com/problems/reverse-string/" target="_blank">反转字符串</a> <Badge text="简单" type="tip"/>

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 `O(1)` 的额外空间解决这一问题。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```

:::

::: code-group-item 示例2

```
输入：s = ["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

:::

::::

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function reverseString(s: string[]): void {
    let left = 0
    let right = s.length - 1
    while(left < right) {
        const temp = s[left]
        s[left++] = s[right]
        s[right--] = temp
    }
};
```

:::
::::
