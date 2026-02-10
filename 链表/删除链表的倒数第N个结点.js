// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 1. 初始化哨兵节点 dummy，值为0，next 直接指向原链表头节点 head
  // 核心亮点：解决「删除头节点」的边界问题（若 n 等于链表长度，倒数第 n 个就是头节点）
  // 无需额外判断是否删除头节点，统一通过「修改前驱节点的 next」实现删除
  const dummy = new ListNode(0, head);

  // 2. 初始化左右双指针，均指向哨兵节点 dummy
  let left = dummy;
  let right = dummy;

  // 3. 让右指针先提前走 n 步，拉开左右指针的间距为 n
  // 循环 n 次，每次 right 向前移动一步
  while (n--) {
    right = right.next;
  }

  // 4. 让左右指针同步向前移动，直到右指针走到链表末尾（right.next 为 null）
  // 此时：右指针指向链表最后一个节点，左指针指向「倒数第 n 个节点的前驱节点」
  while (right.next) {
    left = left.next;
    right = right.next;
  }

  // 5. 执行删除操作：跳过左指针的下一个节点（即倒数第 n 个节点）
  // 原理：修改前驱节点的 next 指针，直接指向待删除节点的下一个节点
  left.next = left.next.next;

  // 6. 返回删除后的链表有效头节点（哨兵节点的 next 指向新链表头）
  return dummy.next;
};