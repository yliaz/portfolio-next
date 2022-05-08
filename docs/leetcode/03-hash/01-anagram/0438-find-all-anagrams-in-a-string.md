---
title: 438. 找到字符串中所有字母异位词
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 438. 找到字符串中所有字母异位词

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/'>

  给定两个字符串 `s `和 `p`，找到 `s` 中所有 `p` 的 异位词的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

  异位词: 指由相同字母重排列形成的字符串（包括相同的字符串）。


</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：s = "cbaebabacd", p = "abc"
    输出：[0,6]
    解释：起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。


  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：s = "abab", p = "ab"
    输出：[0,1,2]
    解释：起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

  </TabItem>
</Tabs>

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function findAnagrams(s: string, p: string): number[] {
    let slowIndex = 0, fastIndex = p.length - 1
    let visited = {}  // 记录满足条件还需要的各个字符的数量
    let count = 0  // 辅助判断，记录满足条件还需要的字符总数量
    const result: number[] = []

    // 将字符串 p 各个字符的数量存入 visited 中
    for (let i = 0; i < p.length; i++) {
        const char = p[i]
        visited[char] = visited[char] === undefined ? 1 : visited[char] + 1
        count++
    }

    // 快指针移动，同时依照第一个子字符串更新 visited
    for (let i = 0; i < p.length; i++) {
        const char = s[i]
        if (visited[char] !== undefined) {
            visited[char]--
            if (visited[char] >= 0) {
                count--
            }
        }
    }

    // 滑动窗口
    while(fastIndex < s.length) {
        // count === 0 说明满足条件
        if (count === 0) {
            result.push(slowIndex)           
        }
        /**
         * 移动慢指针，左侧滑出的字符
         * 滑出后，如果需要数量小于0，说明滑动窗口中存在多余的，不需要更新 count
         * 滑出后，如果需要数量等于0，说明滑动窗口中恰好满足数量，也不需要更新 count
         * 滑出后，如果需要数量大于0，说明滑动窗口中该字符串数量不足，需要将 count 加1
         */
        const left = s[slowIndex++]
        if (visited[left] !== undefined){
            visited[left]++
            if (visited[left] > 0) {
                count++
            }
        } 
        /**
         * 移动快指针，右侧滑入字符
         * 滑入后，如果需要数量小于0，说明存在冗余，不需要更新 count
         * 滑入后，如果需要数量等于0，说明滑入后恰好满足条件，满足条件所需的总字符减1，即 count--
         * 滑入后，如果需要数量大于0，说明滑入后虽然不满足条件，但满足条件所需的总字符减1，即 count--
         */
        const right = s[++fastIndex]
        if (visited[right] !== undefined) {
            visited[right]--
            if (visited[right] >= 0) {
                count--
            }
        }
    }
    return result
};
```

  </TabItem>
</Tabs>