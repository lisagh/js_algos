var kClosest = function(points, K) {
  const len = points.length;
  let l = 0,
    r = len - 1;
  while (l < r) {
    const mid = partition(points, l, r);
    if (mid === K) break;
    //quick sort can confirm the final position of pivot.
    //if K == mid is pivot, it means index 0 to index pivot is sorted
    //so we can break the loop and get the resule
    else if (mid < K) l = mid + 1;
    else r = mid - 1;
  }
  return points.slice(0, K);
};

// quick sort here
function partition(arr, l, r) {
  const pivot = arr[l];
  while (l < r) {
    while (l < r && compare(arr[r], pivot) >= 0) r--;
    arr[l] = arr[r];
    while (l < r && compare(arr[l], pivot) <= 0) l++;
    arr[r] = arr[l];
  }
  console.log(arr[l] + " pivot" + pivot);
  arr[l] = pivot;

  console.log("this is l  " + l);
  return l;
}

function compare(a, b) {
  a_dis = a[0] * a[0] + a[1] * a[1];
  b_dis = b[0] * b[0] + b[1] * b[1];
  return a_dis - b_dis;
}

console.log(kClosest([[-2, 10], [-4, -8], [10, 7], [-4, -7]], 3));
