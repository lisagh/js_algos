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
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

var merge = function (intervals) {

    var result = [];
    var current;
    if (intervals.length <= 1 || intervals == null)
        return intervals;
    intervals.sort();
    intervals.forEach(function (i) {
        //
        if (!current || current[1] < i[0]) {
            current = i;
            result.push(current);
        }

        else if (current[1] < i[1])
            current[1] = i[1];
    });

    return result;


};
var intervals = [[1, 3], [0, 4]];
console.log(merge(intervals));