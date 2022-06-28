---
index: 242
title: 242. 有效的字母异位词
description: 有效的字母异位词
icon: leetcode
date: 2022-05-03
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: tip <a href="https://leetcode-cn.com/problems/valid-anagram/" target="_blank">有效的字母异位词</a> <Badge text="简单" type="tip"/>

给定两个字符串 `s` 和 `t` ，编写一个函数来判断 `t` 是否是 `s` 的字母异位词。

注意：若 `s` 和 `t` 中每个字符出现的次数都相同，则称 `s` 和 `t` 互为字母异位词。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入: s = "anagram", t = "nagaram"
输出: true
```

:::

::: code-group-item 示例2


```
输入: s = "rat", t = "car"
输出: false 
```

:::

::::

## 想法

用对象或Map均可。

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }
    let visited = {}
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (visited[char] === undefined) {
            visited[char] = 1
        } else {
            visited[char]++
        }
    }
    for (let i = 0; i < t.length; i++) {
        const char = t[i]
        if (visited[char] === undefined) {
            return false
        } else {
            visited[char]--
            if (visited[char] < 0) {
                return false
            }
        }
    }
    return true
};
```

:::

::::