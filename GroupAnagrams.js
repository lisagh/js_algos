/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var map = new Map(),
    val = [];
  strs.map(e => {
    let elements = [...e].sort().join("");
    console.log("the e is  " + e + " this is ele " + elements);
    if (map.has(elements)) {
      val = map.get(elements);
      val.push(e);
      map.set(elements, val);
    } else {
      map.set(elements, [e]);
    }
  });
  return [...map.values()];
};

var strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strings));
