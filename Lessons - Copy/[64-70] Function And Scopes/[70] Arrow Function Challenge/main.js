/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

console.log("%cSolution Vol.1", "background-color: Gold; color: #000;");

let names = function (...name) {
  return `String [${name.join("],[")}] => Done !`;
};
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

console.log("%cSolution Vol.2", "background-color: Gold; color: #000;");
let names1 = (...name) => `String [${name.join("],[")}] => Done !`;
console.log(names1("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

console.log("%cSolution Vol.1", "background-color: Gold; color: #000;");

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + Number(nums);

console.log(calc(10, myNumbers[+false], myNumbers[+true])); // 80

console.log("%cSolution Vol.2", "background-color: Gold; color: #000;");

let myNumbers1 = [20, 50, 10, 60];

let calc1 = function (one, two, ...nums) {
  return one + two + Number(nums); // Here We Used "Number(nums)" To Change It To Number Because nums Is Array
};
console.log(calc1(10, myNumbers1[+false], myNumbers1[+true])); // 80
