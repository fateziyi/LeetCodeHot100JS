// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 递归终止条件：
  // 1. root为null → 遍历到叶子节点的子节点，无结果
  // 2. root等于p/q → 找到目标节点，直接返回（这是关键，找到一个就不再往下找）
  if (root === null || root === p || root === q) {
    return root;
  }

  // 递归查找左子树中是否有p/q
  const left = lowestCommonAncestor(root.left, p, q);
  // 递归查找右子树中是否有p/q
  const right = lowestCommonAncestor(root.right, p, q);

  // 核心判断：左右子树都找到结果 → 当前节点是最近公共祖先
  if (left && right) {
    return root;
  }

  // 三元逻辑简化：
  // - 左有结果返回左，右有结果返回右，都没有返回null
  // ?? 是ES2020的空值合并运算符，等价于 left ? left : right
  return left ?? right;
};