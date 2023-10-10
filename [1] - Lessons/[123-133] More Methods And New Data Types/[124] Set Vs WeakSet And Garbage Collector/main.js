/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value); // done: false
console.log(iterator.next().value); // done: false
console.log(iterator.next().value); // done: false
console.log(iterator.next().value); // done: false
console.log(iterator.next()); // done: ture
// console.log(iterator.next().done); // done: ture => you can also use .done to check

let iterator1 = mySet.values();
console.log(iterator1);

console.log(iterator1.next().value); // done: false
console.log(iterator1.next().value); // done: false
console.log(iterator1.next().value); // done: false
console.log(iterator1.next().value); // done: false
console.log(iterator1.next().done); // done: true => you can also use .done to check
// console.log(iterator1.next()); // done: true

// forEach()
// Set accepting forEach function
mySet.forEach((el) => console.log(el));

// Type Of Data
// only accepting objects
let myWs = new WeakSet([{ A: 1, B: 2 }]);

console.log(myWs);

// SEARCH: weakSet use cases
