// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 1. 获取正方形矩阵的边长 n（行/列数相等）
  const n = matrix.length;
  // 2. 第一步：矩阵转置（沿主对角线对称交换元素）
  for (let i = 0; i < n; i++) {
    // 取出当前第 i 行，简化后续访问
    const row = matrix[i];
    // 遍历主对角线上方的元素（j = i+1 到 n-1），避免重复交换
    for (let j = i + 1; j < n; j++) { // 遍历对角线上方元素，做转置
      // 临时变量保存当前元素 row[j]（即 matrix[i][j]）
      const tmp = row[j];
      // 交换 matrix[i][j] 和 matrix[j][i]
      row[j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
    // 3. 第二步：当前行翻转（左右反转），转置完成后直接处理每行，更高效
    row.reverse(); // 行翻转
  }
};