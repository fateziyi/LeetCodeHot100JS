/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 1、两数之和（哈希表）
const twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let res = target - nums[i]
    if (map.has(res)) {
      return [map.get(res), i]
    }
    map.set(nums[i], i)
  }
}

// 2、有效的括号（栈）
const isValid = function (s) {
  const leftToRight = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
  ])
  const stack = []
  if (!s) return true
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (leftToRight.has(ch)) {
      stack.push(ch)
    } else {
      if (!stack.length || stack.pop() !== ch) return false
    }
  }
  return !stack.length
}

// 3、合并两个有序链表（链表）
const mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode(-1)
  let cur = dummy
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  cur.next = l1 === null ? l2 : l1
  return dummy.next
}

// 4、搜索插入位置（二分查找）
const searchInsert = function (nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}

// 5、爬楼梯（动态规划）
const climbStairs = function (n) {
  const f = []
  f[1] = 1
  f[2] = 2
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }
  return f[n]
}

// 6、二叉树的中序遍历（二叉树）
const inorderTraversal = function (root) {
  const res = []
  const stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}

// 7、对称二叉树（二叉树）
const isSymmetric = function (root) {
  function isSameTree(p, q) {
    if (p === null || q === null) {
      return p === q;
    }
    return p.val === q.val && isSameTree(p.left, q.right) && isSameTree(p.right, q.left)
  }
  return isSameTree(root.left, root.right)
}

// 8、二叉树的最大深度（二叉树）
const maxDepth = function (root) {
  if (root === null) {
    return 0
  }
  const lDepth = maxDepth(root.left)
  const rDepth = maxDepth(root.right)
  return Math.max(lDepth, rDepth) + 1
}

// 9、将有序数组转换为二叉搜索树（二叉树）
const sortedArrayToBST = function (nums) {
  function dfs(left, right) {
    if (left > right) return null
    const m = Math.floor((left + right) / 2)
    return new TreeNode(nums[m], dfs(left, m - 1), dfs(m + 1, right))
  }
  return dfs(0, nums.length - 1)
}

// 10、杨辉三角（动态规划）
const generate = function (numRows) {
  const c = Array(numRows)
  for (let i = 0; i < numRows; i++) {
    c[i] = Array(i + 1)
    c[i][0] = c[i][i] = 1
    for (let j = 1; j < i; j++) {
      c[i][j] = c[i - 1][j - 1] + c[i - 1][j]
    }
  }
  return c
}

// 11、买卖股票的最佳时机（贪心算法）
const maxProfit = function (prices) {
  let ans = 0
  let minPrice = prices[0]
  for (const p of prices) {
    ans = Math.max(ans, p - minPrice)
    minPrice = Math.min(minPrice, p)
  }
  return ans
}

// 12、只出现一次的数字（技巧）
const singleNumber = function (nums) {
  let ans = 0
  for (const x of nums) {
    ans ^= x
  }
  return ans
}

// 13、环形链表（链表）
const hasCycle = function (head) {
  if (head === null || head.next === null) return false;
  let slow = head, fast = head.next;
  while (fast !== null && fast.next !== null) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next
  }
  return false
}

// 14、相交链表（链表）
const getIntersectionNode = function (headA, headB) {
  let p = headA, q = headB
  while (p !== q) {
    p = p ? p.next : headB
    q = q ? q.next : headA
  }
  return p
}

// 15、多数元素（技巧）
const majorityElement = function (nums) {
  let ans = 0, hp = 0
  for (const x of nums) {
    if (hp === 0) {
      ans = x
      hp = 1
    } else {
      hp += x === ans ? 1 : -1
    }
  }
  return ans
}

// 16、反转链表（链表）
const reverseList = function (head) {
  let cur = head, pre = null
  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

// 17、翻转二叉树（二叉树）
const invertTree = function (root) {
  if (!root) return root
  let right = invertTree(root.right)
  let left = invertTree(root.left)
  root.right = left
  root.left = right
  return root
}

// 18、回文链表（链表）
const isPalindrome = function (head) {
  function middleNode(head) {
    let slow = head, fast = head
    while (fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }
  function reverseList(head) {
    let cur = head, pre = null
    while (cur) {
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }
  const mid = middleNode(head)
  let head2 = reverseList(mid)
  while (head2) {
    if (head.val !== head2.val) return false
    head = head.next
    head2 = head2.next
  }
  return true
}

// 19、移动零（双指针）
const moveZeroes = function (nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
    }
  }
  return nums
}

// 20、二叉树的直径（二叉树）
const diameterOfBinaryTree = function (root) {
  let ans = 0
  function dfs(node) {
    if (node === null) return -1
    const lLen = dfs(node.left) + 1
    const rLen = dfs(node.right) + 1
    ans = Math.max(ans, lLen + rLen)
    return Math.max(lLen, rLen)
  }
  dfs(root)
  return ans
}

// 21、无重复字符的最长子串（滑动窗口）
const lengthOfLongestSubstring = function (s) {
  let ans = 0, left = 0
  const window = new Set()
  for (let right = 0; right < s.length; right++) {
    const c = s[right]
    while (window.has(c)) {
      window.delete(s[left])
      left++
    }
    window.add(c)
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}

// 22、最长回文子串（二分查找）
const longestPalindrome = function (s) {
  let res = ''
  for (let k = 0; k < s.length; k++) {
    let i = k - 1, j = k + 1
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--
      j++
    }
    res = res.length >= (j - i - 1) ? res : s.slice(i + 1, j)
    i = k, j = k + 1
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--
      j++
    }
    res = res.length >= (j - i - 1) ? res : s.slice(i + 1, j)
  }
  return res
}

