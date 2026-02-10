// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 1. 定义辅助函数：判断两个节点 p 和 q 是否互为镜像（核心递归逻辑）
  function isSameTree(p, q) {
    // 2. 边界条件：如果其中一个节点为 null
    //    - 只有当 p 和 q 都为 null 时，才返回 true（镜像的空节点）
    //    - 一个为 null、一个不为 null 时，返回 false（不对称）
    if (p === null || q === null) {
      return p === q;
    }
    // 3. 递归条件：
    //    - 当前节点值相等；
    //    - p的左子树 和 q的右子树 互为镜像；
    //    - p的右子树 和 q的左子树 互为镜像；
    //    三者同时满足才返回 true
    return p.val === q.val && isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
  }
  // 4. 主逻辑：判断根节点的左子树和右子树是否互为镜像
  //    （根节点本身无需对比，只需看左右子树的镜像关系）
  return isSameTree(root.left, root.right);
};