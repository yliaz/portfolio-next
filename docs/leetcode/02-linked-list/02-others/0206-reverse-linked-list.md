---
title: 206. 反转链表
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 206. 反转链表

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/reverse-linked-list'>

  给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。  

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：head = [1,2,3,4,5]
    输出：[5,4,3,2,1]


  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：head = [1,2]
    输出：[2,1]

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：head = []
    输出：[]

  </TabItem>
</Tabs>

## 想法

注意节点操作顺序

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

// 双指针法
function reverseList(head: ListNode | null): ListNode | null {
    let preNode = null, curNode = head
    while(curNode) {
        const tempNode = curNode.next
        curNode.next = preNode
        preNode = curNode
        curNode = tempNode
    }
    return preNode
};
```

  </TabItem>
  <TabItem value="ts2" label="TypeScript 2">

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

// 递归法
function reverseList(head: ListNode | null): ListNode | null {
    function reverse(preNode: ListNode | null, curNode: ListNode | null) : ListNode | null {
        if (curNode === null) {
            return preNode
        } else {
            const tempNode = curNode.next
            curNode.next = preNode
            preNode = curNode
            curNode = tempNode
        }
        return reverse(preNode, curNode)
    }
    return reverse(null, head)
};
```

  </TabItem>
</Tabs>