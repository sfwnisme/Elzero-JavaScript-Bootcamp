/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

let nums = [10, 20, 15, 30];

console.log("%creduce() Full Structure", "background-color:red; color: #000;");

console.log("%cEx.0", "background-color:gold; color: #000;");
let add = nums.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  sourceArray
) {
  console.log(`Current Accumulator ${accumulator}`);
  console.log(`Current Value Or Element ${currentValue}`);
  console.log(`Current Index ${currentIndex}`);
  console.log(`Source Array ${sourceArray}`);
  console.log(accumulator + currentValue);
  console.log(`-`.repeat(20));
  return accumulator + currentValue;
});

console.log(add);
// If reduce Did Not Containe "initialValue" > accumulator Will Take Index [0] Form The Array
// accumulator Index [0] => 10
// It Contained "10" As A Accumulator And Started Processing Form Index [1]
// It Started From Index [1] While It Should Start Form Index [0] That Because We Did Not Wrote The "initialValue"

console.log("%cEx.1", "background-color:gold; color: #000;");
let nums2 = [5, 10, 20, 15, 30];

let add0 = nums2.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  sourceArray
) {
  console.log(`Current Accumulator ${accumulator}`);
  console.log(`Current Value Or Element ${currentValue}`);
  console.log(`Current Index ${currentIndex}`);
  console.log(`Source Array ${sourceArray}`);
  console.log(accumulator + currentValue);
  console.log(`-`.repeat(20));
  return accumulator + currentValue;
});

console.log(add0);
// Look Here I Inserted A New Index To The Array And The accumulator Parameter Still Taking The First Index [0] "FOLLOW THE NEXT EX. FOR MORE UNDERSTANDING"

console.log("%cEx.2", "background-color:gold; color: #000;");
let add1 = nums.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  sourceArray
) {
  console.log(`Current Accumulator ${accumulator}`);
  console.log(`Current Value Or Element ${currentValue}`);
  console.log(`Current Index ${currentIndex}`);
  console.log(`Source Array ${sourceArray}`);
  console.log(accumulator + currentValue);
  console.log(`-`.repeat(20));
  return accumulator + currentValue;
},
5);

console.log(add1);
// accumulator => 5
// accumulator Did Not Take Any Number Form The Array, Because It Have An "initialValue =>"
// It Starts Normally From Index [0] Because reduce Have An "initialValue => 5 => accumulator => 5"

console.log("%creduce() Usual Structure", "background-color:red; color: #000;");

console.log("%cEx.0", "background-color:gold; color: #000;");
let add2 = nums.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  sourceArray
) {
  return accumulator + currentValue;
});

console.log(add2);
