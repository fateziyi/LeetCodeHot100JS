// 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  // 哈希表cnt：key=根到当前节点的前缀和，value=该前缀和出现的次数
  const cnt = new Map();
  // 初始化：前缀和为0的情况出现1次（处理s - targetSum = 0的场景）
  cnt.set(0, 1);
  let ans = 0; // 最终统计的路径总数

  // 递归函数：
  // node：当前遍历的节点
  // s：从根到node的父节点的前缀和（node的val尚未加入）
  function dfs(node, s) {
    // 递归终止：节点为空，直接返回
    if (node === null) {
      return;
    }

    // 1. 计算到当前节点的前缀和（父节点前缀和 + 当前节点值）
    s += node.val;

    // 2. 核心：统计以当前节点为终点的符合条件的路径数
    // 找前缀和等于 s - targetSum 的次数，累加到结果中
    ans += cnt.get(s - targetSum) ?? 0;

    // 3. 把当前前缀和加入哈希表（计数+1），供子节点使用
    cnt.set(s, (cnt.get(s) ?? 0) + 1);

    // 4. 递归遍历左右子树
    dfs(node.left, s);
    dfs(node.right, s);

    // 5. 回溯：恢复哈希表（计数-1），退出当前节点时撤销修改
    // 保证哈希表只保存当前路径的前缀和，不影响其他分支
    cnt.set(s, cnt.get(s) - 1);
  }

  // 从根节点开始递归，初始前缀和为0（根的父节点不存在，前缀和为0）
  dfs(root, 0);
  return ans;
};