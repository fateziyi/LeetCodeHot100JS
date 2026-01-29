// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // 1. 定义内部辅助函数：反转 nums 中从索引 i 到索引 j 的元素（原地反转）
    function reverse(i, j) {
        // 当左指针 i 小于右指针 j 时，循环交换元素
        while (i < j) {
            // 解构赋值交换 nums[i] 和 nums[j]（原地交换，无需额外变量）
            [nums[i], nums[j]] = [nums[j], nums[i]]
            // 左指针右移，右指针左移，缩小反转范围
            i++
            j--
        }
    }
    // 2. 获取数组长度 n
    const n = nums.length
    // 3. 核心：计算有效旋转步数，避免无效操作（k 可能大于等于 n）
    k %= n
    // 4. 第一次反转：反转整个数组（索引 0 到 n-1）
    reverse(0, n - 1)
    // 5. 第二次反转：反转前 k 个元素（索引 0 到 k-1）
    reverse(0, k - 1)
    // 6. 第三次反转：反转后面 n-k 个元素（索引 k 到 n-1）
    reverse(k, n - 1)
};