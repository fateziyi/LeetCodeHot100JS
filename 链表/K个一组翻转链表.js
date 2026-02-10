// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // 第一阶段：统计链表总节点数 n，用于判断是否有足够节点进行分组翻转
  let n = 0;
  for (let cur = head; cur; cur = cur.next) {
    n++; // 遍历链表，累加节点个数
  }

  // 1. 初始化哨兵节点 dummy，值为0，next 指向原链表头节点 head
  // 核心亮点：解决「首组翻转后头节点变更」的边界问题，统一所有分组的前驱节点处理
  const dummy = new ListNode(0, head);
  // 2. 初始化关键指针
  // p0：每一组待翻转节点的「前驱节点」（用于分组翻转后，重连前后分组）
  let p0 = dummy;
  // pre/cur：用于实现单组内的链表翻转（同 206 题「反转链表」、92 题「反转链表 II」）
  let pre = null;
  let cur = head;

  // 第二阶段：k 个一组进行循环处理，只有剩余节点数 ≥ k 时，才进行翻转
  for (; n >= k; n -= k) { // 每处理完一组，剩余节点数 n 减少 k
    // 3. 单组内的链表翻转（翻转当前 k 个节点，同反转链表的核心逻辑）
    for (let i = 0; i < k; i++) {
      // 提前记录 cur 的下一个节点，避免翻转过程中指针丢失
      const nxt = cur.next;
      // 核心：修改 cur 的 next 指针，指向其前驱节点 pre（实现翻转）
      cur.next = pre;
      // 推进 pre 和 cur 指针，准备翻转下一个节点
      pre = cur;
      cur = nxt;
    }

    // 4. 核心：重连当前翻转后的分组，衔接前后链表（最易混淆的步骤）
    // 先记录 p0 的下一个节点（即当前分组翻转前的第一个节点，翻转后成为当前分组的最后一个节点）
    const nxt = p0.next;
    // 步骤1：当前分组的最后一个节点（nxt）的 next 指向 cur（下一组的第一个节点，未翻转）
    p0.next.next = cur;
    // 步骤2：p0 的 next 指向 pre（当前分组翻转后的第一个节点，即原分组的最后一个节点）
    p0.next = pre;
    // 步骤3：更新 p0 为 nxt（当前分组的最后一个节点），作为下一组翻转的前驱节点
    p0 = nxt;
  }

  // 5. 返回翻转后的链表有效头节点（哨兵节点的 next 指向新链表头）
  return dummy.next;
};