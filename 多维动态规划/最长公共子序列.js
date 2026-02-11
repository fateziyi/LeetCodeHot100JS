// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // m: text1长度，n: text2长度
  const m = text1.length, n = text2.length;

  // 初始化二维DP数组：(m+1)行(n+1)列，所有元素初始为0
  // dp[i][j] 对应 text1前i个字符、text2前j个字符的LCS长度
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  // 遍历text1的每个字符（i从1到m，对应text1[i-1]）
  for (let i = 1; i <= m; i++) {
    const c1 = text1[i - 1]; // 当前text1的字符（因为dp数组多了一行一列，索引偏移1）

    // 遍历text2的每个字符（j从1到n，对应text2[j-1]）
    for (let j = 1; j <= n; j++) {
      const c2 = text2[j - 1]; // 当前text2的字符

      // 情况1：当前字符相等 → 继承左上角值+1
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      // 情况2：当前字符不相等 → 取上方或左方的最大值
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // dp[m][n] 就是两个完整字符串的LCS长度
  return dp[m][n];
};