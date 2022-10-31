console.log("%cAssingment", "background-color:gold;color: #000");

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mx = mix
  .map((a) => (isNaN(parseInt(a)) ? a : ""))
  .reduce((acc, current) => `${acc}${current}`); // reduce() For Convert Array To String
/* 
  reduce() Explainign

  - acc = index[0] => E
  - current = Index[1] => l
  - Start Index => [1]
  -------------------------
  reduce() Processing
  - acc = index[1] => El
  - current = Index[2] => z
  - Start Index => [2]
  -------------------------
  reduce() Processing
  - acc = index[2] => Elz
  - current = Index[3] => e
  - Start Index => [3]
  -------------------------
  reduce() Processing
  - acc = index[3] => Elze
  - current = Index[4] => r
  - Start Index => [4]
  -------------------------
  reduce() Processing
  - acc = index[4] => Elzer
  - current = Index[5] => o
  - Start Index => [5]
  -------------------------
  Elzero
  */
console.log(mx);

// Elzero

console.log("%cAssingment 2", "background-color:gold;color: #000");

console.log("%cMain Solution Ex.0", "background-color:red;color: #000");

let myString = "EElllzzzzzzzeroo";
let arr = myString.split("");
remove = new Set(arr);

console.log(remove);

// Elzero

console.log("%cOut Door Solution Ex.0", "background-color:green;color: #000");

let filter = myString.split("");
let removeRepeatedLetters = new Set(filter);
console.log(removeRepeatedLetters); // We Should Delete This Because We Want It As A String. However, I Wrote It To Check The Solution
let str = Array.from(removeRepeatedLetters).join("");
console.log(str);

/* 
  Remove Repeated Elements Processing
  - First: New Variable => let remove = new Set(Variable Containe Repeated Elements);
  - Second: Now It Removed Repeated Elements And Change The Type To "set"
  - Finally: To Check => console.log(remove) // set: {a, b, c, ...}
  
  Convert Set To String
  - First: Add A New Variable => let setToString = Array.from(remove).join("");
  - Second: Check => console.log(setToString)
*/
// Elzero

console.log("%cTry 0", "background-color:green;color: #000");

// var arrTwo = [
//   "Hello 1 ",
//   " Hello 2 ",
//   "Hello 1 ",
//   " Hello 2 ",
//   "Hello 1 again",
// ];

// let filteredArray = arrTwo.filter(function (ele, pos) {
//   return arrTwo.indexOf(ele) == pos;
// }).join("");

// console.log("The filtered array ", filteredArray);

console.log("%cTry 1", "background-color:green;color: #000");

// let flt = myString
//   .split("")
//   .filter(function (ele, pos) {
//     return myString.indexOf(ele) == pos;
//   })
//   .join("");

// console.log("The filtered array ", flt);

console.log("%cTry 2", "background-color:green;color: #000");

let flt = myString
  .split("")
  .filter(function (ele, pos) {
    return myString.indexOf(ele) == pos;
  })
  .join("");

console.log("The filtered array ", flt);

// -----------------

console.log("%cTry 3", "background-color:green;color: #000");

let letters = ["a", "b", "c"];

let tst = letters.filter(function (ele, pos) {
  console.log(`element ${ele}`);
  console.log(`index ${pos}`);
  return `${ele} ${pos}`;
});
console.log(tst);

console.log("%cTry 4", "background-color:green;color: #000");
var arrTwo = [
  "Hello 1 ",
  " Hello 2 ",
  "Hello 1 ",
  " Hello 2 ",
  "Hello 1 again",
];

const filteredArray = arrTwo
  .filter(function (ele, pos) {
    return arrTwo.indexOf(ele) == pos;
  })
  .join("");

console.log("The filtered array ", filteredArray);

console.log("%cFinal Solution0", "background-color:red;color: #000");

