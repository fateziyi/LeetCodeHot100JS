// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // f数组：f[i] 表示凑成金额i所需的最少硬币数
  const f = [];
  // 初始条件：凑成金额0需要0枚硬币
  f[0] = 0;

  // 遍历从1到amount的所有金额
  for (let i = 1; i <= amount; i++) {
    // 初始化f[i]为无穷大，表示初始时无法凑出金额i
    f[i] = Infinity;
    // 遍历所有硬币面额
    for (let j = 0; j < coins.length; j++) {
      // 只有当当前金额i >= 硬币面额coins[j]时，才有可能用该硬币凑数
      if (i - coins[j] >= 0) {
        // 状态转移：取「当前f[i]」和「f[i-coins[j]] + 1」的最小值
        // f[i-coins[j]] + 1 表示：凑成i-coins[j]的最少硬币数 + 1枚当前硬币
        f[i] = Math.min(f[i], f[i - coins[j]] + 1);
      }
    }
  }

  // 如果f[amount]还是无穷大，说明无法凑出，返回-1；否则返回最少硬币数
  if (f[amount] === Infinity) return -1;
  return f[amount];
};