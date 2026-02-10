// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const len = nums.length
  // 存储最终所有排列结果
  const res = []
  // 存储当前正在构建的排列路径
  const curr = []
  // 标记元素是否已被使用（避免重复选择），键是数组元素值，值是0/1（未使用/已使用）
  const visited = {}
  // 从第0个位置开始递归构建排列
  dfs(0)

  // 定义DFS函数：填充第nth个位置的元素
  function dfs(nth) {
    // 递归终止条件：已填充完所有位置（nth等于数组长度）
    if (nth === len) {
      // 关键：用slice()复制curr数组，否则res中存的是curr的引用，后续修改会覆盖结果
      res.push(curr.slice())
      return
    }
    // 遍历所有元素，尝试将未使用的元素放入第nth个位置
    for (let i = 0; i < len; i++) {
      // 如果当前元素未被使用
      if (!visited[nums[i]]) {
        // 标记为已使用
        visited[nums[i]] = 1
        // 将元素加入当前路径
        curr.push(nums[i])
        // 递归填充下一个位置
        dfs(nth + 1)
        // 回溯：移除当前元素，取消标记（恢复状态）
        curr.pop()
        visited[nums[i]] = 0
      }
    }
  }
  return res
};