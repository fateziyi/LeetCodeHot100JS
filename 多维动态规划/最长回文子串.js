// 给你一个字符串 s，找到 s 中最长的 回文 子串。
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 初始化结果为空字符串，存储最长回文子串
  let result = "";
  // 遍历每个字符，作为回文串的中心（奇数长度）或中心左边界（偶数长度）
  for (let k = 0; k < s.length; k++) {
    // 情况1：回文串长度为奇数（中心是单个字符s[k]）
    let i = k - 1, j = k + 1;
    // 向左右扩展：i左移、j右移，直到越界或字符不相等
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--; j++;
    }
    // 更新最长回文：当前回文长度是j-i-1（因为退出循环时s[i]≠s[j]，有效区间是[i+1, j-1]）
    result = result.length >= (j - i - 1) ? result : s.slice(i + 1, j);

    // 情况2：回文串长度为偶数（中心是s[k]和s[k+1]之间的间隙）
    i = k; j = k + 1;
    // 同理向左右扩展
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--; j++;
    }
    // 再次更新最长回文
    result = result.length >= (j - i - 1) ? result : s.slice(i + 1, j);
  }
  return result;
};