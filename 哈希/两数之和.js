// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

// 你可以按任意顺序返回答案。
/*
 * 算法思路：哈希表快速查找
 * 1. 我们需要找到两个数 nums[i] 和 nums[j]，使得 nums[i] + nums[j] = target
 * 2. 可以转化为查找 target - nums[i] 是否存在于数组中
 * 3. 使用哈希表存储已经遍历过的数字及其下标，这样可以在 O(1) 时间内完成查找
 * 4. 遍历数组时，对于每个数字，先检查哈希表中是否存在目标差值
 * 5. 如果存在，直接返回两个下标；如果不存在，将当前数字存入哈希表
 * 
 * 时间复杂度：O(n)，其中n是数组长度
 * 空间复杂度：O(n)，最坏情况下哈希表存储所有数字
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 哈希表，键是数字值，值是该数字在数组中的下标
    const map = new Map()

    // 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 计算需要查找的目标差值
        let res = target - nums[i]

        // 如果哈希表中存在该差值，说明找到了两个数
        if (map.has(res)) {
            return [map.get(res), i]
        }

        // 如果不存在，将当前数字和下标存入哈希表
        map.set(nums[i], i)
    }
};