// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。
// 平衡二叉树 是指该树所有节点的左右子树的高度相差不超过 1。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 1. 定义递归DFS函数：参数是当前子数组的左右边界 [left, right]
  function dfs(left, right) {
    // 2. 边界条件：左边界 > 右边界，说明当前子数组为空，返回null（空节点）
    if (left > right) {
      return null;
    }
    // 3. 选当前子数组的中间下标作为根节点（保证左右子树节点数差≤1，平衡）
    const m = Math.floor((left + right) / 2);
    // 4. 构建当前根节点：
    //    - 值为nums[m]（中间元素）；
    //    - 左子树：递归处理左半数组 [left, m-1]；
    //    - 右子树：递归处理右半数组 [m+1, right]；
    return new TreeNode(nums[m], dfs(left, m - 1), dfs(m + 1, right));
  }
  // 5. 启动递归：处理整个数组，边界是 [0, nums.length-1]
  return dfs(0, nums.length - 1);
}