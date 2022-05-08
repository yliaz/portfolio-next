---
title: 203. 移除链表元素
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 203. 移除链表元素

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/remove-linked-list-elements/'>

  给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回新的头节点。 

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

![https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg](https://zhuye-1308301598.file.myqcloud.com/markdown/removelinked-list.jpg)

    输入：head = [1,2,6,3,4,5,6], val = 6
    输出：[1,2,3,4,5]

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：head = [], val = 1
    输出：[]

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：head = [7,7,7,7], val = 7
    输出：[]

  </TabItem>
</Tabs>

## 想法

删除链表中元素。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts1" label="TypeScript 1">

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
    // 增加一个虚拟头节点
    head = new ListNode(0, head)
    let pre = head, cur = head.next // 字面意思
    while(cur) {
        // 如果满足条件，则上一节点的next直接指向当前节点的next，否则继续
        if (cur.val === val) {
            pre.next = cur.next
        } else {
            pre = cur
        }
        cur = cur.next
    }
    return head.next
};
```

  </TabItem>
</Tabs>