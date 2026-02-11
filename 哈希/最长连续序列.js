// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // 将数组转换为哈希集合，去重并提高查找效率
    const s = new Set(nums)
    let ans = 0

    // 遍历集合中的每个元素
    for (const x of s) {
        // 如果 x-1 存在，说明 x 不是连续序列的起点，跳过
        if (s.has(x - 1)) continue

        // 从 x 开始查找连续序列
        let y = x + 1
        while (s.has(y)) {
            y++
        }

        // 更新最大连续序列长度
        ans = Math.max(ans, y - x)

        // 优化：如果当前最大长度已经超过集合大小的一半，可以提前终止
        if (ans * 2 > s.size) break
    }

    return ans
};