/* 
  Array Methods
  - Array.some(CallbackFunction(Element, Index, Array), This Argument)
  --- CallbackFunction => Function To Run ON Every Element On The Givent Array
  ------ Elemnt => The current Element To Process
  ------ INdex => Index Of Current Element
  ------ Array => The Current Array Working With 
  --- This Argument => Value To Use As This When Executing CallbackFunction
  -- 
  Using
  - Check If Element Exists In Array
  - Check If Number In Range
*/

let arr = ["Safwan", "Tariq", "Omar"];

let func = arr.filter((e) => `${e}`).reduce((acc, el) => `${acc} ${el}`);
console.log(`Brothers: ${func}`);

let som = arr.some((e, index) => e == "Omar"); // true
console.log(som);

let som2 = arr.some((e, index) => index == 2); // true
console.log(som2);

let som3 = arr.some((e, index) => index == 9); // false
console.log(som3);

function check(ar, val) {
  return ar.some((e) => e == val);
}
console.log(check(arr, "Safwan"));
console.log(check(arr, "sfwn"));
console.log(check(arr, "Omar"));

let num = [1, 2, 3, 5, 6, 7, 3, 10];

let range = {
  min: 10,
  max: 20,
};

let checkRange = num.some((e) => 
  e === this.min
, range);

let checkRange2 = num.some(function (e) {
// console.log(this.min) // test
// console.log(this.max); // test
  return e === this.min
}, range)

console.log(checkRange);
console.log(checkRange2);
