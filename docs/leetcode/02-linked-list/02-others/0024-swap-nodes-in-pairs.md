---
index: 24
title: 24. 两两交换链表中的节点
description: 两两交换链表中的节点
icon: leetcode
date: 2022-04-29
category:
  - 力扣刷题
tag:
  - 力扣-链表
---

::: warning <a href="https://leetcode-cn.com/problems/swap-nodes-in-pairs/" target="_blank">两两交换链表中的节点</a> <Badge text="中等" type="warning"/>

给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```

:::

::: code-group-item 示例2

```
输入：head = []
输出：[]
```

:::

::: code-group-item 示例3

```
输入：head = [1]
输出：[1]
```

:::

::::

## 思路

链表的问题，画图是最好的解决办法。

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function swapPairs(head: ListNode | null): ListNode | null {
    head = new ListNode(0, head)
    let tempNode = head
    // 交换 tempNode 后面两个节点
    while(tempNode.next && tempNode.next.next) {
        let curNode = tempNode.next
        tempNode.next = curNode.next
        curNode.next = curNode.next.next
        tempNode.next.next = curNode
        tempNode = curNode
    }
    return head.next
};
```

:::

::::