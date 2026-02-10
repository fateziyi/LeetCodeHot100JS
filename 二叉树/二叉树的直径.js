// 给你一棵二叉树的根节点，返回该树的 直径 。

// 二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。

// 两节点之间路径的 长度 由它们之间边数表示。
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  // 初始化最大直径为0，用全局变量（闭包）记录遍历过程中的最大值
  let ans = 0;

  // 定义DFS函数：返回以当前node为根的子树的最大深度（以边数计）
  function dfs(node) {
    // 递归终止条件：空节点的深度为-1（关键细节，下面会解释）
    if (node === null) {
      return -1; // 对于叶子来说，链长就是 -1+1=0
    }
    // 递归计算左子树的最大深度（+1是因为当前节点到左子节点有一条边）
    const lLen = dfs(node.left) + 1;
    // 递归计算右子树的最大深度
    const rLen = dfs(node.right) + 1;
    // 更新最大直径：以当前节点为中心的路径长度 = 左深度 + 右深度
    ans = Math.max(ans, lLen + rLen);
    // 返回当前子树的最大深度（供父节点计算使用）
    return Math.max(lLen, rLen);
  }

  // 从根节点开始DFS遍历
  dfs(root);
  // 返回最终的最大直径
  return ans;
};