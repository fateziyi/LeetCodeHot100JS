// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 1. 初始化结果数组，用于存储遍历后的节点值
  const res = []
  // 2. 初始化栈，用于暂存待处理的节点（模拟递归栈）
  const stack = []
  // 3. 循环条件：当前节点不为空 或 栈中有节点（还有未处理的节点）
  while (root || stack.length) {
    // 4. 内层循环：沿着左子树一直走，把所有左节点压入栈
    //    这一步对应递归中“遍历左子树”的逻辑
    while (root) {
      stack.push(root) // 压入当前节点
      root = root.left // 移动到左子节点
    }
    // 5. 此时root为null，弹出栈顶节点（最左的节点）
    root = stack.pop()
    // 6. 收集该节点的值（对应递归中“访问根节点”的逻辑）
    res.push(root.val)
    // 7. 处理该节点的右子树（对应递归中“遍历右子树”的逻辑）
    root = root.right
  }
  // 8. 返回最终的遍历结果
  return res
};