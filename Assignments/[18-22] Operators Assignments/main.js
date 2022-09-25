// Assignment Vol.1

console.log("Assignment Vol.1");
// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); //0

// Assignment Vol.2

console.log("Assignment Vol.2");

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log(num ** num / +num + -num); // 6

// Soultion Four
console.log(++num + ++num - --num + true); // 6

// Solution Five
console.log(num + --num - true); // 6

// Solution Six
console.log(num++ + -true + num); // 6

// Assignment Vol.2
console.log("Assignment Vol.3");

let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log((+num2 * (+num2 + +num2)) / num2); // 20

// Solution Three
console.log(num2-- + true + num2); // 20

// Solution Four
console.log(++num2 + num2--); // 20

//Assignment Vol.4
console.log("Assignment Vol.4");

let points = 10;

// Write Your Code Here
console.log(points++ + points++ + points++);

console.log(points); // 13

// Write Your Code Here
console.log(points-- - points-- - points-- - points-- - points--);

console.log(points); // 8;
