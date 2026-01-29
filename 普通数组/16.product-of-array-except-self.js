// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除了 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length; // 获取数组长度
  const suf = Array(n);  // 创建一个和nums长度相同的数组，用于存储后缀乘积
  suf[n - 1] = 1;        // 边界条件：最后一个元素的右边没有元素，后缀乘积为1

  // 从后往前遍历（从倒数第二个元素到第一个元素），计算每个位置的后缀乘积
  for (let i = n - 2; i >= 0; i--) {
    suf[i] = suf[i + 1] * nums[i + 1];
  }
  let pre = 1; // 初始化前缀乘积为1（边界条件：第一个元素的左边没有元素，前缀乘积为1）
  for (let i = 0; i < n; i++) {
    // 关键步骤1：当前suf[i]是后缀乘积，乘以前缀乘积pre，得到除nums[i]外的总乘积
    suf[i] *= pre;
    // 关键步骤2：更新前缀乘积，将当前nums[i]乘入pre，为下一个元素的前缀乘积做准备
    pre *= nums[i];
  }

  return suf; // 此时suf已经不是单纯的后缀数组，而是最终结果数组
};