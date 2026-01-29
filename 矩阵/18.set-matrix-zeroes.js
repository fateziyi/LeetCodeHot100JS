// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 1. 获取矩阵的行数 m 和列数 n
  const m = matrix.length, n = matrix[0].length;
  // 2. 记录第一行是否存在原始 0（核心：避免第一行的标记位覆盖原始信息）
  const firstRowHasZero = matrix[0].includes(0);

  // 3. 从第 2 行开始遍历（i=1），标记零行和零列（复用第一行、第一列）
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        // 标记：第 i 行需要置零（修改第一列对应位置为 0）
        matrix[i][0] = 0;
        // 标记：第 j 列需要置零（修改第一行对应位置为 0）
        matrix[0][j] = 0;
      }
    }
  }

  // 4. 从第 2 行开始，根据标记置零（倒序遍历列，避免提前修改第一列标记）
  for (let i = 1; i < m; i++) {
    // 倒着遍历列（j从n-1到0），核心：避免先修改 matrix[i][0] 影响后续判断
    for (let j = n - 1; j >= 0; j--) {
      // 只要当前行被标记 或 当前列被标记，就将该元素置零
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // 5. 最后处理第一行：如果原始第一行有 0，将第一行全部置零
  if (firstRowHasZero) {
    matrix[0].fill(0);
  }
};
