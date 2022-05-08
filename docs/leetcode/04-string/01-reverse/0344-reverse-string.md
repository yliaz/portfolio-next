---
title: 344. 反转字符串
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 344. 反转字符串

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/reverse-string/'>

  编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

  不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 `O(1)` 的额外空间解决这一问题。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：s = ["h","e","l","l","o"]
    输出：["o","l","l","e","h"]

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：s = ["H","a","n","n","a","h"]
    输出：["h","a","n","n","a","H"]

  </TabItem>
</Tabs>

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function reverseString(s: string[]): void {
    let left = 0
    let right = s.length - 1
    while(left < right) {
        const temp = s[left]
        s[left++] = s[right]
        s[right--] = temp
    }
};
```

  </TabItem>
</Tabs>