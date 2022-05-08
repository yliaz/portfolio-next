---
title: 18. 四数之和
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 18. 四数之和

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/4sum/'>

  给你一个由 `n` 个整数组成的数组 `nums` ，和一个目标值 `target` 。请你找出并返回满足下述全部条件且不重复的四元组 `[nums[a], nums[b], nums[c], nums[d]]` （若两个四元组元素一一对应，则认为两个四元组重复）：

  - 0 <= a, b, c, d < n
  - a、b、c 和 d 互不相同
  - nums[a] + nums[b] + nums[c] + nums[d] == target

你可以按任意顺序返回答案 。  

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：nums = [1,0,-1,0,-2,2], target = 0
    输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：nums = [2,2,2,2,2], target = 8
    输出：[[2,2,2,2]]

  </TabItem>
</Tabs>

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function fourSum(nums: number[], target: number): number[][] {
    if (nums.length < 4) {
        return []
    }
    nums = nums.sort((a, b) => (a - b))
    let result: number[][] = []
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < nums.length - 2; j++) {
            let left = j + 1
            let right = nums.length - 1
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue
            }
            while(left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum < target) {
                    left++
                } else if (sum > target) {
                    right--
                } else {
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    left++
                    right--
                }
                while(left < right && left > j + 1 && nums[left] === nums[left - 1]) {
                    left++
                }
                while(left < right && nums[right] === nums[right + 1]) {
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