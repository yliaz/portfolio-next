---
index: 142
title: 142. 环形链表 II
description: 环形链表 II
icon: leetcode
date: 2022-04-29
category:
  - 力扣刷题
tag:
  - 力扣-链表
---

## 题目

::: warning <a href="https://leetcode-cn.com/problems/linked-list-cycle-ii/" target="_blank">环形链表 II</a> <Badge text="中等" type="warning"/>

给定一个链表的头节点 `head` ，返回链表开始入环的第一个节点。 如果链表无环，则返回 `null`。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 `0` 开始）。如果 `pos` 是 `-1`，则在该链表中没有环。注意：`pos` 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改链表。

:::

## 输入输出

:::: code-group

::: code-group-item 示例1


```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

:::

::: code-group-item 示例2

```
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```

:::

::: code-group-item 示例3

```
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
```

:::

::::

## 想法

用的哈希。

## 代码

:::: code-group

::: code-group-item TypeScript

```ts
function detectCycle(head: ListNode | null): ListNode | null {
    let visited: Set<ListNode> = new Set()
    let tempNode: ListNode = head
    while(tempNode !== null) {
        const size: number = visited.size
        visited.add(tempNode)
        if (size === visited.size) {
            return tempNode
        }
        tempNode = tempNode.next
    }
    return null
};
```

:::

::::