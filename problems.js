console.log('hello')
// take note?
// 1. comment on your ConvolverNode, build this habit
// - The amount of comments at the start should be commented to explain what they're doing.
// as your get better, this will be needed less and less.
// eventually you will only need to comment on important steps 

// 2. write documentation.
// every project you start should start with a readme
// file. learn basic markdown, many markdown cheat sheets often. 
// you'll build the habit of starting wtih readme files. 
// see how other apps
// Potential employers will look at github documentation will value this. 
// A nice portfolio will have applications with explained comments and documentation.


// * 973. K Closest Points to Origin(medium)
//     * Sort the array
//     * Splice the array
//     * Create a variable that output the squared value
 
// 226. Invert Binary Tree
var invertTree = function(root) {
    if( !root) return null;
    
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

invertTree([4,2,7,1,3,6,9])

// 49. Group Anagrams
// check to see if they are anagram, 
// if it is, put in a new array
// if not, create a new array and push in
// return the result with all values
var groupAnagrams = function(strs) {
    let result = [];
    let map = new Map();
    for(let i =0; i< strs.length; i++){
        if(!map.has(strs[i].split('').sort().join(''))){
            map.set(strs[i].split('').sort().join(''), [strs[i]])
        } else {
            map.get(strs[i].split('').sort().join('')).push(strs[i])
        }
    }
    result = [...map.values()]
    return result;
};

// 169. Majority Element
// hashmap
// count the number if the key is the same.
// if not in hashmap, set a new one with count 1
//

var majorityElement = function(nums) {
    let map = new Map();
    for(let i=0; i< nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 1)
        } else {
            map.set(nums[i], map.get(nums[i]) +1)
        }
    }
    const sortedMap = new Map([...map.entries()].sort((a,b) =>  b[1] - a[1]) )
    let key = sortedMap.keys().next().value
    return key
    
};

// 692. Top K Frequent Words
// hash them in the map
// sort the keys 
// return whatever the most

var topKFrequent = function(words, k) {
    let map = {};
    for(let i =0; i<words.length; i++){
        if(words[i] in map){
            map[words[i]]++
        }else {
            map[words[i]] = 1
        }
    }
    let key = Object.keys(map).sort();
    key = key.sort((a,b) => map[b] - map[a])
    return key.slice(0,k)
};


// 1603. Design Parking System


var ParkingSystem = function(big, medium, small) {
    this.carLot = [big, medium, small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(carType === 1){
        if(this.carLot[0] > 0){
            this.carLot[0]--;
            return true;
        } 
    }
    if(carType === 2){
        if(this.carLot[1] > 0){
            this.carLot[1]--;
            return true; 
        }
    }
    if(carType === 3){
        if(this.carLot[2] > 0){
           this.carLot[2]--;
            return true; 
        } 
    }
    return false
};



// 965. Univalued Binary Tree


var treeTraverse = function(root,val){
    if(root === null){
        return true;
    }
    let left = treeTraverse(root.left, val);
    let right = treeTraverse(root.right, val);
    return root.val === val && left && right
}

var isUnivalTree = function(root) {
    let val = root.val;
    return treeTraverse(root, val)
    l
};





// 295. Find Median from Data Stream

var MedianFinder = function() {
    this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let result = this.arr;
    for(let n = 0; n < result.length; n++){
        if(result[n] > num){
            return result.splice(n, 0, num);
        }
    }
    result.push(num)
};

/**
 * @return {number}
 */

// [2,3,4,5]

MedianFinder.prototype.findMedian = function() {
    let len = this.arr.length;
    if(len%2 != 0) return this.arr[Math.floor(len/2)]
    return (this.arr[len/2] + this.arr[(len/2)-1])/2
};


// 2022. Convert 1D Array Into 2D Array

var construct2DArray = function(original, m, n) {
    if(original.length !== m * n){
        return [];
    }
    let matrix = [];
    for(let i =0; i<m; i++){
        let row = original.slice(i*n, (i+1)*n);
        matrix.push(row)
    }
    return matrix
};

https://leetcode.com/contest/weekly-contest-294/problems/percentage-of-letter-in-string/

https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/

// 138. Copy List with Random Pointer

var copyRandomList = function(head) {
    const map = new Map();
    map.set(null, null);
    let curr = head;
    
    while(curr){
        const node = new Node(curr.val);
        map.set(curr,node);
        curr = curr.next;
    }
    
    curr = head;
    while(curr){
        const node = map.get(curr);
        node.next = map.get(curr.next);
        node.random = map.get(curr.random);
        curr= curr.next;
    }
    return map.get(head)
};

// 2287. Rearrange Characters to Make Target String

var rearrangeCharacters = function(s, target) {
    let targetFreq = {};
    let sFreq = {};
    
    for(let i=0; i<s.length; i++){
        let char = s[i]
        if(char in sFreq){
            sFreq[char]++;
        } else {
            sFreq[char] =1;
        }
    }
    
    for(let j =0; j<target.length; j++){
        let char = target[j];
        if(char in targetFreq){
            targetFreq[char]++
        } else {
            targetFreq[char] =1
        }
    }
    
    let result = Infinity;
    
    for(let targetChar in targetFreq){
        if(targetChar in sFreq){
            let sOccurrences = sFreq[targetChar];
            let targetOccurrences = targetFreq[targetChar];
            result = Math.min(result, Math.floor(sOccurrences / targetOccurrences))
        } else {
            return 0;
        }
    }
    return result;
};

// 70. Climbing Stairs
// recursion & memoization

var climbStairs = function(n, memo = new Array()) {
    // base case;
    if(n === 1) return 1;
    if(n === 2) return 2;
    if(memo[n]) return memo[n]
    // recursion
    let res = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    memo[n] = res;
    return res;
    
    
};

// 94. Binary Tree Inorder Traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let ans = [];
    
    function dfs(root){
        if(!root){
            return
        }
        dfs(root.left);
        ans.push(root.val)
        dfs(root.right);
    }
    dfs(root);
    return ans
};

