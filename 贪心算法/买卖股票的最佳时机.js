// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 1. 初始化最大利润 ans 为 0（默认无利润）
  let ans = 0;
  // 2. 初始化最小价格为数组第一个元素（假设第一天是买入的最佳时机）
  let minPrice = prices[0];
  // 3. 遍历每一天的股票价格
  for (const p of prices) {
    // 4. 计算「当前价格卖出 - 之前最小价格买入」的利润，更新最大利润
    ans = Math.max(ans, p - minPrice);
    // 5. 更新遍历到当前位置的最小价格（确保买入价尽可能低）
    minPrice = Math.min(minPrice, p);
  }
  // 6. 返回最大利润（如果所有情况都是亏损，ans 保持 0）
  return ans;
};