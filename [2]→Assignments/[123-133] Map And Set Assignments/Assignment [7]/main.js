let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Solution One
console.log(numsOne.concat(numsTwo)); // [1, 2, 3, 4, 5, 6]

// Solution Two
console.log([...numsOne, ...numsTwo]); // [1, 2, 3, 4, 5, 6]

// Solution Three
const m = numsTwo.reduce((arr, item) => {
  arr.push(item);
  return arr;
}, numsOne);
console.log(m); // [1, 2, 3, 4, 5, 6]

// Needed Output
// [1, 2, 3, 4, 5, 6]