// 145. Binary Tree Postorder Traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    let ans = [];
    function dfs(root){
        if(root == null){
            return
        }
        dfs(root.left);
        dfs(root.right);
        ans.push(root.val)
    }
    dfs(root);
    return ans;
};

// 199. Binary Tree Right Side View
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// return node, node right, node.right.right
// breadth first search. BFS
//
var rightSideView = function(root) {
    let ans = [];
    function dfs(node, level){
        if(!node) return
        ans[level] = node.val;
        dfs(node.left, level+1);
        dfs(node.right, level+1)
    }
    dfs(root,0);
    return ans
};
console.log(rightSideView([1,2,3,null,5,null,4]))


// lowest common ancestor

var lowestCommonAncestor = function(root, p, q) {
    function helper(node){
        if(!node){
            return null;
        }
        if(node == p || node == q){
            return node
        }
        let left = helper(node.left);
        let right = helper(node.right)

        if(left && right){
            return node
        }
        if(left){
            return left
        }
        return right
    }
    return helper(root)
};

// word break

// Define a function 'wordBreak' that takes a string 's' and an array 'wordDict' as parameters.
var wordBreak = function(s, wordDict) {

    // Initialize a dynamic programming array 'dp' with length (s.length + 1), filling it with 'false'.
    let dp = new Array(s.length + 1).fill(false);

    // Create a Set 'wordDictSet' from the 'wordDict' array for efficient word lookup.
    let wordDictSet = new Set(wordDict);

    // Set the base case: an empty string can be broken into words from the wordDict.
    dp[0] = true;

    // Iterate through the string 's' from index 1 to its length.
    for (let i = 1; i <= s.length; i++) {
        // Nested loop to iterate through prefixes of 's' (substring up to index 'i').
        for (let j = 0; j < i; j++) {
            
            // Check if the substring from index 'j' to 'i' is in the wordDictSet
            // and if dp[j] is true, indicating that the prefix is breakable.
            if (dp[j] && wordDictSet.has(s.substring(j, i))) {
                // If the conditions are met, set dp[i] to true and break out of the loop.
                dp[i] = true;
                break;
            }
        }
    }
}


// partition equal subset sum

var canPartition = function(nums) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);

    // If the total sum is odd, it's not possible to partition into two equal subsets
    if (totalSum % 2 !== 0) {
        return false;
    }

    const targetSum = totalSum / 2;
    const dp = new Array(targetSum + 1).fill(false);
    dp[0] = true;

    for (const num of nums) {
        for (let i = targetSum; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }

    return dp[targetSum];
};


// Unique path:
var uniquePaths = function(m, n) {
    // Create a 2D DP array filled with zeros
    let dp = new Array(m).fill().map(() => new Array(n).fill(0));
    
    // Initialize the rightmost column and bottom row to 1
    for (let i = 0; i < m; i++) {
        dp[i][n-1] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[m-1][j] = 1;
    }
    
    // Fill in the DP array bottom-up
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            dp[i][j] = dp[i+1][j] + dp[i][j+1];
        }
    }
    
    // Return the result stored in the top-left corner
    return dp[0][0];
};


