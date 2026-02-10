// 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。

// 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。

// 例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。

// 返回复制链表的头节点。

// 用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：

// val：一个表示 Node.val 的整数。
// random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
// 你的代码 只 接受原链表的头节点 head 作为传入参数。
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  // 边界处理：空链表直接返回 null
  if (!head) return null;

  // 第一步：复制每个原节点，将新节点插入到原节点的后面（构建交错链表）
  // 最终效果：原1 -> 新1 -> 原2 -> 新2 -> 原3 -> 新3
  for (let cur = head; cur; cur = cur.next.next) {
    // 新建一个与 cur 值相同的新节点，新节点的 next 指向 cur 原本的 next
    cur.next = new _Node(cur.val, cur.next, null);
    // cur 推进两步（跳过新节点，指向下一个原节点）
  }

  // 第二步：复制 random 指针（利用交错链表的特性，快速找到新节点的 random 指向）
  // 核心：原节点 cur 的 random 对应新节点 cur.next.random，就是 cur.random.next（原 random 节点的下一个新节点）
  for (let cur = head; cur; cur = cur.next.next) {
    // 仅当原节点 cur 有 random 指针时，才复制（避免 null.next 报错）
    if (cur.random) {
      // 新节点（cur.next）的 random = 原节点 random 对应的新节点（cur.random.next）
      cur.next.random = cur.random.next;
    }
  }

  // 第三步：分离交错链表，得到独立的新链表，同时恢复原链表的结构
  const dummy = new _Node(); // 哨兵节点，用于构建新链表
  let tail = dummy; // 新链表的尾指针，用于追加新节点

  for (let cur = head; cur; cur = cur.next, tail = tail.next) {
    const copy = cur.next; // 取出当前原节点对应的新节点
    tail.next = copy; // 将新节点追加到新链表的末尾
    cur.next = copy.next; // 恢复原节点的 next 指针（跳过新节点，恢复原链表结构）
  }

  // 返回新链表的有效头节点
  return dummy.next;
};