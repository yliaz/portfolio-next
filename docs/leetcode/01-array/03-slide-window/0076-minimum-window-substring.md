---
index: 76
title: 76. 最小覆盖子串
description: 最小覆盖子串
icon: leetcode
date: 2022-04-20
category:
  - 力扣刷题
tag:
  - 力扣-数组
---

::: danger <a href="https://leetcode.cn/problems/minimum-window-substring/" target="_blank">最小覆盖子串</a> <Badge text="困难" type="danger"/>

给你一个字符串 `s` 、一个字符串 `t` 。返回 `s` 中涵盖 `t` 所有字符的最小子串。如果 `s` 中不存在涵盖 `t` 所有字符的子串，则返回空字符串 `""` 。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1

```
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
```

:::

::: code-group-item 示例2

```
输入：s = "a", t = "a"
输出："a"
```

:::

::: code-group-item 示例3

```
输入：s = "a", t = "aa"
输出：""
解释：t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。
```

:::

::::

## 想法

好难🤯！

第一反应肯定是一个滑动窗口，但是细节很多，看了一些其他人的解法慢慢有了一些思路。

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function minWindow(s: string, t: string): string {
    // 首先排除完全不可能找到的情况
    if (t.length > s.length) {
      return "";
    }
    let result = ""  // 存放结果的字符串
    let leftIndex = 0, rightIndex = 0  // 双指针分别在滑动窗口的首尾
    let tempStr = ""  // 滑动窗口内的子字符串
    let records = {}  // 记录 t 中各个字符的出现频率
    let tempCount = t.length  // 用来提示 tempStr 是否已经满足条件，目的是提高判断效率
    
    // 统计 t 中各个字符出现的频率，记录到 records 中
    for (let i = 0; i< t.length; i++) {
        if (records[t[i]] !== undefined) {
            records[t[i]]++
        } else {
            records[t[i]] = 1
        }
    }

    // 滑动窗口
    while(rightIndex < s.length) {
        const rightChar = s[rightIndex]
        tempStr += rightChar

        // 如果操作的字符在 t 中，则，调整 records 和 tempCount
        if (records[rightChar] !== undefined) {
            records[rightChar]--
            if (records[rightChar] >= 0) {
                tempCount--
            }
        }

        // 如果满足了条件，则从左侧开始缩短滑动窗口
        while(tempCount === 0) {
            // 找到了更短的符合条件的字符串，则替换 result
            if (tempStr.length < result.length || result.length === 0) {
                result = tempStr
            }

            // 如果操作的字符在 t 中，则，调整 records 和 tempCount
            const leftChar = s[leftIndex]
            if (records[leftChar] !== undefined) {
                records[leftChar]++
                if (records[leftChar] > 0) {
                    tempCount++
                }
            }
            tempStr = tempStr.slice(1)  // 缩短字符串
            leftIndex++
        }
        rightIndex++
    }
    return result
};
```

:::

::::