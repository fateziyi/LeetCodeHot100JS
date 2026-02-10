// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 链表的中间结点
function middleNode(head) {
  // 1. 初始化快慢指针，均指向头结点 head
  let slow = head, fast = head;
  // 2. 循环条件：快指针不为 null 且快指针的下一个结点不为 null
  while (fast !== null && fast.next !== null) {
    // 3. 慢指针：一次走 1 步（龟速）
    slow = slow.next;
    // 4. 快指针：一次走 2 步（兔速）
    fast = fast.next.next;
  }
  // 5. 循环结束，慢指针指向链表的中间结点，返回 slow
  return slow;
}

// 反转链表
function reverseList(head) {
  // 1. 初始化前驱结点 pre 为 null，当前结点 cur 为头结点 head
  let pre = null, cur = head;
  // 2. 循环条件：当前结点 cur 不为 null
  while (cur !== null) {
    // 3. 保存当前结点的下一个结点（避免反转后丢失后续链表）
    const nxt = cur.next;
    // 4. 核心：反转当前结点的指针，让 cur.next 指向前驱结点 pre
    cur.next = pre;
    // 5. 更新前驱结点 pre，移动到当前结点 cur
    pre = cur;
    // 6. 更新当前结点 cur，移动到之前保存的下一个结点 nxt
    cur = nxt;
  }
  // 7. 循环结束，pre 指向反转后链表的头结点，返回 pre
  return pre;
}

var isPalindrome = function (head) {
  // 1. 第一步：找中间结点，获取后半部分链表的头结点 mid
  const mid = middleNode(head);
  // 2. 第二步：反转后半部分链表，获取反转后的头结点 head2
  let head2 = reverseList(mid);
  // 3. 第三步：逐一比对前半部分（head）和反转后的后半部分（head2）的元素
  while (head2 !== null) {
    // 3.1 若当前结点值不相等，直接返回 false（不是回文链表）
    if (head.val !== head2.val) { // 不是回文链表
      return false;
    }
    // 3.2 若相等，两个链表的指针各向后移动一步，继续比对
    head = head.next;
    head2 = head2.next;
  }
  // 4. 所有元素比对完成，全部相等，返回 true（是回文链表）
  return true;
};