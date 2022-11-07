let arr = "Osama";

console.log(Array.from(arr));
// console.log(Array.from("12345", (e) => +e));

let num = 12345;
// Array.from Only Accepts Iterable
// You Can Use Unary Operators Or Any Other Methods To Converting It To Number
console.log(Array.from(num.toString(), (e) => parseFloat(e)));
console.log(Array.from(num.toString(), (e) => parseInt(e)));
console.log(Array.from(num.toString(), (e) => +e));

let myArray = [1, 1, 1, 2, 3, 4];

console.log(Array.from(new Set(myArray)));
console.log([new Set(myArray)]);

let mySet = new Set(myArray);
console.log(mySet);
//Change new Set To Array
console.log(...mySet);
console.log([...mySet]);
console.log(Array.from(mySet));

function test() {
  return arguments;
}
console.log(test(1, 2, 3, 4));
console.log(Array.from(test(1, 2, 3, 4)));

function af() {
  return Array.from(arguments);
}

console.log(af("a", "b", "c"));

// You Can Use Array It iterable
let numArr = [1, 32, 34];
Array.from(numArr);
console.log(Array.from([1, 2, 3]));
console.log(Array.from(numArr, (e) => `${000}${e}`));
