---
title: 49. 字母异位词分组
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 49. 字母异位词分组

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/group-anagrams/'>

  给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

  字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    输出: [["bat"],["nat","tan"],["ate","eat","tea"]]


  </TabItem>
  <TabItem value="example2" label="示例2">

    输入: strs = [""]
    输出: [[""]]

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入: strs = ["a"]
    输出: [["a"]]

  </TabItem>
</Tabs>

## 想法

用对象或Map均可。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

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

  </TabItem>
</Tabs>