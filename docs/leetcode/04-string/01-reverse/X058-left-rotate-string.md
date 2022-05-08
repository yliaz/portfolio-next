---
title: 剑指 Offer 58. 左旋转字符串
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 剑指 Offer 58. 左旋转字符串

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/'>

  字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串 `"abcdefg"` 和数字 `2`，该函数将返回左旋转两位得到的结果`"cdefgab"`。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入: s = "abcdefg", k = 2
    输出: "cdefgab"

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入: s = "lrloseumgh", k = 6
    输出: "umghlrlose"

  </TabItem>
</Tabs>

## 思路

偷懒用 API 大法。如果要追求 O(1) 的空间复杂度，可以通过三次反转字符串实现，代码都在下面。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts1" label="TypeScript 1">

```ts
// API 大法
function reverseLeftWords(s: string, n: number): string {
    return s.slice(n) + s.slice(0, n)
};
```

  </TabItem>

  <TabItem value="ts2" label="TypeScript 2">

```ts
// 三次反转，空间复杂度为 O(1)
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

  </TabItem>
</Tabs>