// Longest palindrome substring:

var longestPalindrome = function(s) {
    // Initialize an empty string to store the longest palindrome found
    let longString = '';
    // Initialize an empty string to store the current substring being checked
    let subString = '';

    // Outer loop: Iterate through each character of the input string
    for (let i = 0; i < s.length; i++) {
        // Inner loop: Iterate through each character from the end towards the current position i
        for (let j = s.length; j > i; j--) {
            // Extract a substring from index i to j (excluding j) from the input string s
            subString = s.slice(i, j);

            // Check if the current subString is a palindrome
            // and if its length is greater than the length of the current longString
            if (isPalindrome(subString) && longString.length < subString.length) {
                // If conditions are met, update longString with the current subString
                longString = subString;
            }
        }
    }

    // Return the longest palindrome found
    return longString;
};

// Function to check if a given subString is a palindrome
function isPalindrome(subString) {
    // Iterate through each character of the substring, comparing characters from the beginning with their corresponding characters from the end
    for (let i = 0; i < subString.length / 2; i++) {
        // Check if the characters at the current positions from the beginning and end do not match
        if (subString[i] !== subString[subString.length - (1 + i)]) {
            // If a non-matching pair is found, immediately return false
            return false;
        }
    }

    // If the loop completes without finding any non-matching pairs, the substring is a palindrome, and return true
    return true;
}

// Binary right side view:

var rightSideView = function(root) {
    if(!root) return[];
    let res = [];
    pre(root, 0);
    return res;

    function pre(node, h){
        if(!node) return;
        res[h] = node.val;
        pre(node.left, h+1)
        pre(node.right, h+1);
    }
};

// Container with most water:

var maxArea = function(height) {
    let p1 = 0;                           // Initialize the first pointer (p1) to the beginning of the array.
    let p2 = height.length - 1;           // Initialize the second pointer (p2) to the end of the array.
    let maxWater = 0;                    // Initialize the maximum water container area to 0.

    while (p1 < p2) {                    // While p1 is less than p2 (there are more bars to consider):
        const h1 = height[p1];           // Get the height of the bar at position p1.
        const h2 = height[p2];           // Get the height of the bar at position p2.
        const width = p2 - p1;           // Calculate the width between the two pointers.
        const minH = Math.min(h1, h2);   // Calculate the minimum height between the two bars.

        maxWater = Math.max(maxWater, minH * width);  // Calculate the area and update maxWater if it's larger.

        if (h1 < h2) {
            p1++;                       // If the bar at p1 is shorter, move p1 to the right.
        } else {
            p2--;                       // If the bar at p2 is shorter (or equal), move p2 to the left.
        }
    }

    return maxWater;                    // Return the maximum water container area found.
};


// Letter combination of a phone number

var letterCombinations = function(digits) {
    if (!digits.length) {
        return [];
    }
    
    // Create a mapping of digits to corresponding letters on a phone keypad.
    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const res = [];  // Initialize an array to store the result combinations.
    
    // Define a recursive backtrack function that generates combinations.
    function backtrack(idx, comb) {
        // If we have processed all digits, add the combination to the result.
        if (idx === digits.length) {
            res.push(comb);
            return;
        }
        
        // For the current digit, iterate through its corresponding letters.
        for (const letter of digitToLetters[digits[idx]]) {
            // Recursively call backtrack with the next digit and updated combination.
            backtrack(idx + 1, comb + letter);
        }
    }
    
    // Start the backtrack process with index 0 and an empty initial combination.
    backtrack(0, "");
    
    return res;  // Return the generated letter combinations.
};

// find all anagrams in a string

