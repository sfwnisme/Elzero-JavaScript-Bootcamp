/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

let re = /(\bspam|spam\b)/ig;
console.log(names.match(re));

console.log(re.test("1spam"));
console.log(/(\bspam|spam\b)/ig.test("1spam"));
console.log(/(\bspam|spam\b)/ig.test("Osama"));