// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//  @param {TreeNode} root
//   @return {number[][]}

// Node class
// class Node{
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

var zigzagLevelOrder = function(root) {
  var res = [];
  function recur(num, level) {
    if (!num) return;
    if (res.length <= level) {
      res.push([]); //in the current level, add [] to store following current value.
      //if res.length > level, which means level already exists.
      //so we can add the current value to the existing array.
    }
    if (level % 2 == 0) {
      res[level].push(num.val); // push is adding the value at the end of the array
    } else {
      res[level].unshift(num.val); // unshift is adding the value in the begining of the array
    }
    recur(num.left, level + 1);
    recur(num.right, level + 1);
  }

  recur(root, 0); //start the recursion function from root node with level 0
  return res;
};
console.log(zigzagLevelOrder([3, 9, 20, null, null, 15, 7]));
