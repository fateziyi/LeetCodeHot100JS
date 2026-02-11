// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

// 测试用例保证输出的长度不会超过 105。
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = []; // 栈：保存[前缀字符串, 重复次数]，模拟递归上下文
  let res = '';     // 当前层未闭合的解码结果
  let k = 0;        // 当前层的重复次数（处理多位数）

  for (const c of s) {
    // 情况1：字母 → 直接拼到当前结果res
    if ('a' <= c && c <= 'z') {
      res += c;
    }
    // 情况2：数字 → 计算完整的重复次数（处理12[abc]这类多位数）
    else if ('0' <= c && c <= '9') {
      k = k * 10 + parseInt(c); // 比如先读1，再读2 → 1*10+2=12
    }
    // 情况3：左括号 → 保存当前上下文，进入内层处理
    else if (c === '[') {
      stack.push([res, k]); // 把当前res（前缀）和k（重复次数）入栈
      res = ''; // 重置res，处理内层字符串
      k = 0;    // 重置k，处理内层可能的重复次数
    }
    // 情况4：右括号 → 结束内层处理，拼接结果
    else { // c === ']'
      const [pre_res, pre_k] = stack.pop(); // 取出外层的前缀和重复次数
      // 内层结果res重复pre_k次，拼到外层前缀后，作为新的res
      res = pre_res + res.repeat(pre_k);
    }
  }
  return res;
};