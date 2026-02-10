// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

// 不允许修改 链表。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 1. 初始化快慢指针，均指向头节点
  let slow = head, fast = head;

  // 2. 循环遍历：快指针每次走2步，慢指针每次走1步（判断是否有环）
  // 循环条件：fast && fast.next （避免 fast.next 为 null 时，fast.next.next 报错）
  while (fast && fast.next) {
    // 2.1 慢指针走1步
    slow = slow.next;
    // 2.2 快指针走2步
    fast = fast.next.next;

    // 2.3 快慢指针相遇：说明存在环，开始寻找环入口
    if (fast === slow) { // 相遇节点
      // 3. 核心逻辑：头节点 head 和 相遇节点 slow 同步移动（每次走1步）
      while (slow !== head) {
        slow = slow.next;
        head = head.next;
      }
      // 4. 两者相遇时，即为环的入口节点，返回该节点
      return slow;
    }
  }

  // 5. 循环正常结束（fast 或 fast.next 为 null）：说明无环，返回 null
  return null;
};