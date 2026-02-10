// 给你一个链表的头节点 head ，判断链表中是否有环。

// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

// 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val; // 节点存储的数值
 *     this.next = null; // 指向下一个节点的指针，默认null（链表末尾）
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 1. 循环遍历链表：只要当前节点不为null，就继续遍历（无环链表最终会走到null）
  while (head) {
    // 2. 判断当前节点是否已有访问标记 flag
    if (head.flag) {
      // 2.1 若有标记：说明该节点之前已经被遍历过，链表存在环，直接返回true
      return true
    } else {
      // 2.2 若无标记：给当前节点添加访问标记 flag = true
      head.flag = true
      // 2.3 推进指针，遍历下一个节点
      head = head.next
    }
  }
  // 3. 循环正常结束（走到了null节点）：说明链表无环，返回false
  return false
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 边界条件：空链表或只有一个节点，无环
  if (head === null || head.next === null) return false;

  // 初始化快慢指针：慢指针从head出发，快指针从head.next出发（避免初始相等）
  let slow = head;
  let fast = head.next;

  // 循环条件：快指针和快指针的下一个节点不为空（避免空指针报错）
  while (fast !== null && fast.next !== null) {
    // 指针相遇，说明有环
    if (slow === fast) return true;
    // 慢指针走1步，快指针走2步
    slow = slow.next;
    fast = fast.next.next;
  }
  // 循环结束，快指针到终点，无环
  return false;
};