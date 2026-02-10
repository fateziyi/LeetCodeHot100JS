// 给定一个二叉树 root ，返回其最大深度。

// 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 1. 边界条件：如果当前节点为 null（空节点/叶子节点的子节点），深度为 0
  if (root === null) {
    return 0;
  }
  // 2. 递归计算左子树的最大深度
  const lDepth = maxDepth(root.left);
  // 3. 递归计算右子树的最大深度
  const rDepth = maxDepth(root.right);
  // 4. 当前节点的深度 = 左右子树深度的最大值 + 1（+1 是因为要算上当前节点这一层）
  return Math.max(lDepth, rDepth) + 1;
};