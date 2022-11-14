let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log(numsOne.concat(numsTwo));
console.log([...numsOne,...numsTwo]);
// console.log();

const merged = numsTwo.reduce((arr, item) => {
  arr.push(item);
  return arr;    
}, numsOne);

console.log(merged);

// Needed Output
// [1, 2, 3, 4, 5, 6]