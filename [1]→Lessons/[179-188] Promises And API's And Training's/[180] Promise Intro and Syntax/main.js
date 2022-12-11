/*
  JSON Syntax
  - Data added inside curly braces {  }
  - Data added with key : value
  - Key should be string wrapped in double quotes
  - Data separated by comma
  - Square brackets [] for arrays
  - Curly braces {} for objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null
*/

/* ==========[this way will not give the promise status follow the next way]========== */

// in console the promiseState will be correct in the properties of the promise LIKE => [[PromiseState]]: "fulfilled"
// but in the interface it will write {<pending>}
// the resolve of this issue is in the next example
// check CONSOLE for more details
let myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = true;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Faild"));
  }
}).then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

console.log(myPromise);

/* ==========[The Right Way To Get Promise Status]========== */
// we should separate ".then" from CHAI
let myPromiseTwo = new Promise((resolveFunction, rejectFunction) => {
  let connect = true;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Faild"));
  }
});
myPromiseTwo.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

console.log(myPromiseTwo);
