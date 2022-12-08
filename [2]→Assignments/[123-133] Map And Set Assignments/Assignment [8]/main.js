let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Solution One
// console.log(+[[...new Set(n1.pop().toString())].shift(), n2.pop()].join(""));

// Solution Two
console.log(+[...n1.pop().toString().length.toString(),n2.pop()].join(""));


// Solution Three
// let red = n1.reduce((acc,curr) => {
//   return acc + curr;
// })
// console.log(red)
// console.log(red * +[...n2.shift().toString()].shift());

// Needed Output
// 210