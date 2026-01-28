/*
 * 算法思路：哈希集合 + 连续序列查找
 * 1. 首先将数组转换为哈希集合，这样可以在 O(1) 时间内判断元素是否存在
 * 2. 遍历集合中的每个元素 x，如果 x-1 不存在，说明 x 是一个连续序列的起点
 * 3. 从 x 开始，不断查找 x+1, x+2, ... 直到找不到为止
 * 4. 记录当前连续序列的长度，并更新最大长度
 * 5. 优化：如果当前最大长度已经超过集合大小的一半，可以提前终止循环
 * 
 * 时间复杂度：O(n)，每个元素最多被访问两次
 * 空间复杂度：O(n)，用于存储哈希集合
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // 将数组转换为哈希集合，去重并提高查找效率
    const s = new Set(nums)
    let ans = 0
    
    // 遍历集合中的每个元素
    for(const x of s) {
        // 如果 x-1 存在，说明 x 不是连续序列的起点，跳过
        if(s.has(x - 1)) continue
        
        // 从 x 开始查找连续序列
        let y = x + 1
        while(s.has(y)) {
            y++
        }
        
        // 更新最大连续序列长度
        ans = Math.max(ans, y - x)
        
        // 优化：如果当前最大长度已经超过集合大小的一半，可以提前终止
        if(ans * 2 > s.size) break
    }
    
    return ans
};