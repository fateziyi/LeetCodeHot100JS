// 给定两个字符串 s 和 t，长度分别是 m 和 n，返回 s 中的 最短窗口 子串，使得该子串包含 t 中的每一个字符（包括重复字符）。如果没有这样的子串，返回空字符串 ""。
// 子字符串 是字符串中连续的 非空 字符序列

/**
 * @param {string} s - 源字符串
 * @param {string} t - 目标字符串，需要在s中找到包含t所有字符的最短子串
 * @return {string} - 最短窗口子串，如果不存在则返回空字符串
 * 
 * 算法思路：滑动窗口（Sliding Window）
 * 1. 统计目标字符串t中每个字符的出现次数
 * 2. 使用左右指针维护一个滑动窗口，右指针不断扩展窗口
 * 3. 当窗口包含t的所有字符时，尝试移动左指针缩小窗口以找到更短的有效窗口
 * 4. 记录所有有效窗口中的最小窗口
 * 
 * 时间复杂度：O(m + n)，其中m是s的长度，n是t的长度
 * 空间复杂度：O(1)，因为使用了固定大小的数组（128个ASCII字符）
 */
var minWindow = function (s, t) {
    // 用于统计字符出现次数的数组，覆盖所有ASCII字符
    const cnt = Array(128).fill(0)
    // 记录还需要匹配的不同字符的数量
    let less = 0;
    
    // 第一步：统计目标字符串t中每个字符的出现次数
    for (let c of t) {
        c = c.codePointAt(0)
        // 如果该字符之前未被统计过，需要匹配的不同字符数加1
        if (cnt[c] === 0) {
            less++
        }
        // 增加该字符的计数
        cnt[c]++
    }
    
    const m = s.length
    // 初始化答案窗口的左右边界，ansRight初始为m表示一个不可能的大值
    let ansLeft = -1, ansRight = m
    // 滑动窗口的左指针
    let left = 0
    
    // 第二步：右指针不断向右扩展窗口
    for (let right = 0; right < m; right++) {
        const c = s[right].codePointAt(0)
        // 将当前字符加入窗口，计数减1
        cnt[c]--
        // 如果该字符的计数从1变为0，表示该字符已经完全匹配
        if (cnt[c] === 0) {
            less--
        }
        
        // 第三步：当窗口包含t的所有字符时（less === 0），尝试缩小窗口
        while (less === 0) {
            // 更新最小窗口
            if (right - left < ansRight - ansLeft) {
                ansLeft = left
                ansRight = right
            }
            
            // 尝试移动左指针缩小窗口
            const x = s[left].codePointAt(0)
            // 如果该字符的计数是0，说明移动左指针后该字符将不再完全匹配
            if (cnt[x] === 0) {
                less++
            }
            // 恢复该字符的计数
            cnt[x]++
            // 左指针右移
            left++
        }
    }
    
    // 返回结果：如果ansLeft还是初始值-1，说明没有找到有效窗口，否则返回子串
    return ansLeft < 0 ? '' : s.substring(ansLeft, ansRight + 1)
};