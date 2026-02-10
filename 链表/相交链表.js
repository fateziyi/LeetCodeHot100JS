// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
// 具体算法如下：

// 初始化两个指针 p=headA, q=headB。
// 不断循环，直到 p=q。
// 每次循环，p 和 q 各向后走一步。具体来说，如果 p 不是空节点，那么更新 p 为 p.next，否则更新 p 为 headB；如果 q 不是空节点，那么更新 q 为 q.next，否则更新 q 为 headA。
// 循环结束时，如果两条链表相交，那么此时 p 和 q 都在相交的起始节点处，返回 p；如果两条链表不相交，那么 p 和 q 都走到空节点，所以也可以返回 p，即空节点。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 1. 初始化两个指针，分别指向两个链表的头节点
  let p = headA, q = headB;

  // 2. 循环条件：两个指针不相等（未相遇）
  while (p !== q) {
    // 3. 指针 p：有节点则走下一步，无则跳转到 B 的头节点
    p = p ? p.next : headB;
    // 4. 指针 q：有节点则走下一步，无则跳转到 A 的头节点
    q = q ? q.next : headA;
  }

  // 5. 循环结束时，p===q：要么是交点，要么都是 null
  return q; // 也可以 return p，结果一致
};