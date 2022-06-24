---
index: 49
title: 49. 字母异位词分组
description: 字母异位词分组
icon: leetcode
date: 2022-05-02
category:
  - 力扣刷题
tag:
  - 力扣-哈希
---

::: warning <a href="https://leetcode-cn.com/problems/group-anagrams" target="_blank">环形链表 II</a> <Badge text="中等" type="warning"/>

给你一个字符串数组，请你将**字母异位词**组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

:::

::: code-group-item 示例2

```
输入: strs = [""]
输出: [[""]]
```

:::

::: code-group-item 示例3

```
输入: strs = ["a"]
输出: [["a"]]
```

:::

::::

## 想法

用对象或Map均可。

## 代码

:::: code-group

::: code-group-item TypeScript 双指针法

```ts
function groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map()
    for (let str of strs) {
        const key = str.split('').sort().join()
        const list = map.has(key) ? [...map.get(key), str] : [str]
        map.set(key, list)
    }
    const result: string[][] = []
    map.forEach(value => result.push(value))
    return result
};
```

:::

::::