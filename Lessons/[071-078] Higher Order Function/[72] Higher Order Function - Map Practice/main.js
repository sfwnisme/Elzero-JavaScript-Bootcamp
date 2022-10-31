/* 
Map
- Swap Cases
- Inverted Numbers
- Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");
console.log(sw);

//invertedNumber Inline Function Solution
let inv = invertedNumbers.map(function (a) {
  return -a;
});
console.log(inv);

//Arrow Function Solution
let inv1 = invertedNumbers.map((a) => -a);
console.log(inv1);

//ignoreNumbers Inline Function Solution
let ign = ignoreNumbers
  .split("")
  .map(function (a) {
    return isNaN(a) ? a : "";
  })
  .join("");

console.log(ign);

//ignoreNumbers Arrow Function Solution
let ign1 = ignoreNumbers
  .split("")
  .map((a) => (isNaN(a) ? a : ""))
  .join("");

console.log(ign1);

//ignoreNumbers Arrow Function Solution
let ign2 = ignoreNumbers
  .split("")
  .map((a) => (isNaN(parseInt(a)) ? a : ""))
  .join("");

console.log(ign2);

//ignoreNumbers Arrow Function Solution
let ign3 = ignoreNumbers
  .split("")
  .map((a) => (isNaN(parseInt(a)) === true ? a : ""))
  .join("");

console.log(ign3);
