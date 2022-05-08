---
title: 142. 环形链表 II
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 142. 环形链表 II

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/linked-list-cycle-ii/'>

  给定一个链表的头节点 `head` ，返回链表开始入环的第一个节点。 如果链表无环，则返回 `null`。

  如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 `0` 开始）。如果 `pos` 是 `-1`，则在该链表中没有环。注意：`pos` 不作为参数进行传递，仅仅是为了标识链表的实际情况。

  不允许修改链表。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：head = [3,2,0,-4], pos = 1
    输出：返回索引为 1 的链表节点
    解释：链表中有一个环，其尾部连接到第二个节点。

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：head = [1,2], pos = 0
    输出：返回索引为 0 的链表节点
    解释：链表中有一个环，其尾部连接到第一个节点。

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：head = [1], pos = -1
    输出：返回 null
    解释：链表中没有环。

  </TabItem>
</Tabs>

## 想法

用的哈希。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts1" label="TypeScript 1">

```ts
// 哈希
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
  </TabItem>
</Tabs>