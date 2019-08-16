// sort the array
// var points = [40, 100, 1, 5, 25, 10];

// points.sort(function(a, b) {
//   return a - b;
// });

// console.log(points);

// var kClosest = function(points, K) {
//   if (points.length <= 1) return points;
//   var square = [];
//   for (var i = 0; i < points.length; i++) {
//     square[i] = Math.sqrt(points[i][0] ^ (2 + points[i][1]) ^ 2);

//     console.log(square[i]);
//   }
//   square = square.sort(function(a, b) {
//     return a - b;
//   });
//   console.log(square);
//   var res = [];
//   for (var i = 0; i < K; i++) {
//     res[i] = square[i];
//   }
//   return res;
// };
// console.log(kClosest([[1, 3], [-2, 2]], 1));
// var reorderLogFiles = function(logs) {
//   function getLog(str) {
//     // get after-identifier part of log
//     return str.slice(str.indexOf(" ") + 1);
//   }

//   function isDigitalStr(str) {
//     // the condition is that either ALL str[i] are digits or they ALL are symbols
//     // so we may check str[0] only
//     return str[0] >= "0" && str[0] <= "9" ? true : false;
//   }

//   function compare(a, b) {
//     // main comparing function for 2 strings, if they're equal then compares identifiers
//     let res = getLog(a).localeCompare(getLog(b));
//     return res == 0
//       ? a.slice(0, a.indexOf(" ")).localeCompare(b.slice(0, b.indexOf(" ")))
//       : res;
//   }

//   let resLogs = []; // the resulting array: all digital logs will go into it befor symbol logs
//   let symbolLogs = []; // the array for sorting symbol logs

//   for (let i = 0; i < logs.length; i++) {
//     if (isDigitalStr(getLog(logs[i]))) resLogs.push(logs[i]);
//     else symbolLogs.push(logs[i]);
//   }

//   return [...symbolLogs.sort(compare), ...resLogs];
// };
// console.log(
//   reorderLogFiles([
//     "a1 9 2 3 1",
//     "g1 act car",
//     "zo4 4 7",
//     "ab1 off key dog",
//     "a8 act zoo"
//   ])
// );
// class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.map = new Map();
//   }
//   get(key) {
//     let val = this.map.get(key);
//     if (!val) returen - 1;
//     this.map.set(key, val);
//     return val;
//   }

//   put(key, val) {
//     if (this.map.has(key)) {
//       this.map.delete(key);
//     }
//     this.map.set(key, val);
//     let keys = this.map.keys();
//     if (this.map.size > this.capacity) {
//       this.map.delete(this.map(keys.next().value));
//     }
//   }
// }
// var mostCommonWord = function(paragraph, banned) {
//   let arr = paragraph.split(/[\!\?\'\,\;\.\s]/),
//     dict = {},
//     max = -1,
//     res = "";
//   console.log(arr);
//   arr.forEach(w => {
//     let word = w.toLowerCase();
//     if (word.length && !banned.includes(word)) {
//       dict[word] = dict[word] == undefined ? 1 : dict[word] + 1;
//     }
//   });
//   for (let k in dict) {
//     if (dict[k] > max) {
//       max = dict[k];
//       res = k;
//     }
//   }
//   return res;
// };

// var mostCommonWord = function(paragraph, banned) {
//   var map = new Map();
//   var arr = paragraph.split(/[\!\?\'\,\;\.\s]/);
//   var max = 0;
//   var count = 0;
//   var res;
//   arr.forEach(word => {
//     word = word.toLowerCase();
//     if (!banned.includes(word) && word.length) {
//       if (map.has(word)) {
//         count = map.get(word);
//         count++;
//         map.set(word, count);
//       } else {
//         map.set(word, 1);
//       }
//       if (map.get(word) > max) {
//         res = word;
//         max = map.get(word);
//       }
//     }
//   });
//   return res;
// };
// console.log(
//   mostCommonWord("Bob hit a ball, the! hit BALL flew far after it was hit.", [
//     "hit"
//   ])
// );
// const maxChars = 6;
// let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// let urlMap = new Map(); // for bi-directional map
// let codeMap = new Map();

// var encode = function(longUrl) {
//   if (urlMap.has(longUrl)) return urlMap.get(longUrl);

//   let code = [...Array(maxChars)]
//     .map(_ => Math.floor(Math.random() * charSet.length))
//     .map(i => charSet[i])
//     .join("");

//   urlMap.set(longUrl, code);
//   codeMap.set(code, longUrl);

//   return "http://tinyurl.com/" + code;
// };

// var decode = function(shortUrl) {
//   let code = shortUrl.substr(-maxChars);

//   if (!codeMap.has(code))
//     throw new Error(`The given code(${code}) is not existed!`);

//   return codeMap.get(code);
// };
// console.log(encode("https://leetcode.com/problems/design-tinyurl"));
// var items = [5, 3, 7, 6, 2, 9];
// function swap(items, leftIndex, rightIndex) {
//   var temp = items[leftIndex];
//   items[leftIndex] = items[rightIndex];
//   items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//   var pivot = items[Math.floor((right + left) / 2)], //middle element
//     i = left, //left pointer
//     j = right; //right pointer
//   console.log("pivot is " + pivot);
//   while (i <= j) {
//     while (items[i] < pivot) {
//       i++;
//     }
//     while (items[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       swap(items, i, j); //sawpping two elements
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

// function quickSort(items, left, right) {
//   var index;
//   if (items.length > 1) {
//     index = partition(items, left, right); //index returned from partition
//     if (left < index - 1) {
//       //more elements on the left side of the pivot
//       quickSort(items, left, index - 1);
//       console.log(items + " the left is " + left + " right is " + right);
//     }
//     if (index < right) {
//       //more elements on the right side of the pivot
//       quickSort(items, index, right);
//       console.log(
//         items +
//           " when index < right, the left is " +
//           left +
//           " right is " +
//           right
//       );
//     }
//   }
//   return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]
// var prisonAfterNDays = function(cells, N) {
//   if (cells == null || N <= 0) return cells;
//   var myset = new Set();
//   var cycle = 0;
//   var hasCycle = new Boolean(false);
//   for (var i = 0; i < N; i++) {
//     var next = NextDay(cells);
//     if (myset.has(next)) {
//       hasCycle = true;
//       //   console.log(myset.has(key));
//       break;
//     } else {
//       cycle++;
//       myset.add(next);
//       console.log("false" + myset.has(next));
//     }
//     cells = next;
//   }
//   if (hasCycle) {
//     N = N % cycle;
//     // console.log(hasCycle);
//     for (var i = 0; i < N; i++) {
//       cells = NextDay(cells);
//     }
//   }
//   return cells;
// };
// function NextDay(cells) {
//   var nextcells = [];
//   nextcells[0] = 0;
//   nextcells[7] = 0;
//   for (var i = 1; i < 7; i++) {
//     nextcells[i] = cells[i - 1] == cells[i + 1] ? 1 : 0;
//   }

//   return nextcells;
// }
// console.log(prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 28));

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// var levelOrder = function(root) {
//   if (!root) return;
//   var queue = [[root]];

//   while (queue > 0) {
//     var l = queue.length;
//     for (let i = 0; i < l; l++) {
//       var node = queue[i];
//       var level = [];
//       if (node.left) level.push(node.left);
//       if (node.right) level.push(node.right);
//     }
//     queue.push(level);
//   }
//   return queue;
// };

function a() {
  if (true) {
    var f = 2;
  }
  function b() {
    console.log(f);
  }
  b();
}
a();
