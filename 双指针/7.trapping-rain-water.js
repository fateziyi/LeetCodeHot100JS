/*
 * 算法思路：三种接雨水的方法
 * 
 * 方法一：动态规划
 * 1. 每个位置能接的雨水量由左右两侧的最大高度决定
 * 2. 先计算每个位置左侧的最大高度数组 leftMax
 * 3. 再计算每个位置右侧的最大高度数组 rightMax
 * 4. 对于每个位置，能接的雨水量是 min(leftMax[i], rightMax[i]) - height[i]
 * 
 * 方法二：单调栈
 * 1. 使用单调栈存储柱子的下标，栈中元素对应的柱子高度单调递减
 * 2. 当遇到比栈顶元素高的柱子时，说明可以形成一个接水的凹槽
 * 3. 弹出栈顶元素作为凹槽底部，计算凹槽的宽度和高度
 * 4. 累加凹槽的接水量
 * 
 * 方法三：双指针
 * 1. 使用两个指针分别指向数组的左右两端
 * 2. 维护 leftMax 和 rightMax 分别表示左右两侧的最大高度
 * 3. 移动高度较小的一侧的指针，因为该侧的最大高度已经确定
 * 4. 累加当前位置能接的雨水量
 * 
 * 时间复杂度：
 * - 动态规划：O(n)
 * - 单调栈：O(n)
 * - 双指针：O(n)
 * 
 * 空间复杂度：
 * - 动态规划：O(n)
 * - 单调栈：O(n)
 * - 双指针：O(1)
 */

// 方法一：动态规划
/**
 * @param {number[]} height
 * @return {number}
 */
var trap1 = function(height) {
    const n = height.length;
    if (n == 0) {
        return 0;
    }

    // leftMax[i] 表示位置 i 左侧的最大高度
    const leftMax = new Array(n).fill(0);
    leftMax[0] = height[0];
    for (let i = 1; i < n; ++i) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // rightMax[i] 表示位置 i 右侧的最大高度
    const rightMax = new Array(n).fill(0);
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; --i) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // 计算总接水量
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        ans += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return ans;
};

// 方法二：单调栈
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0;
    const stack = [];
    const n = height.length;
    
    for (let i = 0; i < n; ++i) {
        // 当遇到比栈顶元素高的柱子时，计算凹槽的接水量
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (!stack.length) {
                break;
            }
            
            // 凹槽左侧的柱子
            const left = stack[stack.length - 1];
            // 凹槽的宽度
            const currWidth = i - left - 1;
            // 凹槽的高度
            const currHeight = Math.min(height[left], height[i]) - height[top];
            // 累加接水量
            ans += currWidth * currHeight;
        }
        stack.push(i);
    }
    return ans;
};

// 方法三：双指针
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0
    let left = 0, right = height.length - 1
    let leftMax = 0, rightMax = 0
    
    while(left < right) {
        // 更新左右两侧的最大高度
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        
        // 移动高度较小的一侧的指针
        if(height[left] < height[right]) {
            // 左侧的最大高度已经确定，计算当前位置的接水量
            ans += leftMax - height[left]
            ++left
        } else {
            // 右侧的最大高度已经确定，计算当前位置的接水量
            ans += rightMax - height[right]
            --right
        }
    }
    return ans
};