var findAnagrams = function(s, p) {
    // Create an array to store the starting indices of anagrams.
    const res = [];
    
    // Create an object to keep track of characters needed to form an anagram.
    const neededChars = {};

    // Populate neededChars with the characters and their counts from pattern 'p'.
    for (let char of p) {
        if (char in neededChars) {
            neededChars[char]++;
        } else {
            neededChars[char] = 1;
        }
    }

    // Initialize pointers and counters.
    let left = 0;               // Left pointer of the sliding window.
    let right = 0;              // Right pointer of the sliding window.
    let count = p.length;       // Counter for the characters needed to form an anagram of 'p'.

    // Start sliding the window through the string 's'.
    while (right < s.length) {
        // Check if the character at 's[right]' is needed for an anagram.
        if (neededChars[s[right]] > 0) {
            count--;            // Decrement the count of needed characters.
        }

        neededChars[s[right]]--; // Decrement the count of the character in 'neededChars'.
        right++;                // Expand the window to the right.

        // Check if all characters needed for an anagram are found.
        if (count === 0) {
            res.push(left);     // Add the left pointer index to 'res'.
        }

        // Check if the size of the window is equal to the length of 'p'.
        if (right - left === p.length) {
            // Check if the character at 's[left]' can be part of an anagram.
            if (neededChars[s[left]] >= 0) {
                count++;        // Increment the count of needed characters.
            }

            neededChars[s[left]]++; // Increment the count of the character in 'neededChars'.
            left++;                 // Shrink the window from the left.
        }
    }

    // Return the array 'res' containing the starting indices of anagrams of 'p' in 's'.
    return res;
};

// trapping rain water

var trap = function(height) {
    let result = 0;            // Initialize the result variable to store the trapped water.
    let start = 0;             // Initialize a start pointer at the beginning of the array.
    let end = height.length - 1; // Initialize an end pointer at the end of the array.
    let startMax = 0;          // Initialize a variable to track the maximum height on the left.
    let endMax = 0;            // Initialize a variable to track the maximum height on the right.

    while (start < end) {      // Iterate until the start pointer is less than the end pointer.
        if (height[start] < height[end]) {  // If the height at start is less than the height at end:
            if (height[start] >= startMax) { // Check if the current height is greater than or equal to the startMax.
                startMax = height[start];   // Update the startMax to the current height.
            } else {
                result += startMax - height[start]; // Add the trapped water between startMax and current height to the result.
            }
            start++; // Move the start pointer to the right.
        } else { // If the height at end is greater than or equal to the height at start:
            if (height[end] >= endMax) { // Check if the current height is greater than or equal to the endMax.
                endMax = height[end];   // Update the endMax to the current height.
            } else {
                result += endMax - height[end]; // Add the trapped water between endMax and current height to the result.
            }
            end--; // Move the end pointer to the left.
        }
    }
    return result; // Return the total trapped water.
};

//Rotate Image:


var rotate = function(matrix){
  // find transpose 
  for(let i=0; i<matrix.length; i++){
      for(let j=i; j<matrix.length; j++){
          let temp = matrix[i][j]
          matrix[i][j] = matrix[j][i]
          matrix[j][i] = temp
      }
  }
  // find reverse array
  for(let i =0; i<matrix.length; i++){
      for(let j=0; j<matrix.length / 2; j++){
          let temp = matrix[i][j]
          matrix[i][j] = matrix[i][matrix.length-1-j]
          matrix[i][matrix.length-1-j] = temp
      }
  }
  return matrix

  //Group Anagrams:


var groupAnagrams = function(strs) {
    let result = {};
    for(let word of strs){
        let cleansed = word.split("").sort().join("");
        if(result[cleansed]){
            result[cleansed].push(word)
        }else {
            result[cleansed] = [word]
        }
    }
    return Object.values(result)
}

//Maximum subarray:

var maxSubArray = function(nums) {
    let sum = nums[0];
    let maxSum = nums[0];
    for(let i = 1; i<nums.length; i++){
        sum = Math.max(nums[i], sum + nums[i])
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum
};

// calculator

var calculate = function(s) {
    let sign = 1; // Initialize the sign to positive
    let sum = 0;  // Initialize the sum to 0
    const stack = []; // Create a stack to handle parentheses and signs

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') { // If a digit is encountered
            let num = 0; // Initialize a variable to store the number
            while (s[i] >= '0' && s[i] <= '9') {
                // Parse the entire number by iterating through digits
                num = num * 10 + (s[i] - '0');
                i++;
            }
            // Add the number to the sum with the appropriate sign
            sum += num * sign;
            i--; // Decrement i because it was incremented one extra time in the loop
        } else if (s[i] === '+') { // If a plus sign is encountered
            sign = 1; // Set the sign to positive
        } else if (s[i] === '-') { // If a minus sign is encountered
            sign = -1; // Set the sign to negative
        } else if (s[i] === '(') { // If an opening parenthesis is encountered
            // Push the current sum and sign onto the stack
            stack.push(sum);
            stack.push(sign);
            // Reset sum and sign for the calculations inside the parentheses
            sum = 0;
            sign = 1;
        } else if (s[i] === ')') { // If a closing parenthesis is encountered
            // Pop the sign and the previous sum from the stack
            // Multiply the sum by the sign and add it to the current sum
            sum = stack.pop() * sum + stack.pop();
        }
    }

    return sum; // The final sum represents the result of the expression
};


