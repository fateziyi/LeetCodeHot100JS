// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组是数组中的一个连续部分。
// 子数组 是数组中连续的 非空 元素序列

// 方法一：动态规划
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 1. 初始化最终结果 ans 为负无穷大
    let ans = -Infinity
    // 2. 初始化当前子数组和 f 为 0
    let f = 0
    // 3. 遍历数组中的每一个元素 x
    for(const x of nums) {
        // 4. 核心：更新当前子数组和 f
        f = Math.max(f, 0) + x
        // 5. 核心：更新全局最大和 ans
        ans = Math.max(ans, f)
    }
    // 6. 返回全局最大和
    return ans
};


// 方法二：前缀和+贪心
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 1. 初始化最终结果 ans 为负无穷大
    let ans = -Infinity
    // 2. 初始化最小前缀和 minPreSum 为 0（对应 preSum[0] = 0）
    let minPreSum = 0
    // 3. 初始化当前前缀和 preSum 为 0（逐步累加更新）
    let preSum = 0
    // 4. 遍历数组中的每一个元素 x
    for(const x of nums) {
        // 5. 核心：更新当前前缀和 preSum
        preSum += x
        // 6. 核心：计算当前最大差值，更新全局结果 ans
        ans = Math.max(ans, preSum - minPreSum)
        // 7. 核心：更新遍历到目前为止的最小前缀和 minPreSum
        minPreSum = Math.min(minPreSum, preSum)
    }
    // 8. 返回全局最大子数组和
    return ans
};