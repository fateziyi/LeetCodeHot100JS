// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

/**
 * @param {number[]} nums - 整数数组
 * @param {number} k - 目标和
 * @return {number} - 和为k的子数组的个数
 * 
 * 算法思路：前缀和 + 哈希表
 * 1. 前缀和：pre[i] = nums[0] + nums[1] + ... + nums[i-1]
 * 2. 子数组nums[j..i-1]的和为pre[i] - pre[j]
 * 3. 我们需要找到所有j < i，使得pre[i] - pre[j] = k → pre[j] = pre[i] - k
 * 4. 使用哈希表记录前缀和出现的次数，避免重复计算
 * 
 * 时间复杂度：O(n)，其中n是数组长度
 * 空间复杂度：O(n)，最坏情况下哈希表存储所有前缀和
 */
var subarraySum = function (nums, k) {
    // 哈希表，键是前缀和，值是该前缀和出现的次数
    const mp = new Map()
    // 初始化：前缀和为0出现1次（对应空子数组）
    mp.set(0, 1)
    // count记录符合条件的子数组个数，pre记录当前前缀和
    let count = 0, pre = 0
    
    // 遍历数组，计算前缀和
    for (const x of nums) {
        pre += x
        // 如果存在前缀和为pre - k，说明存在子数组和为k
        if (mp.has(pre - k)) {
            count += mp.get(pre - k)
        }
        // 更新哈希表，记录当前前缀和出现的次数
        if (mp.has(pre)) {
            mp.set(pre, mp.get(pre) + 1)
        } else {
            mp.set(pre, 1)
        }
    }
    
    return count
};