// combination sum

var combinationSum = function(candidates, target) {
    let combinations = [];
    candidates.sort((a,b) => a - b);

    function backtrack(tempList, remaining, start){
        for(let i = start; i< candidates.length && candidates[i] <= remaining; i++){
            if(candidates[i] === remaining){
                combinations.push([...tempList, candidates[i]])
            } else{
                backtrack([...tempList, candidates[i]], remaining - candidates[i], i)
            }
        }
    }
    backtrack([], target, 0);
    return combinations;
};

// House robber

var rob = function(nums, idx = 0, memo = {}) {
    if(idx in memo){
        return memo[idx]
    }
    
    if(idx >= nums.length){
        return 0;
    }

    const sumIfSkipped = rob(nums, idx+1, memo);
    const sumIfRobbed = nums[idx] + rob(nums, idx +2, memo)

    return memo[idx] = Math.max(sumIfSkipped, sumIfRobbed)
};

//House robber II
//Recursion
var rob = function(nums, idx = 0 ,memo = {}) {
    if(nums.length === 1) return nums[0]

    const includeFirst = robHouse(nums,0,nums.length-1, {})
    const includeLast = robHouse(nums,1, nums.length, {})
    return Math.max(includeFirst, includeLast);
};

const robHouse = (nums, i, endIdx, memo) => {
    if(i in memo) return memo[i]
    if(i >= endIdx) return 0;

    const include = nums[i] + robHouse(nums, i +2, endIdx, memo)
    const exclude = robHouse(nums, i+1, endIdx, memo)

    memo[i] = Math.max(include, exclude)
    return memo[i]
}

// Group Anagrams:

var groupAnagrams = function(strs) {
    let result = {};
    for(let word of strs){
        let cleansed = word.split("").sort().join("");
        if(result[cleansed]){
            result[cleansed].push(word)
        }else {
            result[cleansed] = [word]
        }
    }
    return Object.values(result)
};




// Maximum subarray:

