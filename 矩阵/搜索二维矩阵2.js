// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let i = 0, j = n - 1; // 从右上角开始
  while (i < m && j >= 0) { // 还有剩余元素
    if (matrix[i][j] === target) {
      return true; // 找到 target
    }
    if (matrix[i][j] < target) {
      i++; // 这一行剩余元素全部小于 target，排除
    } else {
      j--; // 这一列剩余元素全部大于 target，排除
    }
  }
  return false;
};