// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 1. 固化顺时针遍历方向：右、下、左、上（对应 x 轴、y 轴的偏移量）
const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右下左上

var spiralOrder = function (matrix) {
  // 2. 获取矩阵的行数 m 和列数 n
  let m = matrix.length, n = matrix[0].length;
  // 3. 计算矩阵的总元素个数（用于判断是否遍历完成）
  const size = m * n;
  // 4. 初始化结果数组 ans，用于保存螺旋遍历的结果
  const ans = [];
  // 5. 初始化当前遍历的坐标 (i, j)，核心：从 (0, -1) 开始（方便第一个方向向右遍历直接起步）
  let i = 0, j = -1; // 从 (0, -1) 开始
  // 6. 核心循环：按方向遍历，直到结果数组长度等于总元素个数
  for (let di = 0; ans.length < size; di = (di + 1) % 4) {
    // 7. 按当前方向走 n 步（n 会动态变化，控制每轮的步数）
    for (let k = 0; k < n; k++) {
      // 8. 按照当前方向的偏移量，更新坐标 (i, j)（先走一步）
      i += DIRS[di][0];
      j += DIRS[di][1]; // 先走一步
      // 9. 将当前坐标对应的元素加入结果数组
      ans.push(matrix[i][j]); // 再加入答案
    }
    // 10. 核心：动态更新 n 和 m，收缩有效边界，调整下一轮的步数
    [n, m] = [m - 1, n]; // 减少后面的循环次数
  }
  // 11. 返回螺旋遍历的结果数组
  return ans;
};