var maxSubArray = function(nums) {
    let sum = nums[0];
    let maxSum = nums[0];
    for(let i = 1; i<nums.length; i++){
        sum = Math.max(nums[i], sum + nums[i])
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum
};

// missing numbers

var missingNumber = function(nums) {
    if(nums.length === 1 && nums[0] === 0) return 1
    if(nums.length === 1 && nums[0] === 1) return 0
    let sorted = nums.sort((a,b) => a-b)
    console.log(sorted)
    
    for(let i =0; i<= sorted.length; i++){
        if(i !== sorted[i]){
            return i
        }
    }
};

//Spiral Matrix:


var spiralOrder = function(matrix) {
    let result = [];
    let top = 0;
    let bottom = matrix.length;
    let left = 0;
    let right = matrix[0].length;

    while(left < right && top < bottom){

        for(let i = left; i<right; i++){
            result.push(matrix[top][i])
        }

        top++;

        for(let i = top; i<bottom; i++){
            result.push(matrix[i][right-1]);
        }

        right--;

        if(!(left < right && top < bottom)){
            break;
        }

        for(let i = right-1; i>=left; i--){
            result.push(matrix[bottom-1][i])
        }
        bottom--;

        for(let i = bottom-1; i>=top; i--){
            result.push(matrix[i][left])
        }
        left++
    }
    return result;
};



// Longest increase subsequence 

var lengthOfLIS = function(nums) {
    if(!nums) return 0;

    let n = nums.length;
    let dp = new Array(n).fill(1)

    for(let i =1; i< n; i++){
        for(let j = 0; j<i; j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }
    return Math.max(...dp)
};

// coin change memorization

// tabulation 
var coinChange = function(coins, amount) {
    // Create an array 'dp' to store minimum number of coins needed to make each amount
    const dp = new Array(amount + 1).fill(Infinity);
    
    // Initialize dp[0] to 0, as it takes 0 coins to make amount 0
    dp[0] = 0;

    // Iterate through each coin denomination
    for(let i = 0; i < coins.length; i++){
        // Iterate through each amount from coin[i] to 'amount'
        for(let j = coins[i]; j <= amount; j++){
            // Update dp[j] with the minimum of its current value and (dp[j - coins[i]] + 1)
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }

    // Return the minimum number of coins needed for the given amount
    return dp[amount] == Infinity ? -1 : dp[amount];
};

// memorization

var coinChange = function(coins, amount) {
    let result = countCoinChange(coins, amount);
    return result === Infinity ? -1 : result
};

let countCoinChange = (coins, amount, memo={}) =>{
    if(amount === 0) return 0;
    if(amount < 0) return Infinity;
    if(memo[amount] !== undefined) return memo[amount]

    let min = Infinity

    for(let coin of coins){
        const restAmount = amount - coin;
        min = Math.min(countCoinChange(coins, restAmount, memo) +1, min)
    }

    memo[amount] = min
    return memo[amount]
}

// climbing stairs

var climbStairs = function(n, memo = {}) {
    let table = Array(n +1);
    table[0] = 0
    table[1] = 1
    table[2] = 2
    for(let i = 3; i<=n; i++){
        table[i] = table[i-1] + table[i-2]
    }
    return table[n]
};  

// generate parenthesis

var generateParenthesis = function(n) {
    // Initialize an empty array 'res' to store valid combinations of parentheses.
    const res = [];

    // Define a recursive function 'go' to generate valid combinations.
    const go = (l, r, s) => {
        // If the length of the current combination 's' is equal to 2 * n, it's a valid combination.
        if (s.length === 2 * n) {
            res.push(s); // Add it to the result array.
            return;
        }

        // If we haven't used up all the left parentheses 'l', we can add a left parenthesis '('.
        if (l < n) {
            go(l + 1, r, s + '(');
        }

        // If there are unmatched left parentheses 'l' and we can add a right parenthesis ')', do so.
        if (r < l) {
            go(l, r + 1, s + ')');
        }
    };

    // Start the recursive generation process with initial counts and an empty string.
    go(0, 0, '');

    // Return the array 'res' containing all valid combinations of parentheses.
    return res;
};

// Kth smallest element
var kthSmallest = function(root, k) {
    let n = 0; // Counter to keep track of the number of nodes visited
    let res;   // Variable to store the kth smallest element

    // Inorder traversal function to visit nodes in ascending order
    const inorder = (root) => {
        if (!root) return; // Base case: If the node is null, return

        inorder(root.left); // Recursively visit left subtree

        if (n++ < k) res = root.val; // Increment the counter and check if it reaches k

        inorder(root.right); // Recursively visit right subtree
    }

    inorder(root); // Start the inorder traversal from the root

    return res; // Return the kth smallest element
};


// Jump game:

var canJump = function(nums) {
    let maxReach =  0;
    for(let i =0; i<nums.length; i++){
        if(i > maxReach){
            return false;
        }
        maxReach = Math.max(maxReach, i+nums[i])

        if(maxReach >= nums.length -1){
            return true;
        }
    }
    return true;
};

// Insert Interval
var insert = function(intervals, newInterval) {
    let [start, end] = newInterval;
    let left =[];
    let right = [];

    for(let interval of intervals){
        let [first, last] = interval;

        if(last < start) left.push(interval);
        else if(first > end) right.push(interval);
        else {
            start = Math.min(start, first);
            end = Math.max(end, last);
        }
    }
    return [...left, [start,end], ...right]
};

// is power four (recursion)

var isPowerOfFour = function(n) {
    if(n === 0) return false;
    if(n === 1) return true;
    if(n % 4 != 0) return false;
    return isPowerOfFour( n / 4)
};

// find the winner 

var findTheWinner = function(n, k) {
    let que = [];
    for(let i =1; i <= n; i++){
        console.log(que.push(i))
    }
    while(que.length > 1){
        let deleteCount = k-1;
        while(deleteCount > 0){
            que.push(que.shift())
            deleteCount--
        }
        que.shift()
    }
    return que.shift()

};

// length of the longest substring 

var lengthOfLongestSubstring = function (s) {
    // Initialize a set to store unique characters
    let set = new Set();
    
    // Initialize pointers and maxSize variables
    let left = 0;
    let maxSize = 0;

    // Edge cases: empty string or single character
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    // Iterate through the string using a sliding window
    for (let i = 0; i < s.length; i++) {
        // If the character is already in the set, shrink the window from the left
        while (set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }
        
        // Add the current character to the set
        set.add(s[i]);
        
        // Update the maxSize with the length of the current substring
        maxSize = Math.max(maxSize, i - left + 1);
    }
    
    // Return the length of the longest substring without repeating characters
    return maxSize;
}

// 35. 3sum

var threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b); // Step 1: Sort the array in ascending order

    for (let i = 0; i < nums.length; i++) { // Step 2: Iterate through each element
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue; // Step 3: Skip duplicate values to avoid duplicate triplets
        }
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) { // Step 4: Use two-pointer approach
            let threeSum = nums[i] + nums[left] + nums[right];
            if (threeSum > 0) {
                right--;
            } else if (threeSum < 0) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]]); // Step 5: Found a triplet, add to result
                left++;

                // Step 6: Skip duplicate values for the left pointer
                while (nums[left] == nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }
    return res; // Step 7: Return the result array containing unique triplets
};

