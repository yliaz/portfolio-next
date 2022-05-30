---
index: 206
title: 206. 反转链表
description: 反转链表
icon: leetcode
date: 2022-05-01
category:
  - 力扣刷题
tag:
  - 力扣-链表
---

::: tip <a href="https://leetcode-cn.com/problems/reverse-linked-list" target="_blank">环形链表 II</a> <Badge text="简单" type="tip"/>

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。  

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

:::

::: code-group-item 示例2

```
输入：head = [1,2]
输出：[2,1]
```

:::

::: code-group-item 示例3

```
输入：head = []
输出：[]
```

:::

::::

## 想法

注意节点操作顺序

## 代码

:::: code-group

::: code-group-item TypeScript 双指针法

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

:::

::: code-group-item TypeScript 递归法

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

:::

::::