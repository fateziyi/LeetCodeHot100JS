// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 1. 初始化：候选元素 ans=0，生命值 hp=0
  let ans = 0, hp = 0;
  // 2. 遍历数组中的每个元素
  for (const x of nums) {
    if (hp === 0) { // 3. 无候选时，当前元素成为新擂主
      ans = x;    // 设为候选
      hp = 1;     // 生命值初始化为 1
    } else {        // 4. 有候选时，判断是否为“同门”
      // 是同门则加血，否则扣血
      hp += x === ans ? 1 : -1;
    }
  }
  // 5. 遍历结束，候选元素就是多数元素
  return ans;
};