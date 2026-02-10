// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 存储最终的层序遍历结果（二维数组）
  const res = []
  // 边界情况：空树直接返回空数组
  if (!root) return res
  // 初始化队列，用于存储待处理的节点（先入先出）
  const queue = []
  // 根节点入队，启动BFS
  queue.push(root)

  // 队列不为空时，持续处理每一层
  while (queue.length) {
    // 存储当前层的节点值
    const level = []
    // 关键：记录当前队列长度（即当前层的节点数），避免循环中队列长度变化影响遍历
    const len = queue.length

    // 遍历当前层的所有节点
    for (let i = 0; i < len; i++) {
      // 出队当前层的第一个节点
      const top = queue.shift()
      // 收集当前节点值到当前层数组
      level.push(top.val)
      // 左子节点存在则入队（下一层节点）
      if (top.left) {
        queue.push(top.left)
      }
      // 右子节点存在则入队（下一层节点）
      if (top.right) {
        queue.push(top.right)
      }
    }
    // 当前层遍历完成，将层数组加入结果
    res.push(level)
  }
  return res
};