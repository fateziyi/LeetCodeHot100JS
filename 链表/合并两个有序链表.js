// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 1. 初始化哨兵节点 prehead（值为-1，无实际业务意义，仅用于简化链表构建）
  // 亮点：无需判断结果链表是否为空，统一通过 prehead.next 访问有效头节点
  const prehead = new ListNode(-1);

  // 2. 初始化游标指针 prev，初始指向哨兵节点，用于构建结果链表
  let prev = prehead;

  // 3. 循环遍历两个有序链表：仅当 l1 和 l2 都不为 null 时，才进行节点比较
  while (l1 && l2) {
    // 3.1 比较 l1 和 l2 当前节点的值，选择较小（或相等）的节点追加到结果链表
    if (l1.val <= l2.val) {
      prev.next = l1; // 追加 l1 当前节点到结果链表
      l1 = l1.next;   // 推进 l1 指针，遍历 l1 的下一个节点
    } else {
      prev.next = l2; // 追加 l2 当前节点到结果链表
      l2 = l2.next;   // 推进 l2 指针，遍历 l2 的下一个节点
    }
    // 3.2 推进 prev 指针，始终指向结果链表的末尾，为下一次追加节点做准备
    prev = prev.next;
  }

  // 4. 处理剩余未合并的节点：循环结束后，l1 和 l2 最多只有一个非空（已排序）
  // 直接将结果链表的末尾指向这个非空链表，无需逐个追加
  prev.next = l1 === null ? l2 : l1;

  // 5. 返回合并后链表的有效头节点（哨兵节点的 next 指向第一个有效节点）
  return prehead.next;
};