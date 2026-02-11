// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // 定义一个全局（相对于dfs函数）的头节点指针，初始为null
  let head = null;

  // 定义深度优先遍历函数，采用 右 -> 左 -> 根 的后序遍历顺序
  function dfs(node) {
    // 递归终止条件：节点为空则直接返回
    if (node === null) {
      return;
    }

    // 1. 先递归处理右子树（后序遍历的第一步）
    dfs(node.right);
    // 2. 再递归处理左子树（后序遍历的第二步）
    dfs(node.left);

    // 3. 处理当前节点（后序遍历的第三步）
    node.left = null; // 左子节点置空，符合链表要求
    node.right = head; // 把当前节点的右指针指向链表的头节点（头插法核心）
    head = node; // 更新链表头节点为当前节点
  }

  // 从根节点开始递归处理
  dfs(root);
};