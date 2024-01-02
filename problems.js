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

