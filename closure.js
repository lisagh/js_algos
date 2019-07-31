function createCounter() {
  let counter = 0;
  console.log(counter);
  const myFunction = function() {
    counter = counter + 1;
    console.log("get " + counter);
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log("example increment" + c1, c2, c3);
