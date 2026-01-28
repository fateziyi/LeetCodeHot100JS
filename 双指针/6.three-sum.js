/*
 * 算法思路：排序 + 双指针
 * 1. 首先对数组进行排序，这样可以方便后续的双指针操作和去重
 * 2. 遍历数组，将每个元素作为三元组的第一个元素
 * 3. 对于每个第一个元素，使用双指针在剩余元素中查找另外两个元素
 * 4. 双指针分别指向剩余元素的左右两端，计算三个元素的和
 * 5. 根据和的大小调整双指针的位置：和小于0则左指针右移，和大于0则右指针左移
 * 6. 当和等于0时，记录三元组，并跳过重复元素
 * 7. 注意去重：跳过与前一个元素相同的元素，避免重复的三元组
 * 
 * 时间复杂度：O(n²)，其中n是数组长度
 * 空间复杂度：O(log n) 或 O(n)，取决于排序算法的实现
 */

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