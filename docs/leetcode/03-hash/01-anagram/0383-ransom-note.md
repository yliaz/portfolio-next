---
title: 383. 赎金信
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 383. 赎金信

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/ransom-note/'>

  给你两个字符串：`ransomNote` 和 `magazine` ，判断 `ransomNote` 能不能由 `magazine` 里面的字符构成。

  如果可以，返回 `true` ；否则返回 `false` 。

  magazine 中的每个字符只能在 `ransomNote` 中使用一次。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：ransomNote = "a", magazine = "b"
    输出：false


  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：ransomNote = "aa", magazine = "ab"
    输出：false  

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：ransomNote = "aa", magazine = "aab"
    输出：true  

  </TabItem>
</Tabs>

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function canConstruct(ransomNote: string, magazine: string): boolean {
    let visited: {[char: string]: number} = {}
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i]
        visited[char] = visited[char] === undefined ? 1 : visited[char] + 1
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i]
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