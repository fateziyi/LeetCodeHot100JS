// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
var merge = function(intervals) {
    // 1. 核心前置操作：按区间左端点从小到大排序
    intervals.sort((p, q) => p[0] - q[0]); // 按照左端点从小到大排序
    // 2. 初始化结果数组 ans，用于保存合并后的区间
    const ans = [];
    // 3. 遍历原始区间数组中的每一个区间 p
    for (const p of intervals) {
        // 4. 获取当前结果数组 ans 的长度 m
        const m = ans.length;
        // 5. 核心判断：是否可以和 ans 中最后一个区间合并
        if (m && p[0] <= ans[m - 1][1]) { // 可以合并（m>0 且当前区间左端点 ≤ 最后一个合并区间的右端点）
            // 6. 合并操作：更新 ans 最后一个区间的右端点为两者的最大值
            ans[m - 1][1] = Math.max(ans[m - 1][1], p[1]); // 更新右端点最大值
        } else { // 不相交，无法合并（m=0 或当前区间左端点 > 最后一个合并区间的右端点）
            // 7. 直接将当前区间加入结果数组 ans
            ans.push(p); // 新的合并区间
        }
    }
    // 8. 返回合并后的结果数组
    return ans;
};