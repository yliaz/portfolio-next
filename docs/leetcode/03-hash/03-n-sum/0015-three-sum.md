---
title: 15. 三数之和
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 15. 三数之和

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/3sum/'>

  给你一个包含 `n` 个整数的数组 `nums`，判断 `nums` 中是否存在三个元素 `a`，`b`，`c` ，使得 `a + b + c = 0` ？请你找出所有和为 `0` 且不重复的三元组。

  注意：答案中不可以包含重复的三元组。  

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：nums = [-1,0,1,2,-1,-4]
    输出：[[-1,-1,2],[-1,0,1]]

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：nums = []
    输出：[]

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：nums = [0]
    输出：[]

  </TabItem>
</Tabs>

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function threeSum(nums: number[]): number[][] {
    let result: number[][] = []
    const newNums = nums.sort((a, b) => a - b)
    for (let i = 0; i < newNums.length - 2; i++) {
        if (newNums[i] > 0) {
            break;
        }
        if (i > 0 && newNums[i] === newNums[i - 1]) continue
        let left = i + 1
        let right = newNums.length - 1
        while(left < right) {
            const sum = newNums[i] + newNums[left] + newNums[right]
            if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            } else {
                result.push([newNums[i], newNums[left], newNums[right]])
                left++
                right--
                while(left < right && newNums[left] === newNums[left - 1]) {
                    left++
                }
                while(left < right && newNums[right] === newNums[right + 1]) {
                    right--
                }
            }
        }
    }

    return result
};
```

  </TabItem>
</Tabs>