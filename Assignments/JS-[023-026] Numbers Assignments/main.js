console.log("JavaScript Assignment 23-26");

console.log("Assignment Vol.1");
//Assignment Vol.1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log("a", 1_00000); // 100000
console.log("b", 1e5); // 100000
console.log("c", 10e4); // 100000
console.log("d", Math.pow(100, 2.5)); // 100000
console.log("e", Math.max(122, 234, 100000, 23423, 23)); // 100000
console.log(
  "f",
  Math.min(4124234244, 9723847, Math.trunc(100000.2435), 80491273)
); // 100000
console.log("g", 1_0_0_0_0_0); // 100000
console.log("h", Number.parseInt(100000)); // 100000
console.log("i", 1000000 / 10); // 100000
console.log("j", 10000e1); // 100000

console.log("Assignment Vol.2");
//Assignment Vol.2

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

console.log("Assignment Vol.3");
//Assignment Vol.3

console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

console.log("Assignment Vol.4");
//Assignment Vol.4

let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(+Number.parseFloat(myVar).toFixed(2)); // 100.57

console.log("Assignment Vol.5");
//Assignment Vol.5

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

console.log("Assignment Vol.6");
//Assignment Vol.6

let flt = 10.4;

console.log(Number.parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10

console.log("Assignment Vol.7");
//Assignment Vol.7

console.log(Math.floor(Math.random() * 4) + 1); // 0 || 1 || 2 || 3 || 4
