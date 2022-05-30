---
index: 19
title: 19. 删除链表的倒数第 N 个结点
description: 删除链表的倒数第 N 个结点
icon: leetcode
date: 2022-04-28
category:
  - 力扣刷题
tag:
  - 力扣-链表
---

::: warning <a href="https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/" target="_blank">删除链表的倒数第 N 个结点</a> <Badge text="中等" type="warning"/>

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/remove_ex1.jpg)

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

:::

::: code-group-item 示例2

```
输入：head = [1], n = 1
输出：[]
```

:::

::: code-group-item 示例3

```
输入：head = [1,2], n = 1
输出：[1]
```

:::

::::


## 思路

双指针

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    head = new ListNode(0, head)  // 增加虚拟头节点
    let slowNode = head, fastNode = head
    // 先让 n 步
    for(let i = 0; i < n; i++) {
        fastNode = fastNode.next
    }
    // 然后再追
    while(fastNode && fastNode.next) {
        fastNode = fastNode.next
        slowNode = slowNode.next
    }
    slowNode.next = slowNode.next.next  // 删除节点
    return head.next
};
```

:::

::::