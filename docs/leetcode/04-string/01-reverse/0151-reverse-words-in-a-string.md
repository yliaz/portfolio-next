---
title: 151. 颠倒字符串中的单词
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 151. 颠倒字符串中的单词

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/reverse-words-in-a-string/'>

  给你一个字符串 `s` ，颠倒字符串中单词的顺序。

  单词是由非空格字符组成的字符串。`s` 中使用至少一个空格将字符串中的单词分隔开。

  返回单词顺序颠倒且单词之间用单个空格连接的结果字符串。

  注意：输入字符串 `s` 中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：s = "the sky is blue"
    输出："blue is sky the"

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：s = "  hello world  "
    输出："world hello"
    解释：颠倒后的字符串中不能存在前导空格和尾随空格。

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：s = "a good   example"
    输出："example good a"
    解释：如果两个单词间有多余的空格，颠倒后的字符串需要将单词间的空格减少到仅有一个。 

  </TabItem>
</Tabs>

## 思路

可以 API 大法，但我还是写了个手动的版本。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts1" label="TypeScript 1">

```ts
function reverseWords(s: string): string {
    let arr: string[] = []
    let left = 0
    let right = 0
    while(right < s.length) {
        if (s[left] === ' ') {
            left++
            right = left
        } else if (s[right] === ' ') {
            arr.unshift(s.slice(left, right))
            while(s[right] === ' ') {
                right++
            }
            left = right
        } else {
            right++
        }
    }
    if (left !== right) {
        arr.unshift(s.slice(left, right))
    }
    return arr.join(' ')
};
```

  </TabItem>

  <TabItem value="ts2" label="TypeScript 2">

```ts
function reverseWords(s: string): string {
    return s.trim().split(' ').filter(str => str !== '').reverse().join(' ')
};
```
  </TabItem>
</Tabs>