// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
/*
 * 算法思路：哈希表分组 + 字符串排序
 * 1. 字母异位词的特点是：排序后得到的字符串完全相同
 * 2. 我们可以将每个字符串排序后的结果作为哈希表的键
 * 3. 将所有排序后结果相同的字符串归为一组
 * 4. 最终将哈希表中的所有值转换为数组返回
 * 
 * 时间复杂度：O(n * k log k)，其中n是字符串数组长度，k是字符串的最大长度
 * 空间复杂度：O(n * k)，用于存储哈希表和结果
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 哈希表，键是排序后的字符串，值是对应的字母异位词数组
    const map = new Map()
    
    // 遍历所有字符串
    for(const s of strs) {
        // 将字符串排序后作为键
        const sorted = s.split('').sort().join('')
        
        // 如果哈希表中没有该键，创建一个新数组
        if(!map.has(sorted)) {
            map.set(sorted, [])
        }
        
        // 将当前字符串加入对应的数组
        map.get(sorted).push(s)
    }
    
    // 将哈希表中的值转换为数组返回
    return Array.from(map.values())
};