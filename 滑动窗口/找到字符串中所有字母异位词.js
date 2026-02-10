/*
 * 算法思路：滑动窗口 + 字符计数
 * 1. 首先统计字符串 p 中每个字符的出现次数
 * 2. 使用滑动窗口遍历字符串 s，窗口大小固定为 p 的长度
 * 3. 统计窗口内每个字符的出现次数
 * 4. 比较窗口内的字符计数和 p 的字符计数，如果相等，说明是异位词
 * 5. 移动窗口时，更新字符计数：移除窗口左侧的字符，添加窗口右侧的新字符
 * 
 * 时间复杂度：O(n)，其中n是字符串 s 的长度
 * 空间复杂度：O(1)，只需要常数级别的额外空间
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // 统计 p 中每个字符的出现次数
    const cntP = new Array(26).fill(0)
    for(const c of p) {
        cntP[c.charCodeAt() - 'a'.charCodeAt()]++
    }
    
    const ans = []
    // 统计窗口内每个字符的出现次数
    const cntS = new Array(26).fill(0)
    
    // 右指针遍历字符串 s
    for(let right = 0; right < s.length; right++) {
        // 将当前字符加入窗口计数
        cntS[s[right].charCodeAt() - 'a'.charCodeAt()]++
        
        // 计算窗口左边界
        const left = right - p.length + 1
        
        // 如果窗口还没有形成，继续移动右指针
        if(left < 0) continue
        
        // 如果窗口内的字符计数和 p 的字符计数相等，说明是异位词
        if(_.isEqual(cntP,cntS)) {
            ans.push(left)
        }
        
        // 将窗口左侧的字符移出计数
        cntS[s[left].charCodeAt() - 'a'.charCodeAt()]--
    }
    
    return ans
};