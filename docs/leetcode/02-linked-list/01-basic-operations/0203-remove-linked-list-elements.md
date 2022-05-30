---
index: 203
title: 203. 移除链表元素
description: 移除链表元素
icon: leetcode
date: 2022-04-26
category:
  - 力扣刷题
tag:
  - 力扣-链表
---

::: tip <a href="https://leetcode-cn.com/problems/remove-linked-list-elements/" target="_blank">移除链表元素</a> <Badge text="简单" type="tip"/>

给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回新的头节点。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```

:::

::: code-group-item 示例2

```
输入：head = [], val = 1
输出：[]
```

:::

::: code-group-item 示例3

```
输入：head = [7,7,7,7], val = 7
输出：[]
```

:::

::::

## 想法

删除链表中元素。

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
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

:::

::::