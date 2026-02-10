// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 1. 初始化哨兵（哑节点）dummy，不存储有效数据，仅用于简化链表头节点的处理
  // 亮点：无需像上一份代码那样判断 head 是否为 null，统一处理所有节点的追加
  const dummy = new ListNode(); // 此时 dummy.val=0，dummy.next=null
  let cur = dummy; // 游标指针，用于遍历/构建结果链表（初始指向哨兵节点）
  let carry = 0; // 存储加法过程中的进位（初始为0）

  // 2. 循环条件优化：l1 || l2 || carry
  // 亮点：相比上一份代码，额外加入 carry 判断，直接处理「循环结束后仍有进位」的场景，无需单独写 if 判断
  // 只要有一个条件满足，就继续计算（链表未遍历完 或 还有进位未处理）
  while (l1 || l2 || carry) {
    // 3. 优化进位计算：直接将节点值累加到 carry 中，无需单独定义 n1、n2
    if (l1) {
      carry += l1.val; // 把 l1 当前节点值加到进位中（等价于 上一份代码的 n1 + carry）
      l1 = l1.next; // 推进 l1 指针，遍历下一个节点
    }
    if (l2) {
      carry += l2.val; // 把 l2 当前节点值加到进位中（等价于 上一份代码的 n2 + carry）
      l2 = l2.next; // 推进 l2 指针，遍历下一个节点
    }

    // 4. 构建结果链表：一行代码完成「追加新节点 + 更新游标指针」
    // 拆解：等价于 cur.next = new ListNode(carry % 10); 然后 cur = cur.next;
    // 新节点的值：carry 的个位（当前位的计算结果）
    cur = cur.next = new ListNode(carry % 10);

    // 5. 更新进位：取 carry 的十位，作为下一轮计算的进位（向下取整）
    carry = Math.floor(carry / 10);
  }

  // 6. 返回结果链表的头节点
  // 亮点：哨兵节点 dummy 的 next 指向第一个有效结果节点，无需单独记录 head
  return dummy.next;
};