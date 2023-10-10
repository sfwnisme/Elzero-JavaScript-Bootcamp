/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

let locations = {
  20: "Place 1",
  30: "Place 2",
  10: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

// change from object to array
let locationsArray = Object.keys(locations);
console.log(locationsArray); // test

// change from string to number
let locationNumbers = locationsArray.map((e) => +e);
console.log(locationNumbers); // test

// .some() => if any element of the array is equal the function request result TRUE if not FALSE
console.log(locationNumbers.some((e) => e >= mainLocation));
// .every() => if all array's elements equal the function request result TRUE if not or one element not matched result FALSE
console.log(
  locationNumbers.every(function (e) {
    return e > this || e < this;
  }, mainLocation)
);

console.log(locationNumbers.every((e) => e < this || e > this, mainLocation))
