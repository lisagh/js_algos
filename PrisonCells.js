/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */

var prisonAfterNDays = function(cells, N) {
  if (cells == null || N <= 0) return cells;
  const set = new Set(); //creat a set to store new cells
  var cycle = 0;
  var hasCycle = new Boolean(false); //to check if the cells has pattern or not
  for (var i = 0; i < N; i++) {
    var next = NextDay(cells);
    var key = next.toString(); //make array into string so that we can use Set.has() function.
    if (!set.has(key)) {
      cycle++;
      set.add(key);
    } else {
      hasCycle = true;
      break;
    }
    cells = next;
  }
  if (hasCycle) {
    N = N % cycle;
    for (var i = 0; i < N; i++) {
      cells = NextDay(cells);
    }
  }
  return cells;
};
function NextDay(cells) {
  var nextcells = [];
  nextcells[0] = 0;
  nextcells[7] = 0;
  for (var i = 1; i < 7; i++) {
    nextcells[i] = cells[i - 1] == cells[i + 1] ? 1 : 0;
  }
  return nextcells;
}

console.log(prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 20));
