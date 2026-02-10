// 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 1. 初始化结果为 0（异或的初始值，因为 0^a=a）
  let ans = 0;
  // 2. 遍历数组中的每一个数字
  for (const x of nums) {
    // 3. 依次和当前结果做异或运算（ans = ans ^ x）
    ans ^= x;
  }
  // 4. 最终结果就是只出现一次的数字
  return ans;
};