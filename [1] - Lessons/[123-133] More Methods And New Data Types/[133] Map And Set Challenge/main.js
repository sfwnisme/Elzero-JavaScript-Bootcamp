/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(new Set(n1));
console.log(new Set(n2));

// Solution One
console.log(parseInt(`${n2.indexOf(Math.min(...n2))}${Math.min(...n1)}`)); // Output => 210

// Solution Two
console.log(Math.max(...n2)); // test
console.log([...n1, ...n2].length); // test
console.log([...n1, ...n2].length * Math.max(...n2)); //210



// Solution Three
console.log(
  ...new Set([
    Number(`${Math.max([Number(...n1.pop().toString())])}${n2.pop()}`),
  ])
); // 210

/* 
  [1] 
  new Set => remove the repeated elements from the array
  ...new Set => ... used spread operator to convert it from objcet to array

  [2]
  n1.pop() => get 20 the last index in the array
  n1.pop().toString() => change it to String because spread operator not accept numbers
  ...n1 => ... spread operator to separate the element "20" to "2" "0"
  Number(...n1.pop().toString()) => used Number() to convert it to number and get the max number [2] in the next step
  Math.max(Number(...n1.pop().toString())) => Math.max to get the max number in the array  
*/
