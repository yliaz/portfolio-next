---
title: 剑指 Offer 05. 替换空格
sidebar_position: 10005
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 剑指 Offer 05. 替换空格

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/'>

  请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：s = "We are happy."
    输出："We%20are%20happy."

  </TabItem>
</Tabs>

## 思路

由后至前

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function replaceSpace(s: string): string {
    let t = new Array(s.length * 3).fill(0)
    const arr = s.split('')
    let left = arr.length - 1, right = t.length - 1
    while(left >= 0) {
        if (arr[left] === ' ') {
            [t[right - 2], t[right - 1], t[right]] = ['%', '2', '0']
            right -= 3
            left--
        } else {
            t[right--] = arr[left--]
        }
    }
    return t.slice(right + 1, t.length).join('')
};
```

  </TabItem>
</Tabs>