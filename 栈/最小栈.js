// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// 实现 MinStack 类:

// MinStack() 初始化堆栈对象。
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。
// 构造函数：初始化两个栈
var MinStack = function () {
  this.stack1 = []; // 数据栈：存储所有入栈的元素，实现正常的栈操作
  this.stack2 = []; // 辅助栈：存储当前栈中的最小值，仅在满足条件时入栈/出栈
};

/** 
 * 入栈操作
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  // 1. 数据栈正常入栈
  this.stack1.push(val);
  // 2. 辅助栈：只有空，或当前值≤辅助栈顶（保证栈顶始终是最小值），才入栈
  if (this.stack2.length === 0 || this.stack2[this.stack2.length - 1] >= val) {
    this.stack2.push(val);
  }
};

/**
 * 出栈操作
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 1. 数据栈出栈，并判断出栈的元素是否是辅助栈的栈顶（即当前最小值）
  if (this.stack1.pop() === this.stack2[this.stack2.length - 1]) {
    // 2. 如果是最小值，辅助栈也出栈，保证辅助栈顶始终是当前栈的最小值
    this.stack2.pop();
  }
};

/**
 * 获取栈顶元素（数据栈栈顶）
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack1[this.stack1.length - 1];
};

/**
 * 获取当前栈中的最小值（辅助栈栈顶）
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack2[this.stack2.length - 1];
};