// word search 
const exist = function(board, word) {
    // Get the number of rows (n) and columns (m) of the board
    const n = board.length, m = board[0].length;
    // Check if the length of the 'word' is less than 1, in which case, return false
    if (word.length < 1) return false;

    // Define a depth-first search function
    const dfs = (i, j, pos) => {
        // Base cases for termination of DFS
        if (i === n || i < 0 || j === m || j < 0 || board[i][j] !== word[pos]) return false;
        if (pos === word.length - 1) return true;

        board[i][j] = "."; // Choose this element so we don't find it again

        // Check every direction and see if any of them return a match
        const found =
            dfs(i + 1, j, pos + 1) ||
            dfs(i - 1, j, pos + 1) ||
            dfs(i, j + 1, pos + 1) ||
            dfs(i, j - 1, pos + 1);

        board[i][j] = word[pos]; // Unchoose element
        return found;
    };

    // Iterate through the board to find the starting point for the word
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === word[0]) {
                const match = dfs(i, j, 0);
                if (match) return true; // If a match is found, return true
            }
        }
    }

    return false; // If no match is found, return false
};

//36. Binary tree level order Traversal

// Function to perform level-order traversal on a binary tree
var levelOrder = function(root) {
    // Check if the root is null (empty tree)
    if (!root) {
        // Return an empty array since there are no levels to traverse
        return [];
    }

    // Initialize an array to store the final output (result)
    const result = [];
    
    // Initialize a queue with the root node to start breadth-first traversal
    const queue = [root];

    // Perform breadth-first traversal
    while (queue.length > 0) {
        // Determine the size of the current level (number of nodes in the queue)
        const levelSize = queue.length;

        // Initialize an empty array to store node values at the current level
        const currentLevel = [];

        // Process each node in the current level
        for (let i = 0; i < levelSize; i++) {
            // Dequeue a node from the front of the queue
            const currentNode = queue.shift();

            // Add the node's value to the currentLevel array
            currentLevel.push(currentNode.val);

            // Enqueue the left child if it exists
            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            // Enqueue the right child if it exists
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        // After processing all nodes in the current level, add currentLevel to the result array
        result.push(currentLevel);
    }

    // Return the final result array containing lists of values at each level
    return result;
};

// find k closest element 

var findClosestElements = function(arr, k, x) {
    let left = 0;  // Initialize the left pointer for the sliding window.
     let right = arr.length - k;  // Initialize the right pointer for the sliding window.
     while (left < right) {  // Continue until left pointer crosses or equals the right pointer.
         const mid = left + ((right - left) >> 1);  // Calculate the midpoint of the current window.
         if (x - arr[mid] > arr[mid + k] - x) {  // Compare the distances of the elements at mid and mid+k from x.
             left = mid + 1;  // If the element at mid is farther from x, move the window to the right.
         } else {
             right = mid;  // If the element at mid+k is farther from x, move the window to the left.
         }
     }
     return arr.slice(left, left + k);  // Return the subarray with k closest elements.
 };


 // find Kth largest element
 var findKthLargest = function(nums, k) {
    const mid = Math.floor(nums.length/2);  // Calculate the midpoint of the array.
    
    // Move from the middle to the start to bubble down smaller numbers
    // and create a max heap.
    for(let i = mid; i >= 0; i--) bubbleDown(i);
    
    let result;
    
    // Remove from the top of the heap k times.
    while(k--) {
        swap(0, nums.length-1);  // Swap the root with the last element.
        result = nums.pop();  // Pop the last element (the maximum value).
        bubbleDown(0);  // Restore heap property by bubbling down from the root.
    }
    
    // Function to bubble down an element at the given index.
    function bubbleDown(idx) {
        const leftChild = 2 * idx + 1;  // Calculate the index of the left child.
        const rightChild = 2 * idx + 2;  // Calculate the index of the right child.
        let max = idx;  // Initialize max index to the current index.
        
        // Compare with left child and update max if necessary.
        if(leftChild < nums.length && nums[leftChild] > nums[max]) max = leftChild;
        // Compare with right child and update max if necessary.
        if(rightChild < nums.length && nums[rightChild] > nums[max]) max = rightChild;
        
        // If max has changed, swap elements and bubble down further.
        if(max !== idx) {
            swap(idx, max);  // Swap the elements at idx and max.
            bubbleDown(max);  // Recursively bubble down at max.
        }
    }
    
    // Function to swap elements at indices i and j.
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];  // Swap elements using destructuring assignment.
    }
    
    return result;  // Return the kth largest element.
};

