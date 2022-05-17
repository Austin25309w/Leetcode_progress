console.log('hello')

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