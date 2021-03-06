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