// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars = ["Z", "Y", "A", "D", "E", 10, 1];
chars.sort();
console.log(chars); // confirm the sorting

// Solution One
/* 
let nums = chars.filter((e) => typeof e === "number");
console.log(nums);

let str = chars.filter((e) => typeof e === "string");
console.log(str);

let mix = [...nums, ...str];
console.log(mix);

console.log(mix.copyWithin(0, nums.length));
 */
// console.log(chars.copyWithin(0))

// Solution Two
// filter numbers and get them length to use it as a start for copyWithin method
// it will dynamically replace numbers to strings
let nums = chars.filter((e) => typeof e === "number").length;

console.log(chars.copyWithin(0, nums));

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
