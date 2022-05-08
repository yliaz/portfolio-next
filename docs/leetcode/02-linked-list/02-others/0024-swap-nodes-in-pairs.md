---
title: 24. 两两交换链表中的节点
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 24. 两两交换链表中的节点

<BrowserWindow url='https://leetcode-cn.com/problems/swap-nodes-in-pairs/'>

  给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：head = [1,2,3,4]
    输出：[2,1,4,3]

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：head = []
    输出：[]

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：head = [1]
    输出：[1]

  </TabItem>
</Tabs>

## 思路

链表的问题，画图是最好的解决办法。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
// 双指针
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

  </TabItem>
</Tabs>