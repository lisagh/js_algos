/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2    4
 \ /   / | \
  3   5  8  9
   \ / \     \
    6   7    11

Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

Sample input/output (pseudodata):

parentChildPairs = [
    (1, 3), (2, 3), (3, 6), (5, 6),
    (5, 7), (4, 5), (4, 8), (4, 9), (9, 11)
]

Output may be in any order:

findNodesWithZeroAndOneParents(parentChildPairs) => [
  [1, 2, 4],        // Individuals with zero parents
  [5, 7, 8, 9, 11] // Individuals with exactly one parent
]
*/

let parentChildPairs = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [9, 11]
];

function findNodesWithZeroAndOneParents(parentChildPairs) {
  var zero = [],
    one = [];
  var res1 = [];
  var res2 = [];
  var map = new Map();
  for (let i = 0; i < parentChildPairs.length; i++) {
    zero.push(parentChildPairs[i][0]);
    if (map.has(parentChildPairs[i][1])) {
      var counter = map.get(parentChildPairs[i][1]) + 1;
      map.set(parentChildPairs[i][1], counter);
    } else {
      map.set(parentChildPairs[i][1], 1);
    }
  }

  for (let n = 0; n < parentChildPairs.length; n++) {
    var counter = map.get(parentChildPairs[n][1]);
    if (counter == 1) {
      res2.push(parentChildPairs[n][1]);
    }
  }
  for (let j = 0; j < zero.length; j++) {
    if (!map.has(zero[j]) && !res1.includes(zero[j])) res1.push(zero[j]);
  }
  return [res1, res2];
}
console.log(findNodesWithZeroAndOneParents(parentChildPairs));
