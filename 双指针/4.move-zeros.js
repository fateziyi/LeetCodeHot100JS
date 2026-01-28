/*
 * 算法思路：两种原地移动零的方法
 * 方法一：栈思想
 * 1. 遍历数组，将所有非零元素依次移动到数组前面
 * 2. 记录非零元素的个数 stackSize
 * 3. 将数组剩余部分（从 stackSize 到末尾）填充为 0
 * 
 * 方法二：双指针交换
 * 1. 使用两个指针 i 和 j，i 指向当前非零元素应该放置的位置
 * 2. j 遍历整个数组
 * 3. 当遇到非零元素时，交换 nums[i] 和 nums[j]，并将 i 向后移动
 * 4. 这样可以保证非零元素的相对顺序不变
 * 
 * 时间复杂度：O(n)，两种方法都是线性遍历数组
 * 空间复杂度：O(1)，原地操作，不需要额外空间
 */

// 方法一：栈思想
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // stackSize 记录非零元素的个数，同时也是下一个非零元素应该放置的位置
    let stackSize = 0;
    
    // 遍历数组，将非零元素移动到前面
    for (const x of nums) {
        if (x !== 0) {
            nums[stackSize++] = x; // 将非零元素入栈
        }
    }
    
    // 将数组剩余部分填充为 0
    nums.fill(0, stackSize);
    return nums
};

// 方法二：双指针交换
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // i 指向当前非零元素应该放置的位置
    let i = 0
    
    // j 遍历整个数组
    for(let j = 0; j < nums.length; j++) {
        // 当遇到非零元素时，交换到前面
        if(nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
    }
    return nums
};