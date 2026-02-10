// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 1. 初始化指针：cur指向原链表头，pre指向null（反转链表的初始尾）
  let cur = head;
  let pre = null;

  // 2. 遍历链表，直到cur走到末尾（null）
  while (cur) {
    // 3. 关键：提前保存cur的下一个节点（避免修改next后丢失后续节点）
    let next = cur.next;
    // 4. 反转当前节点的指向：cur.next 指向pre（前一个节点）
    cur.next = pre;
    // 5. pre指针后移：走到当前节点（成为下一个节点的“前节点”）
    pre = cur;
    // 6. cur指针后移：走到之前保存的next节点
    cur = next;
  }

  // 7. 遍历结束，cur=null，pre是反转后的链表头
  return pre;
};