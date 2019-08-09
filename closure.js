function createCounter() {
  let counter = 0;
  const myFunction = function() {
    counter = counter + 1;
    // console.log("get " + counter);
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
// console.log("example increment" + c1, c2, c3);

var mem = {};
var numSquares = function(n) {
  if (Number.isInteger(Math.sqrt(n))) return 1;
  if (mem[n]) return mem[n];
  var maxroot = Math.floor(Math.sqrt(n));
  var min = Infinity;
  for (var i = 1; i <= maxroot; i++) {
    let squaredVal = i * i;
    min = Math.min(min, 1 + numSquares(n - squaredVal));

    console.log("n: " + n + " min " + min + " i is " + i);
  }
  mem[n] = min;
  return min;
};
console.log(numSquares(8));
