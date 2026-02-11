// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length;
  // 边界条件：空数组直接返回0
  if (!len) return 0;

  // 初始化maxLen为1（最短的递增子序列长度至少为1）
  let maxLen = 1;
  // dp数组：dp[i]表示以nums[i]结尾的最长递增子序列长度，初始值全为1
  const dp = (new Array(len)).fill(1);

  // 从第二个元素开始遍历（i=1）
  for (let i = 1; i < len; i++) {
    // 遍历i前面所有的元素j
    for (let j = 0; j < i; j++) {
      // 如果nums[j] < nums[i]，说明nums[i]可以接在nums[j]的子序列后面
      if (nums[j] < nums[i]) {
        // 更新dp[i]：取当前dp[i]和dp[j]+1的最大值
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // 更新全局最长长度
    if (maxLen < dp[i]) maxLen = dp[i];
  }

  // 返回最长递增子序列长度
  return maxLen;
};