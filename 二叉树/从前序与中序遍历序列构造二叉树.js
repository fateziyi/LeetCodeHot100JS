// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
/**
 * 根据二叉树的前序遍历和中序遍历数组，还原二叉树结构
 * @param {number[]} preorder 前序遍历数组（根→左→右）
 * @param {number[]} inorder 中序遍历数组（左→根→右）
 * @return {TreeNode} 还原后的二叉树根节点
 */
var buildTree = function (preorder, inorder) {
  // 1. 获取数组长度（前序和中序数组长度相同，因为是同一棵树的遍历）
  const n = preorder.length;

  // 2. 构建中序值→索引的哈希表（核心优化）
  // 目的：将“查找根节点在中序数组中的位置”的时间从O(n)降到O(1)
  const indexMap = new Map();
  for (let i = 0; i < n; i++) {
    // 键：中序数组的节点值；值：对应索引（题目保证节点值唯一）
    indexMap.set(inorder[i], i);
  }
  function dfs(preL, preR, inL) {
    // 终止条件：前序区间无元素（左闭右开，preL===preR表示空）
    // 比如preL=2、preR=2，说明当前子树没有节点，返回null
    if (preL === preR) {
      return null;
    }

    // 3. 确定当前子树的根节点值（前序数组第一个元素就是根）
    const rootVal = preorder[preL];
    // 4. 从哈希表中快速获取根节点在中序数组中的索引
    const rootInIdx = indexMap.get(rootVal);
    // 5. 计算左子树的节点数量（中序数组中根左侧的元素数）
    // 比如中序起始inL=0，根索引rootInIdx=1 → 左子树大小=1
    const leftSubtreeSize = rootInIdx - inL;

    // 6. 递归构建左子树
    // 前序区间：[preL+1, preL+1+leftSubtreeSize) → 根的下一个元素开始，长度为左子树大小
    // 中序区间：[inL, rootInIdx) → 从inL到根的前一个位置（左闭右开）
    const leftChild = dfs(preL + 1, preL + 1 + leftSubtreeSize, inL);

    // 7. 递归构建右子树
    // 前序区间：[preL+1+leftSubtreeSize, preR) → 左子树结束到preR
    // 中序区间：[rootInIdx+1, inL + leftSubtreeSize + (右子树大小)) → 根的下一个位置开始
    const rightChild = dfs(preL + 1 + leftSubtreeSize, preR, rootInIdx + 1);

    // 8. 构建当前根节点，并挂载左右子树
    // TreeNode构造函数：参数依次是 节点值、左子树、右子树
    return new TreeNode(rootVal, leftChild, rightChild);
  }

  // 9. 递归入口：处理整个树的区间
  // 前序区间：[0, n) → 从0到数组长度（左闭右开，覆盖所有元素）
  // 中序起始：0 → 从中序数组的第一个元素开始
  return dfs(0, n, 0);
};