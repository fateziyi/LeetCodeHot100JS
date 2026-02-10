// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

/**
 * @param {number[]} nums - 整数数组
 * @param {number} k - 滑动窗口的大小
 * @return {number[]} - 每个滑动窗口中的最大值组成的数组
 * 
 * 算法思路：单调队列（Monotonic Queue）
 * 1. 使用双端队列维护当前窗口中可能成为最大值的元素的索引
 * 2. 队列中的元素始终保持单调递减，队首元素是当前窗口的最大值
 * 3. 当新元素进入窗口时，从队列尾部移除所有比当前元素小的元素
 * 4. 移除队列中不在当前窗口范围内的元素
 * 5. 当窗口形成后（i >= k-1），队首元素就是当前窗口的最大值
 * 
 * 时间复杂度：O(n)，每个元素最多入队和出队一次
 * 空间复杂度：O(k)，队列中最多存储k个元素
 */
var maxSlidingWindow = function (nums, k) {
    const len = nums.length
    const res = []
    // 双端队列，存储元素的索引，队首是当前窗口的最大值索引
    const deque = []
    
    for (let i = 0; i < len; i++) {
        // 1. 维护队列单调性：从尾部移除所有比当前元素小的元素
        // 因为这些元素不可能成为后续窗口的最大值
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop()
        }
        // 将当前元素索引加入队列尾部
        deque.push(i)
        
        // 2. 移除不在当前窗口范围内的元素
        // 窗口范围是[i - k + 1, i]，队首元素如果小于等于i - k则不在窗口内
        while (deque.length && deque[0] <= i - k) {
            deque.shift()
        }
        
        // 3. 当窗口形成后（i >= k-1），记录当前窗口的最大值
        if (i >= k - 1) {
            res.push(nums[deque[0]])
        }
    }
    
    return res
};