// word search 

var exist = function(board, word) {
    const n = board.length, m = board[0].length;  // Get the dimensions of the board.
    if(word.length < 1) return false;  // If the word is empty, return false.

    // Define a depth-first search function.
    const dfs = (i, j, pos) => {
        // Check for out-of-bounds or mismatched characters.
        if(i === n || i < 0 || j === m || j < 0 || board[i][j] !== word[pos]) return false;
        // If the position is at the end of the word, return true.
        if(pos === word.length-1) return true;
        board[i][j] = '.';  // Mark the current cell as visited.

        // Recursively search in all four directions.
        const found = 
            dfs(i+1, j, pos+1) ||  // Down
            dfs(i-1, j, pos+1) ||  // Up
            dfs(i, j+1, pos+1) ||  // Right
            dfs(i, j-1, pos+1);    // Left
        
        board[i][j] = word[pos];  // Restore the current cell to its original value.
        return found;  // Return whether the word was found.
    }

    // Iterate through each cell in the board.
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            // If the current cell matches the first character of the word, start DFS.
            if(board[i][j] === word[0]) {
                const match = dfs(i, j, 0);  // Check if the word is found starting from this cell.
                if(match) return true;  // If found, return true.
            }
        }
    }
    return false;  // If not found, return false.
};

// Kth smallest element in a BST

var kthSmallest = function(root, k) {
    let res 
    let n = 0;
    let inorder = (root) => {
        if(!root) return
        inorder(root.left)
        if(n++ < k) res = root.val
        inorder(root.right)
    }
    inorder(root)

    return res
};

// climbing Stairs with memo

var climbStairs = function(n, memo = {}) {
    if(n in memo){
        return memo[n]
    }
    if(n <= 1){
        return 1
    }
    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2,memo)
    return memo[n]
};  

// climbing stairs without memo

var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }
    
    return climbStairs(n - 1) + climbStairs(n - 2);
};

// fibonocci with memorization

var fib = function(n, memo = {}) {
    if(n in memo){
        return memo[n]
    }
    if(n <= 1) return n
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
};

// contain duplicate II

var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();
    
    // Initialize the sliding window of size k
    for (let i = 0; i < nums.length; i++) {
        // If the size of the set exceeds k, remove the leftmost element
        if (i > k) {
            set.delete(nums[i - k - 1]);
        }
        
        // Check if the current element is already in the set
        if (set.has(nums[i])) {
            return true;
        }
        
        // Add the current element to the set
        set.add(nums[i]);
    }
    
    return false;
};


// number of sub-arrays of size k and average greater than or equal to threshold
var numOfSubarrays = function(arr, k, threshold) {
    // If the array length is less than k, there are no subarrays of length k
    if (arr.length < k) {
        return 0;
    }

    // Initialize an array to store the average sum of each subarray
    let subarrayAverages = [];
    let maxSum = 0;

    // Calculate the sum of the first k elements to start
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    // Calculate the average of the first subarray and push it into the array
    subarrayAverages.push(maxSum / k);

    // Calculate the sum of subsequent subarrays by sliding the window
    for (let i = k; i < arr.length; i++) {
        // Subtract the element going out of the window and add the new element
        maxSum = maxSum - arr[i - k] + arr[i];
        // Calculate the average of the current subarray and push it into the array
        subarrayAverages.push(maxSum / k);
    }

    // Count the number of subarrays with average sum greater than or equal to the threshold
    let count = 0;
    for (let i = 0; i < subarrayAverages.length; i++) {
        if (subarrayAverages[i] >= threshold) {
            count++;
        }
    }
    return count;
};