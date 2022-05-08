---
title: 19. 删除链表的倒数第 N 个结点
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 19. 删除链表的倒数第 N 个结点

<BrowserWindow url='https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/'>

  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：head = [1,2,3,4,5], n = 2
    输出：[1,2,3,5]

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：head = [1], n = 1
    输出：[]

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：head = [1,2], n = 1
    输出：[1]

  </TabItem>
</Tabs>

## 思路

双指针

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
// 双指针
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

  </TabItem>
</Tabs>