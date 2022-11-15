let chars = ["A", "B", "C", "D", "E", 10, 15, 6, 5, 5];
// console.log(chars.copyWithin(3,4,5))
// let a = chars.filter((e) => parseInt(e));
// console.log(a.sort());
chars.sort();

let filterdSt = chars.filter((e) => typeof e === "string");
let filterdNum = chars.filter((e) => typeof e === "number");

let finalFilter = [...filterdSt, ...filterdNum];
console.log(finalFilter)
let counter = 0;
chars.map((el) => (typeof el === "number" ? counter++ : ""));

console.log(counter);

finalFilter.copyWithin(counter, 0);

console.log(finalFilter);

// console.log(chars.copyWithin(0))

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
