// 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = []; // 单调栈：存储未找到更高温度的天数索引（温度单调递减）
  const len = temperatures.length;
  const res = (new Array(len)).fill(0); // 结果数组，初始全为0

  // 遍历每一天的温度
  for (let i = 0; i < len; i++) {
    // 核心：当前温度 > 栈顶索引的温度 → 栈顶索引找到了更高温度
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const top = stack.pop(); // 弹出栈顶索引（已找到结果）
      res[top] = i - top; // 计算等待天数：当前天 - 栈顶天
    }
    // 栈为空 或 当前温度 ≤ 栈顶温度 → 入栈当前索引（等待后续处理）
    stack.push(i);
  }
  return res;
};