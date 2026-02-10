// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
/**
 * @param {string} digits
 * @return {string[]}
 */
// 定义电话键盘的数字-字母映射表（索引对应数字，如索引2对应"abc"）
const MAPPING = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
var letterCombinations = function (digits) {
  const len = digits.length
  // 修复：空输入返回空数组，而非undefined
  if (len === 0) return []
  // 存储最终所有字母组合
  const res = []
  // 存储当前正在拼接的组合（按位存储，如digits="23"时，curr[0]存2的字母，curr[1]存3的字母）
  const curr = []
  // 从第0位数字开始递归
  dfs(0)

  // 定义DFS函数：处理第index位数字的字母选择
  function dfs(index) {
    // 递归终止条件：已处理完所有数字（index等于数字长度）
    if (index === len) {
      // 将当前拼接的组合转为字符串，存入结果数组
      res.push(curr.join(""))
      return
    }
    // 获取当前数字对应的字母列表（如digits[index]是"2"，则letters="abc"）
    const letters = MAPPING[Number(digits[index])]
    // 遍历当前数字的所有字母
    for (const i of letters) {
      // 将当前字母放入curr的第index位
      curr[index] = i
      // 递归处理下一位数字
      dfs(index + 1)
    }
  }
  // 返回所有组合
  return res
};