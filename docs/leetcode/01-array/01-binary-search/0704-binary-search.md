---
title: 704. 二分查找
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 704. 二分查找

<BrowserWindow url='https://leetcode-cn.com/problems/binary-search/'>

  给定一个 n 个元素有序的（升序）整型数组 `nums` 和一个目标值 `target`  ，写一个函数搜索 `nums` 中的 `target` ，如果目标值存在返回下标，否则返回 `-1` 。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：nums = [-1,0,3,5,9,12], target = 9
    输出：4
    解释：9 出现在 nums 中并且下标为 4

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：nums = [-1,0,3,5,9,12], target = 2
    输出：-1
    解释：2 不存在 nums 中因此返回 -1

  </TabItem>
</Tabs>

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function search(nums: number[], target: number): number {
    if (nums.length === 0) {
        return -1
    }
    let left = 0;
    let right = nums.length - 1

    // 使用闭区间
    while(left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        const num = nums[mid]
        if (num === target) {
            // 找到了，完活了！
            return mid
        } else if (num < target) {
            // 说明在 mid 的右侧，移动左指针到 mid 右侧+1位置
            left = mid + 1
        } else {
            // 说明在 mid 的左侧，移动右指针到 mid 左侧-1位置
            right = mid - 1
        }
    }
    return -1
};
```

  </TabItem>
</Tabs>