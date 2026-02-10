// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 1. 递归终止条件：如果当前节点为空（null），直接返回空
  // 这是递归的边界，避免访问空节点的属性（left/right）导致报错
  if (!root) return root

  // 2. 递归处理右子树，得到翻转后的右子树根节点
  let right = invertTree(root.right)
  // 3. 递归处理左子树，得到翻转后的左子树根节点
  let left = invertTree(root.left)

  // 4. 交换当前节点的左右子节点：把翻转后的左子树挂到右节点，翻转后的右子树挂到左节点
  root.right = left
  root.left = right

  // 5. 返回当前处理完的节点（作为上层节点的子节点）
  return root
};