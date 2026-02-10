// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
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
var swapPairs = function (head) {
  // 1. 初始化哨兵节点 dummy，值为0，next 直接指向原链表头节点 head
  // 核心亮点：解决「交换头节点」的边界问题，同时简化每一轮交换的前驱节点处理
  const dummy = new ListNode(0, head);

  // 2. 初始化两个指针，用于标记每一轮交换的起始位置
  // node0：每一轮交换的「前驱节点」（当前要交换的两个节点的前一个节点）
  // node1：每一轮交换的「第一个节点」
  let node0 = dummy;
  let node1 = head;

  // 3. 循环条件：至少有两个节点可以交换（node1 存在 且 node1.next 存在）
  // 若节点数为奇数，最后一个节点（node1）无后续节点，循环终止，保持原位置
  while (node1 && node1.next) {
    // 4. 提前记录后续节点，避免交换过程中指针丢失（关键步骤，不能省略）
    // node2：每一轮交换的「第二个节点」（与 node1 交换）
    // node3：下一轮交换的「第一个节点」（当前交换完成后，用于推进指针）
    const node2 = node1.next;
    const node3 = node2.next;

    // 5. 核心：三步完成两两节点交换（修改指针指向，实现 node1 和 node2 交换）
    // 步骤1：让前驱节点 node0 的 next 指向 node2（原本指向 node1），实现 0->2
    node0.next = node2;
    // 步骤2：让 node2 的 next 指向 node1（原本指向 node3），实现 2->1
    node2.next = node1;
    // 步骤3：让 node1 的 next 指向 node3（原本指向 node2），实现 1->3
    node1.next = node3;

    // 6. 推进指针，准备下一轮交换
    // node0 更新为当前轮的 node1（下一轮交换的前驱节点，即当前交换后的第二个节点）
    node0 = node1;
    // node1 更新为提前记录的 node3（下一轮交换的第一个节点）
    node1 = node3;
  }

  // 7. 返回交换后的链表有效头节点（哨兵节点的 next 指向新链表头）
  return dummy.next;
};