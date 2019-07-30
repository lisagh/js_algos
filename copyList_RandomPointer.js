function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

let copyRandomList = function(head) {
  const dummy = new Node(NaN, null, null); // dummy as the name suggests
  let original = head; //our source
  let copier = dummy; //our copied list

  const map = new Map(); //to keep track of what has been seen

  /*
   * first copy the nodes on its own following the next
   */
  while (original) {
    let newNode = new Node(original.val, null, null);
    copier.next = newNode;
    map.set(original, newNode);

    copier = copier.next;
    original = original.next;
  }

  /*
   * go back to the beginning of the list
   */
  copier = dummy.next;
  original = head;

  /*
   * now copy the random pointers using the map to find the relevant node
   * use the map to avoid the loops
   */
  while (original) {
    if (original.random) {
      // if the original had a random pointer, populate using copier
      copier.random = map.get(original.random);
    }
    copier = copier.next;
    original = original.next;
  }

  return dummy.next;
};
console.log(
  copyRandomList({
    id: "1",
    next: { id: "2", next: null, random: { ref: "2" }, val: 2 },
    random: { ref: "2" },
    val: 1
  })
);
