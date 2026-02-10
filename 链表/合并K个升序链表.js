// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 初始化哨兵节点 dummy，简化新链表的头节点处理，避免边界判断
  const dummy = new ListNode();
  // cur 指针：始终指向新链表的末尾，用于追加节点
  let cur = dummy;

  // 双指针遍历两个升序链表，按值大小依次追加到新链表
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next; // 推进 list1 指针，遍历下一个节点
    } else {
      cur.next = list2;
      list2 = list2.next; // 推进 list2 指针，遍历下一个节点
    }
    cur = cur.next; // 推进新链表尾指针
  }

  // 拼接剩余未遍历完的节点（其中一个链表已空，直接拼接另一个链表的剩余部分）
  cur.next = list1 ? list1 : list2;

  // 返回合并后的升序链表头节点（哨兵节点的 next 指向有效头节点）
  return dummy.next;
};

var mergeKLists = function (lists) {
  // 1. 获取链表数组的长度 m
  const m = lists.length;

  // 2. 边界处理：空数组直接返回 null（无链表可合并）
  if (m === 0) {
    return null;
  }

  // 3. 步长循环：step 从 1 开始，每次翻倍（step *= 2），直到 step >= m
  //    step 表示「本轮合并中，每两个待合并链表之间的间隔」
  for (let step = 1; step < m; step *= 2) {
    // 4. 本轮步长内，循环合并两两链表（i 每次递增 step*2，跳过已合并的链表）
    for (let i = 0; i < m - step; i += step * 2) {
      // 核心：合并 lists[i] 和 lists[i+step]，结果存回 lists[i]（覆盖原链表）
      lists[i] = mergeTwoLists(lists[i], lists[i + step]);
    }
  }

  // 5. 最终，所有链表都合并到 lists[0] 中，返回 lists[0] 即为完整的升序链表
  return lists[0];
};