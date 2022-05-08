---
title: 541. 反转字符串 II
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 541. 反转字符串 II

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/reverse-string-ii/'>

  给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

  - 如果剩余字符少于 k 个，则将剩余字符全部反转。
  - 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：s = "abcdefg", k = 2
    输出："bacdfeg"

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：s = "abcd", k = 2
    输出："bacd"

  </TabItem>
</Tabs>

## 思路

主要在于最后一次循环的条件判断

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

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

  </TabItem>
</Tabs>