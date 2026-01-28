/*
 * 算法思路：双指针法
 * 1. 容器的容量由两个因素决定：两个垂线中较短的高度，以及它们之间的距离
 * 2. 使用双指针分别指向数组的左右两端
 * 3. 计算当前容器的容量，并更新最大容量
 * 4. 移动较短的那个指针，因为移动较长的指针不会增加容器的容量
 * 5. 重复上述过程，直到两个指针相遇
 * 
 * 时间复杂度：O(n)，只需要遍历数组一次
 * 空间复杂度：O(1)，只需要常数级别的额外空间
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // ans 记录最大容量，left 和 right 是双指针
    let ans = 0, left = 0, right = height.length - 1
    
    // 当左指针小于右指针时继续循环
    while(left < right) {
        // 计算当前容器的容量：较短的高度 * 距离
        const area = Math.min(height[left], height[right]) * (right - left)
        
        // 更新最大容量
        ans = Math.max(ans, area)
        
        // 移动较短的指针，因为移动较长的指针不会增加容量
        if(height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    
    return ans
};