// 23、盛最多水的容器（双指针）
const maxArea = function (height) {
  let ans = 0, left = 0, right = height.length - 1
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left)
    ans = Math.max(ans, area)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return ans
}

// 24、三数之和（双指针）
const threeSum = function (nums) {
  const res = []
  nums.sort((a, b) => a - b)
  const len = nums.length
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1, right = len - 1
    if (i > 0 && nums[i] === nums[i - 1]) continue
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum < 0) {
        left++
        while (left < right && nums[left] === nums[left - 1]) left++
      } else if (sum > 0) {
        right--
        while (left < right && nums[right] === nums[right + 1]) right--
      } else {
        res.push([nums[i], nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left] === nums[left - 1]) left++
        while (left < right && nums[right] === nums[right + 1]) right--
      }
    }
  }
  return res
}

// 26、电话号码的字母组合（回溯）
const letterCombinations = function (digits) {
  const MAPPING = [
    "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"
  ]
  const len = digits.length
  if (len === 0) return []
  const res = []
  const cur = []
  dfs(0)
  function dfs(index) {
    if (index === len) {
      res.push(cur.join(""))
      return
    }
    const letters = MAPPING[Number(digits[index])]
    for (const i of letters) {
      cur[index] = i
      dfs(index + 1)
    }
  }
  return res
}

// 27、删除链表的倒数第 N 个结点（链表）
const removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head)
  let left = dummy, right = dummy
  while (n--) {
    right = right.next
  }
  while (right.next) {
    left = left.next
    right = right.next
  }
  left.next = left.next.next
  return dummy.next
}

// 28、全排列（回溯）
const permute = function (nums) {
  const len = nums.length
  const res = []
  const cur = []
  const visited = {}
  dfs(0)
  function dfs(nth) {
    if (nth === len) {
      res.push(cur.slice())
      return
    }
    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = 1
        cur.push(nums[i])
        dfs(nth + 1)
        cur.pop()
        visited[nums[i]] = 0
      }
    }
  }
  return res
}

// 29、字母异位词分组（哈希表）
const groupAnagrams = function (strs) {
  const map = new Map()
  for (const s of strs) {
    const sorted = s.split('').sort().join('')
    if (!map.has(sorted)) {
      map.set(sorted, [])
    }
    map.get(sorted).push(s)
  }
  return Array.from(map.values())
}

// 30、最大子数组和（普通数组）
const maxSubArray = function (nums) {
  let ans = -Infinity
  let f = 0
  for (const x of nums) {
    f = Math.max(f + x, x)
    ans = Math.max(ans, f)
  }
  return ans
}

// 31、合并区间（普通数组）
const merge = function (intervals) {
  intervals.sort((p, q) => p[0] - q[0])
  const ans = []
  for (const p of intervals) {
    const len = ans.length
    if (len && p[0] < ans[len - 1][1]) {
      ans[len - 1][1] = Math.max(ans[len - 1][1], p[1])
    } else {
      ans.push(p)
    }
  }
  return ans
}

// 32、子集（回溯）
const subsets = function (nums) {
  const len = nums.length
  const res = []
  const cur = []
  dfs(0)
  function dfs(index) {
    res.push(cur.slice())
    for (let i = index; i < len; i++) {
      cur.push(nums[i])
      dfs(i + 1)
      cur.pop()
    }
  }
  return res
}

// 33、验证二叉搜索树（二叉树）
const isValidBST = function (root) {
  function dfs(root, lower, upper) {
    if (!root) return true
    if (root.val <= lower || root.val >= upper) return false
    return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper)
  }
  return dfs(root, -Infinity, Infinity)
}

// 34、二叉树的层序遍历（二叉树）
const levelOrder = function (root) {
  let res = []
  if (!root) return res
  const queue = [root]
  while (queue.length) {
    const level = []
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const top = queue.shift()
      level.push(top.val)
      if (top.left) queue.push(top.left)
      if (top.right) queue.push(top.right)
    }
    res.push(level)
  }
  return res
}
