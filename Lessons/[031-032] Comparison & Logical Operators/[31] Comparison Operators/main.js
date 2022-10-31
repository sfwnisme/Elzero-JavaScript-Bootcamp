/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // Compare Value Only => true
console.log(-100 == "-100"); // Compare Value Only => true
console.log(10 != "10"); // Compare Value Only => false

console.log(10 === "10"); // Compare Value + Type => false
console.log(10 !== "10"); // Compare Value + Type => true
console.log(10 !== 10); // Compare Value + Type => false

console.log(10 > 20); // => false
console.log(10 > 10); // => false
console.log(10 >= 10); // => true

console.log(10 < 20); // => true
console.log(10 < 10); // => false
console.log(10 <= 10); // => true

console.log("Osama" == "Ahmed"); // false >> Osama Not Equal Ahmed Not Same Type Or Value
console.log(typeof "Osama" == typeof "Ahmed"); // true >> typeof string = typeof string
console.log("Osama" === "Ahmed"); // false >> Osama Not Equal Ahmed Not Same By Type Or Value
console.log(typeof "Osama" === typeof "Ahmed"); // true >> typeof string = typeof string
