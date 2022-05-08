---
title: 844. 比较含退格的字符串
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 844. 比较含退格的字符串

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/backspace-string-compare/'>

  给定 `s` 和 `t` 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 `true` 。`#` 代表退格字符。

  注意：如果对空文本输入退格字符，文本继续为空。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：s = "ab#c", t = "ad#c"
    输出：true
    解释：s 和 t 都会变成 "ac"。

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：s = "ab##", t = "c#d#"
    输出：true
    解释：s 和 t 都会变成 ""。

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：s = "a#c", t = "b"
    输出：false
    解释：s 会变成 "c"，但 t 仍然是 "b"。

  </TabItem>
</Tabs>

## 想法

最容易想到的就是双指针，但是这题还有一个 trick 方法。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts1" label="TypeScript 1">

```ts
function backspaceCompare(s: string, t: string): boolean {
    function stringProcessor(str: string): string {
        let result = ''
        let slowIndex = 0
        for (let fastIndex = 0; fastIndex < str.length; fastIndex++) {
            if (str[fastIndex] === '#') {
                if (slowIndex > 0) {
                    result = result.slice(0, -1)
                }
            } else {
                result = result + str[fastIndex]
                slowIndex++
            }
        }
        return result
    }
    return stringProcessor(s) === stringProcessor(t)
};
```

  </TabItem>

  <TabItem value="ts2" label="TypeScript 2">

```ts
function backspaceCompare(s: string, t: string): boolean {
    // 从尾部开始遍历
    let sIndex = s.length - 1
    let tIndex = t.length - 1
    let sSkip = 0, tSkip = 0
    while(sIndex >= 0 || tIndex >= 0) {
        while(sIndex >= 0) {
            if (s[sIndex] === '#') {
                sSkip++
                sIndex--
            } else if (sSkip > 0) {
                sSkip--
                sIndex--
            } else {
                break
            }
        }
        while(tIndex >= 0) {
            if (t[tIndex] === '#') {
                tSkip++
                tIndex--
            } else if (tSkip > 0) {
                tSkip--
                tIndex--
            } else {
                break
            }
        }
        if (s[sIndex] !== t[tIndex]) {
            return false
        }
        sIndex--
        tIndex--
    }
    return true
};
```

  </TabItem>
</Tabs>