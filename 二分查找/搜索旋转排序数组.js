// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 向左旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 下标 3 上向左旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
var search = function (nums, target) {
  const n = nums.length;
  if (n === 0) return -1;
  // 步骤1：找旋转点（最小元素的索引）
  let l = 0, r = n - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[r]) l = mid + 1;
    else r = mid;
  }
  const rotateIdx = l; // 旋转点索引
  // 步骤2：判断target在左段还是右段，再二分
  if (target === nums[rotateIdx]) return rotateIdx;
  if (rotateIdx === 0) { // 数组未旋转
    l = 0; r = n - 1;
  } else if (target > nums[n - 1]) { // target在左段
    l = 0; r = rotateIdx - 1;
  } else { // target在右段
    l = rotateIdx; r = n - 1;
  }
  // 标准二分查找
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
};