let removeElements = myString
  .split("")
  .filter((element, index) => myString.indexOf(element) == index) // We Wrote Here 'indexOf(element) == index'=> Because This Method Outputing The Element And Excludes The Duplicate
  //You Can See The Other Examples In This Pen: https://codepen.io/sfwnisme/pen/gOedbgb?editors=0010
  .reduce((acc, current) => `${acc}${current}`);

console.log(removeElements);
/* 
How To Remove Duplicate

The JavaScript array introduced one of the higher-order functions called filter(), which loops on each array element, applies a test condition on it, and only returns that element if it meets the condition. This test condition will be implemented inside the callback function, passed as an argument to the filter() method.

We can remove the duplicates from the array by setting the test condition to check if the index of the current element in-loop is the first occurrence in that array. The filter() function will take an extra argument index that will represent the array index of the element during execution.

Resource ====>
https://www.delftstack.com/howto/javascript/javascript-remove-duplicates-from-an-array/#use-array.filter-to-remove-the-duplicates-from-javascript-array
 */

console.log("%cAssignment 3", "background-color: gold;color: #000;");
let myArray = ["E", "l", "z", ["e", "r"], "o"];

console.log("%cTry 0", "background-color: Green;color: #000;");

console.log(myArray.join("")); // Elzero

console.log("%cTry 1", "background-color: Green;color: #000;");

let concat0 = myArray.flat(3);
console.log(concat0);

console.log("%cTry 2", "background-color: Green;color: #000;");

let concat1 = myArray.reduce((a, c) => a.concat(c));
console.log(concat1);

console.log("%cTry3", "background-color: green;color: #000;");

let flat = [].concat.apply([], myArray);
console.log(flat.join(""));

console.log("%cFinal Solution 0", "background-color: red;color: #000;");

let concat2 = myArray
  .reduce(function (acc, current) {
    return acc.concat(current);
  }, [])
  .join("");

console.log(concat2);

console.log("%cFinal Solution 1", "background-color: red;color: #000;");

let concat3 = myArray
  .reduce(function (acc, current) {
    return acc.concat(current);
  }, []) // [] To Make A New Array For Excluding ''
  .reduce((acc, current) => `${acc}${current}`);

console.log(concat3);

console.log("%cFinal Solution 2", "background-color: red;color: #000;");

let concat4 = myArray
  .join("") // => Elze,ro
  .split("") // => ['E', 'l', 'z', 'e', ',', 'r', 'o']
  .map(function (a) {
    return !a.includes(",") ? a : ""; // =>['E', 'l', 'z', 'e', '', 'r', 'o']
  })
  .reduce((acc, current) => `${acc}${current}`); // Elzero

console.log(concat4); // Elzero

console.log("%cFinal Solution 3", "background-color: red;color: #000;");

let concat5 = myArray
  .join("") // => Elze,ro
  .split("") // => ['E', 'l', 'z', 'e', ',', 'r', 'o']
  .map(function (a) {
    return !a.includes(",") ? a : ""; // =>['E', 'l', 'z', 'e', '', 'r', 'o']
  })
  .join("");

console.log(concat5); // Elzero
// Resource : https://flexiple.com/javascript/flatten-array-javascript/

console.log("%cAssignment 4", "background-color: gold;color: #000;");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

console.log("%cFinal Solution 0", "background-color: gold;color: #000;");

let toNums = numsAndStrings.filter((a) => !isNaN(parseInt(a))).map((a) => -a);
console.log(toNums);

// [-1, -10, 10, 20, -5, -3]

console.log("%cAssignment 5", "background-color: gold;color: #000;");

let nums = [2, 12, 11, 5, 10, 1, 99];

console.log("%cFinal Solution 0", "background-color: gold;color: #000;");

let oddAndEven = nums.reduce(function (accumulator, current, index, array) {
  console.log(`accumulator ${accumulator}`); // For Explain No Effect
  console.log(`current ${current}`); // For Explain No Effect
  console.log("-".repeat(10));
  return current % 2 !== 0 ? accumulator + current : accumulator * current;
}, 1);
console.log(oddAndEven);
// 500
