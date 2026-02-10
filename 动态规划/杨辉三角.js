// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // 1. 初始化二维数组，长度为 numRows（对应杨辉三角的行数）
  const c = Array(numRows);
  // 2. 遍历每一行，构建该行的数值
  for (let i = 0; i < numRows; i++) {
    // 3. 第 i 行有 i+1 个元素（行号从0开始）
    c[i] = Array(i + 1);
    // 4. 每行的第一个和最后一个元素固定为 1
    c[i][0] = c[i][i] = 1;
    // 5. 填充中间元素（j 从1到i-1，因为首尾已设为1）
    for (let j = 1; j < i; j++) {
      // 核心规律：当前元素 = 上一行第 j-1 个元素 + 上一行第 j 个元素
      // 即“左上方的数 + 正上方的数”
      c[i][j] = c[i - 1][j - 1] + c[i - 1][j];
    }
  }
  // 6. 返回构建好的杨辉三角
  return c;
};