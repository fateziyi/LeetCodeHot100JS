// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
/**
 * @param {number[]} nums
 * @return {number[][]} 
 */
var threeSum = function (nums) {
    let res = []

    // 对数组进行排序，方便后续操作
    nums.sort((a, b) => a - b)
    const len = nums.length

    // 遍历数组，将每个元素作为三元组的第一个元素
    for (let i = 0; i < len - 2; i++) {
        // 双指针初始化
        let left = i + 1
        let right = len - 1

        // 跳过重复的第一个元素
        if (i > 0 && nums[i] === nums[i - 1]) continue

        // 双指针查找
        while (left < right) {
            // 计算三个元素的和
            let sum = nums[i] + nums[left] + nums[right]

            if (sum < 0) {
                // 和小于0，左指针右移
                left++
                // 跳过重复元素
                while (left < right && nums[left] === nums[left - 1]) left++
            } else if (sum > 0) {
                // 和大于0，右指针左移
                right--
                // 跳过重复元素
                while (left < right && nums[right] === nums[right + 1]) right--
            } else {
                // 和等于0，记录三元组
                res.push([nums[i], nums[left], nums[right]])

                // 移动双指针
                left++
                right--

                // 跳过重复元素
                while (left < right && nums[left] === nums[left - 1]) left++
                while (left < right && nums[right] === nums[right + 1]) right--
            }
        }
    }

    return res
};