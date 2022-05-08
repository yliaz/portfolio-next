---
title: 707. 设计链表
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";

# 707. 设计链表

<BrowserWindow url='https://leetcode-cn.com/problems/design-linked-list/'>

  设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：`val` 和 `next`。`val` 是当前节点的值，`next` 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 `prev` 以指示链表中的上一个节点。假设链表中的所有节点都是 `0-index` 的。

  在链表类中实现这些功能：

  - `get(index)`：获取链表中第 `index` 个节点的值。如果索引无效，则返回-1。
  - `addAtHead(val)`：在链表的第一个元素之前添加一个值为 `val` 的节点。插入后，新节点将成为链表的第一个节点。
  - `addAtTail(val)`：将值为 `val` 的节点追加到链表的最后一个元素。
  - `addAtIndex(index,val)`：在链表中的第 `index` 个节点之前添加值为 val  的节点。如果 `index` 等于链表的长度，则该节点将附加到链表的末尾。如果 `index` 大于链表长度，则不会插入节点。如果 `index` 小于0，则在头部插入节点。
  - `deleteAtIndex(index)`：如果索引 `index` 有效，则删除链表中的第 `index` 个节点。

</BrowserWindow>

## 代码

<Tabs groupId="solutions">
  <TabItem value="ts" label="TypeScript">

```ts
class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

class MyLinkedList {
    private size: number
    private head: ListNode | null
    private tail: ListNode | null

    constructor() {
        this.size = 0
        this.head = null
        this.tail = null
    }

    private getNode(index: number): ListNode {
        let curNode: ListNode = new ListNode(0, this.head)  // 虚拟头节点
        for (let i = 0; i <= index; i++) {
            curNode = curNode.next
        }
        return curNode
    }

    // 获取链表中第 index个节点的值
    get(index: number): number {
        // 排除索引无效的情况
        if (index < 0 || index >= this.size) {
            return -1
        }
        const curNode = this.getNode(index)
        return curNode.val
    }

    // 在链表的第一个元素之前添加一个值为 val的节点。插入后，新节点将成为链表的第一个节点。
    addAtHead(val: number): void {
        let newNode: ListNode = new ListNode(val, this.head)  // 新节点
        this.head = newNode  // 变更 head
        // 如果原来的链表为空，则需要同时修改尾指针
        if (!this.tail) {
            this.tail = newNode
        }
        // 不要忘记更新 size
        this.size++
    }

    // 将值为 val 的节点追加到链表的最后一个元素。
    addAtTail(val: number): void {
        let newNode: ListNode = new ListNode(val, null)
        if (!this.head) {
            this.head = newNode  // 原链表为空
        } else {
            this.tail.next = newNode  // 将新节点追加到末尾
        }
        this.tail = newNode
        this.size++
    }

    // 在链表中的第 index 个节点之前添加值为 val的节点。
    addAtIndex(index: number, val: number): void {
        if (index > this.size) {
            return
        } else if (index === this.size) {
            this.addAtTail(val)
        } else if (index <= 0) {
            this.addAtHead(val)
        } else {
            let preNode = this.getNode(index - 1)
            let newNode = new ListNode(val, preNode.next)
            preNode.next = newNode
            this.size++
        }
    }

    // 如果索引 index 有效，则删除链表中的第 index 个节点。
    deleteAtIndex(index: number): void {
        // 排除索引无效的情况
        if (index < 0 || index >= this.size) {
            return
        }
        if (index === 0) {
            // 删除的是头节点
            this.head = this.head.next
            if (index === this.size - 1) {
                this.tail = null
            }
        } else {
            let preNode = this.getNode(index - 1)
            preNode.next = preNode.next.next
            if (index === this.size - 1) {
                this.tail = preNode
            }
        }
        this.size--
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
```

  </TabItem>
</Tabs>