/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

//Regular Example
console.log("%cSolution Vol.1", "background-color:gold; color: #000;");
let myNums = [1, 2, 3, 4, 5, 6];

let arr = [];

for (let i = 0; i < myNums.length; i++) {
  arr.push(myNums[i] + myNums[i]);
}
console.log(arr);

//Map Example
console.log("%cSolution Vol.2", "background-color:gold; color: #000;");
let x = myNums.map(function (element, index, array) {
  return element + element;
}, 10);
console.log(x);

//Map Example
console.log("%cSolution Vol.3", "background-color:gold; color: #000;");
let x1 = myNums.map((element) => element + element);
console.log(x1);

// Explaining The Map Higher Function Method Full Structure
console.log("%cSolution Vol.4", "background-color:gold; color: #000;");
let x2 = myNums.map(function (element, index, array) {
  console.log("-".repeat(5));
  console.log(`Current Element ${element}`); // Give The Index Element
  console.log(`Current Index ${index}`); // Give The Index Position Number
  console.log(`Array ${array}`); // Give The Array We Did The Map On
  console.log(`This ${this}`); //
}, 10);

console.log("%cSolution Vol.5", "background-color:gold; color: #000;");
// Explaining The Map Higher Function Method Full Structure
let x3 = myNums.map(function (element, index, array) {
  console.log("-".repeat(5));
  console.log(`Current Element ${element + element}`); // Give The Index Element
  console.log(`Current Index ${index}`); // Give The Index Position Number
  console.log(`Array ${array}`); // Give The Array We Did The Map On
  console.log(`This ${this}`); //
}, 10);
/* ------Element Is Mandatory The Rest Parameters Is Optionally------ */

// We Can Use Ready Function To map() To Do There Function
console.log("%cSolution Vol.5", "background-color:gold; color: #000;");
function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add);

// Arrow function
// map((element) => { /* … */ })
// map((element, index) => { /* … */ })
// map((element, index, array) => { /* … */ })

// // Callback function
// map(callbackFn)
// map(callbackFn, thisArg)

// // Inline callback function
// map(function(element) { /* … */ })
// map(function(element, index) { /* … */ })
// map(function(element, index, array){ /* … */ })
// map(function(element, index, array) { /* … */ }, thisArg)
