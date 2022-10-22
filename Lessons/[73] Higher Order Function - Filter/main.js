/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
/* -----Focus On This Pair Examples----- */
let x = friends.map((a) => a.startsWith("A"));
console.log(x);
let z = friends.filter((a) => a.startsWith("A"));
console.log(z);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

// Test Map vs Filter

//map
let addMap = numbers.map(function (el) {
  return el + el;
});
console.log(addMap);
// map Works On True Or False Values
// Will Output The Final Result Of The Function

//filter
let addFilter = numbers.filter(function (el) {
  return el + el === true;
});
console.log(addFilter); // Like You See Here It Outputted The Same Variable Value Because The Filter Works Ont 'true' Values That Is Means You Used The Filter On The Wrong Way
// About The Solution The Prosess Is True [ "el + el" => true ] That's Mean The Filter Will Got It As A True Value And Will Output The Same Filterd Variable value
// When The Filter Find Your Prosess Form The beginning Is True Will Get The First Normal Element Value

// Filter Prosessing
let filterdFriends = friends.filter(function (el) {
  return el.startsWith("A"); //Here We Used Only A Single Ternary Condition Because filter() Only Accepts True Values
});
console.log(filterdFriends);

// Filter Prosessing
let filterdFriends1 = friends.filter(function (el) {
  return el.startsWith("A") ? true : false; // The Hidden Prosess Of A Single Ternary Condition
});
console.log(filterdFriends1);

// Another Solution
let filterdFriends2 = friends.filter(function (el) {
  return el.startsWith("A");
});
console.log(filterdFriends2);

// Another Solution
// In map() Only You Will Got Boolean Values Not The Array Values As Filter
let filterdFriends3 = friends.map(function (el) {
  return el.startsWith("A");
});
console.log(filterdFriends3);
// Get Only Even Numbers

let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});
console.log(evenNumbers);

let evenNumbers1 = numbers.filter(function (el) {
  return el % 2 === 0 ? true : false; // true : false Is The Hidden Ternary Condition Values We Can Delete Theme When Using A Single Ternary Condition Like The  Previous Example
});
console.log(evenNumbers1);
