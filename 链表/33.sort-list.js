// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
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
const merge = (head1, head2) => {
  // 初始化哨兵节点 dummyHead，简化新链表构建
  const dummyHead = new ListNode(0);
  // 三个指针：temp（新链表尾指针，用于追加节点）、temp1/temp2（遍历两个输入链表）
  let temp = dummyHead, temp1 = head1, temp2 = head2;

  // 双指针遍历，按升序合并两个有序链表
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp2 = temp2.next;
    }
    // 推进新链表尾指针
    temp = temp.next;
  }

  // 拼接剩余未遍历完的节点（其中一个链表已为空，直接拼接另一个）
  if (temp1 !== null) {
    temp.next = temp1;
  } else if (temp2 !== null) {
    temp.next = temp2;
  }

  // 返回合并后的有序链表头节点
  return dummyHead.next;
};

var sortList = function (head) {
  // 边界处理：空链表直接返回
  if (head === null) {
    return head;
  }

  // 1. 统计链表总长度 length
  let length = 0;
  let node = head;
  while (node !== null) {
    length++;
    node = node.next;
  }

  // 2. 初始化哨兵节点 dummyHead，next 指向原链表头，用于拼接排序后的子链表
  const dummyHead = new ListNode(0, head);

  // 3. 步长循环：subLength 从 1 开始，每次左移 1 位（等价于 *=2），直到 subLength >= length
  //    subLength 表示当前参与合并的子链表长度
  for (let subLength = 1; subLength < length; subLength <<= 1) {
    // 3.1 初始化两个指针，用于拼接本轮合并后的子链表
    let prev = dummyHead; // 本轮排序后链表的尾指针，用于追加新的合并结果
    let curr = dummyHead.next; // 本轮遍历的起始节点，用于分割子链表

    // 4. 本轮步长内，循环分割并合并两两子链表
    while (curr !== null) {
      // 4.1 分割第一个长度为 subLength 的子链表 head1
      let head1 = curr;
      // 循环 subLength-1 步，找到 head1 的最后一个节点（确保子链表长度为 subLength）
      for (let i = 1; i < subLength && curr.next !== null; i++) {
        curr = curr.next;
      }

      // 4.2 分割第二个长度为 subLength 的子链表 head2
      let head2 = curr.next; // head2 是 head1 之后的节点
      curr.next = null; // 断开 head1 和 head2 的连接，让 head1 成为独立链表
      curr = head2; // 移动 curr 到 head2，准备分割 head2

      // 循环 subLength-1 步，找到 head2 的最后一个节点（若节点足够）
      for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
        curr = curr.next;
      }

      // 4.3 记录下一轮待处理的链表头 next（跳过当前的 head1 和 head2）
      let next = null;
      if (curr !== null) {
        next = curr.next; // next 是 head2 之后的节点，即下一轮的起始节点
        curr.next = null; // 断开 head2 和 next 的连接，让 head2 成为独立链表
      }

      // 4.4 合并 head1 和 head2，得到有序子链表
      const merged = merge(head1, head2);

      // 4.5 拼接：将合并后的子链表追加到本轮排序链表的末尾
      prev.next = merged;
      // 找到 prev 的新尾节点（因为 merge 没有返回尾节点，需要遍历）
      while (prev.next !== null) {
        prev = prev.next;
      }

      // 4.6 移动 curr 到 next，准备处理下一组子链表
      curr = next;
    }
  }

  // 5. 返回排序后的完整链表头节点
  return dummyHead.next;
};