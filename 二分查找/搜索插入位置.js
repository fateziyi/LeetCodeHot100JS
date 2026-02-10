// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 1. 初始化左右指针，定义查找区间为【闭区间 [left, right]】
  let left = 0, right = nums.length - 1;
  // 2. 循环条件：区间不为空（left <= right 表示 [left, right] 还有元素）
  while (left <= right) {
    // 循环不变量（核心逻辑）：
    // nums[left-1] < target  → left左边的元素都小于target
    // nums[right+1] >= target → right右边的元素都大于等于target
    // 3. 计算中间下标（用Math.floor避免小数，等价于 (left + right) >> 1）
    const mid = Math.floor((left + right) / 2);
    // 4. 比较中间值和target
    if (nums[mid] < target) {
      // 中间值 < target → target在右半区，缩小左边界
      left = mid + 1; // 新区间 [mid+1, right]
    } else {
      // 中间值 >= target → target在左半区，缩小右边界
      right = mid - 1; // 新区间 [left, mid-1]
    }
  }
  // 5. 循环结束时 left = right + 1，此时left就是插入位置
  return left;
};