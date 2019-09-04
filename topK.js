var topKFrequent = function(words, k) {
  var map = new Map();
  words.sort();
  var res = [];
  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      var counter = map.get(words[i]) + 1;
      map.set(words[i], counter);
    } else {
      map.set(words[i], 1);
    }
  }
  map[Symbol.iterator] = function*() {
    yield* [...this.entries()].sort(function(a, b) {
      if (a[1] == b[1]) {
        var textA = a[0];
        var textB = b[0];
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      }
      return b[1] - a[1];
    });
  };
  var arr = [...map];
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }

  return arr;
};
var input = [
  "plpaboutit",
  "jnoqzdute",
  "sfvkdqf",
  "mjc",
  "nkpllqzjzp",
  "foqqenbey",
  "ssnanizsav",
  "nkpllqzjzp",
  "sfvkdqf",
  "isnjmy",
  "pnqsz",
  "hhqpvvt",
  "fvvdtpnzx",
  "jkqonvenhx",
  "cyxwlef",
  "hhqpvvt",
  "fvvdtpnzx",
  "plpaboutit",
  "sfvkdqf",
  "mjc",
  "fvvdtpnzx",
  "bwumsj",
  "foqqenbey",
  "isnjmy",
  "nkpllqzjzp",
  "hhqpvvt",
  "foqqenbey",
  "fvvdtpnzx",
  "bwumsj",
  "hhqpvvt",
  "fvvdtpnzx",
  "jkqonvenhx",
  "jnoqzdute",
  "foqqenbey",
  "jnoqzdute",
  "foqqenbey",
  "hhqpvvt",
  "ssnanizsav",
  "mjc",
  "foqqenbey",
  "bwumsj",
  "ssnanizsav",
  "fvvdtpnzx",
  "nkpllqzjzp",
  "jkqonvenhx",
  "hhqpvvt",
  "mjc",
  "isnjmy",
  "bwumsj",
  "pnqsz",
  "hhqpvvt",
  "nkpllqzjzp",
  "jnoqzdute",
  "pnqsz",
  "nkpllqzjzp",
  "jnoqzdute",
  "foqqenbey",
  "nkpllqzjzp",
  "hhqpvvt",
  "fvvdtpnzx",
  "plpaboutit",
  "jnoqzdute",
  "sfvkdqf",
  "fvvdtpnzx",
  "jkqonvenhx",
  "jnoqzdute",
  "nkpllqzjzp",
  "jnoqzdute",
  "fvvdtpnzx",
  "jkqonvenhx",
  "hhqpvvt",
  "isnjmy",
  "jkqonvenhx",
  "ssnanizsav",
  "jnoqzdute",
  "jkqonvenhx",
  "fvvdtpnzx",
  "hhqpvvt",
  "bwumsj",
  "nkpllqzjzp",
  "bwumsj",
  "jkqonvenhx",
  "jnoqzdute",
  "pnqsz",
  "foqqenbey",
  "sfvkdqf",
  "sfvkdqf"
];
var k = 1;
console.log(topKFrequent(input, k));
