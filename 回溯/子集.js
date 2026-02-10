// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const len = nums.length
  // 存储最终所有子集
  const res = []
  // 存储当前正在构建的子集路径
  const subset = []
  // 从索引0开始递归构建子集
  dfs(0)

  // 定义DFS函数：处理从index开始的元素选择
  function dfs(index) {
    // 关键：每进入一层递归，先把当前的子集状态存入结果（包括空集）
    res.push(subset.slice())
    // 遍历从index开始的元素（避免重复子集，如[1,2]和[2,1]视为同一个子集）
    for (let i = index; i < len; i++) {
      // 选择当前元素，加入子集
      subset.push(nums[i])
      // 递归处理下一个元素（i+1，保证只往后选，不回头）
      dfs(i + 1)
      // 回溯：移除当前元素，尝试不选的情况
      subset.pop()
    }
  }
  return res
};