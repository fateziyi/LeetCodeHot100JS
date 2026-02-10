// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // 哈希表，键是排序后的字符串，值是对应的字母异位词数组
    const map = new Map()

    // 遍历所有字符串
    for (const s of strs) {
        // 将字符串排序后作为键
        const sorted = s.split('').sort().join('')

        // 如果哈希表中没有该键，创建一个新数组
        if (!map.has(sorted)) {
            map.set(sorted, [])
        }

        // 将当前字符串加入对应的数组
        map.get(sorted).push(s)
    }

    // 将哈希表中的值转换为数组返回
    return Array.from(map.values())
};