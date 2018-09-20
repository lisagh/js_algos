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
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var intervals = [[5, 8], [3, 6]];
intervals.sort(function (a, b) { return a[0] - b[0] });

var merge = function (intervals) {

    var result = [];
    var current;
    if (intervals.length <= 1 || intervals == null)
        return intervals;


    intervals.forEach(function (i) {
        // check if the current element disjoint with i element
        // if they are seperate, push current array to the result
        // if they are overlaping, go next
        if (!current || current[1] < i[0]) {
            current = i;
            result.push(current);
        }
        // cuz they are overlap, take the larger END point as the result END point
        else if (current[1] < i[1])
            current[1] = i[1];
    });

    return result;


};

console.log(merge(intervals));

// my note: By default, the sort() function sorts values as strings.
// please use the compare function to make sure the numbers are sorted.
// compare function:
// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) { return a - b });
// console.log(points);