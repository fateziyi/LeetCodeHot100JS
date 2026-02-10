// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 1. 建立左括号到对应右括号的映射表
  const leftToRight = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"]
  ])
  // 2. 处理空字符串：空字符串视为有效括号
  if (!s) return true
  // 3. 初始化栈：用于存储待匹配的右括号
  const stack = []
  // 4. 遍历字符串中的每个字符
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    // 5. 如果当前字符是左括号（映射表中有该键）
    if (leftToRight.has(ch)) {
      // 把对应的右括号压入栈，等待后续匹配
      stack.push(leftToRight.get(ch))
    } else {
      // 6. 如果当前字符是右括号：
      //    - 栈为空（没有待匹配的左括号），或栈顶的右括号与当前字符不匹配 → 直接返回false
      if (!stack.length || stack.pop() !== ch) return false
    }
  }
  // 7. 遍历结束后，栈必须为空（所有待匹配的右括号都成功匹配）才返回true
  return !stack.length
};