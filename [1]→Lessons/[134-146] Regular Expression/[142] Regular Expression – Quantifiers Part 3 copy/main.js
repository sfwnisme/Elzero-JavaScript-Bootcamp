/* 
  Regular Expression

  Quantifiers 3
  $ => End With Something
  ^ => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString = "We Love programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString));
console.log(/z$/ig.test(names));
console.log(/^w/ig.test(myString));
console.log(/^1/ig.test(names));
console.log(/^2/ig.test(names)); // fales
console.log(/^\d/ig.test(names)); // true
console.log(/^\w/ig.test(names)); // true
console.log(/^\s/ig.test(names)); // false
console.log(/^\S/ig.test(names)); // true

console.log(names.match(/\d\w{5}(?=z)/ig));
console.log(names.match(/\d\w{5}(?!z)/ig));
console.log(names.match(/\d\w{8}(?!z)/ig));
