---
title: 160. 相交链表
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 160. 相交链表

## 题目

<BrowserWindow url='https://leetcode-cn.com/problems/intersection-of-two-linked-lists/'>

  给你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 `null` 。

</BrowserWindow>

## 输入输出

<Tabs groupId="solutions">
  <TabItem value="example1" label="示例1">

    输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
    输出：Intersected at '8'
    解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

  </TabItem>
  <TabItem value="example2" label="示例2">

    输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
    输出：Intersected at '2'
    解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。

  </TabItem>
  <TabItem value="example3" label="示例3">

    输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
    输出：null
    解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。这两个链表不相交，因此返回 null 。

  </TabItem>
</Tabs>

## 想法

用的哈希。这道题描述得太复杂了。。。好像还有双指针的解法，后面补充。

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts1" label="TypeScript 1">

```ts
// 哈希
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let visited = new Set()
    let temp = headA
    while(temp !== null) {
        visited.add(temp)
        temp = temp.next
    }
    temp = headB
    while(temp !== null) {
        if (visited.has(temp)) {
            return temp
        }
        temp = temp.next
    }
    return temp
};
```

  </TabItem>

  <TabItem value="ts2" label="TypeScript 2">

```ts
/**
 * 双指针法
 * 假设 a 为A链表不相交部分长度
 *     b 为B链表不相交部分长度
 *     c 为两个链表相交部分长度
 * 用 tempA 从A链表开始移动，先移动 a + c 长度到末尾，再从B链表开始移动 b 长度
 * 而 tempB 从B链表开始移动，先移动 b + c 长度到末尾，再从A链表开始移动 a 长度
 * 此时他们同时移动了 a + b + c 个长度
 * 如果两个链表不相交，则 c = 0，那么他们应该都在两个链表的末尾，即 tempA = tempB = null
 * 如果两个链表相交，那么他们应该都位于交点处
 * 因此，此时返回任意一个指针指向的节点都可以，相交则为交点，不相交则为 null
 * 妙极！
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) {
        return null
    }
    let tempA = headA, tempB = headB
    while(tempA !== tempB) {
        tempA = tempA === null ? headB : tempA.next
        tempB = tempB === null ? headA : tempB.next
    }
    return tempA
};
```

  </TabItem>
</Tabs>