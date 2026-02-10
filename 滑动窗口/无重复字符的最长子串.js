/*
 * 算法思路：滑动窗口 + 哈希集合
 * 1. 使用滑动窗口 [left, right] 表示当前的无重复子串
 * 2. 使用哈希集合存储窗口中的字符，方便快速判断是否重复
 * 3. 右指针不断向右移动，将字符加入窗口
 * 4. 如果遇到重复字符，移动左指针缩小窗口，直到窗口中没有重复字符
 * 5. 每次移动右指针后，更新最长子串的长度
 * 
 * 时间复杂度：O(n)，其中n是字符串长度
 * 空间复杂度：O(min(n, k))，k是字符集的大小
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // ans 记录最长子串的长度
    let ans = 0
    // left 是滑动窗口的左边界
    let left = 0
    // window 存储当前窗口中的字符
    const window = new Set()
    
    // 右指针遍历字符串
    for(let right = 0; right < s.length; right++) {
        const c = s[right]
        
        // 如果窗口中已经有该字符，移动左指针缩小窗口
        while(window.has(c)) {
            window.delete(s[left])
            left++
        }
        
        // 将当前字符加入窗口
        window.add(c)
        
        // 更新最长子串的长度
        ans = Math.max(ans, right - left + 1)
    }
    
    return ans
};
