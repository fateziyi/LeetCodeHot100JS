// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 严格小于 当前节点的数。
// 节点的右子树只包含 严格大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 定义递归函数：校验以root为根的子树是否是BST，且所有节点值在(minValue, maxValue)范围内
  function dfs(root, minValue, maxValue) {
    // 递归终止条件：空节点是合法的BST
    if (!root) return true
    // 核心校验：当前节点值超出[minValue, maxValue]范围（含等于），直接返回false
    if (root.val <= minValue || root.val >= maxValue) return false
    // 递归校验左、右子树：
    // 左子树的合法范围是 (minValue, root.val)（左子树所有节点必须小于当前节点）
    // 右子树的合法范围是 (root.val, maxValue)（右子树所有节点必须大于当前节点）
    // 只有左右子树都合法，当前子树才合法
    return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
  }
  // 初始调用：根节点的合法范围是(-∞, +∞)（无边界）
  return dfs(root, -Infinity, Infinity)
};