---
title: 242. 有效的字母异位词
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 242. 有效的字母异位词

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/valid-anagram/'>

  给定两个字符串 `s` 和 `t` ，编写一个函数来判断 `t` 是否是 `s` 的字母异位词。

  注意：若 `s` 和 `t` 中每个字符出现的次数都相同，则称 `s` 和 `t` 互为字母异位词。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入: s = "anagram", t = "nagaram"
    输出: true


  </TabItem>
  <TabItem value="example2" label="示例2">

    输入: s = "rat", t = "car"
    输出: false 

  </TabItem>
</Tabs>

## 想法

用对象或Map均可。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

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

  </TabItem>
</Tabs>