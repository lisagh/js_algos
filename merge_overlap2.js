// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considerred overlapping.

/**
 * @param {Interval[][]} intervals
 * @return {Interval[][]}
 */
var intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
intervals.sort(function(a, b) {
  return a[0] - b[0];
});
console.log(intervals);
// my note: By default, the sort() function sorts values as strings.
// please use the compare function to make sure the numbers are sorted.
// compare function:
// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) { return a - b });
// console.log(points);
