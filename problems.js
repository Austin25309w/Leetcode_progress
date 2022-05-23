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