---
title: 26. 删除有序数组中的重复项
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 26. 删除有序数组中的重复项

<BrowserWindow url='https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/'>

  给你一个升序排列的数组 `nums` ，请你原地删除重复出现的元素，使每个元素只出现一次 ，返回删除后数组的新长度。元素的相对顺序应该保持一致 。

  由于在某些语言中不能改变数组的长度，所以必须将结果放在数组 `nums` 的第一部分。更规范地说，如果在删除重复项之后有 `k` 个元素，那么 `nums` 的前 `k` 个元素应该保存最终结果。

  将最终结果插入 `nums` 的前 `k` 个位置后返回 `k` 。

  不要使用额外的空间，你必须在__原地__修改输入数组 并在使用 `O(1)` 额外空间的条件下完成。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：nums = [1,1,2]
    输出：2, nums = [1,2,_]
    解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：nums = [0,0,1,1,1,2,2,3,3,4]
    输出：5, nums = [0,1,2,3,4]
    解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

  </TabItem>
</Tabs>

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
function removeDuplicates(nums: number[]): number {
    // 因为是升序数组，所以重复项都是相邻的，用双指针法遍历一次即可
    let slowIndex = 0
    let target = nums[slowIndex]
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        // 快慢指针相等，说明是重复值，则不操作，只将快指针后移一位
        // 快慢指针不相等，说明有了新的值，则将慢指针后移一位，并把快指针指的值赋给慢指针所在位置
        if (nums[slowIndex] !== nums[fastIndex]) {
            target = nums[fastIndex]
            nums[++slowIndex] = target
        }
    }
    return slowIndex + 1
};
```

  </TabItem>
</Tabs>