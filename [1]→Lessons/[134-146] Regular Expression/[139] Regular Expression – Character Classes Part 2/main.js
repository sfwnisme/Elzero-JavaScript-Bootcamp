/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

// this method tell the editor that give me the word that have \bsomthing before or after\b
// we using it before or after the word
let re = /(\bspam|spam\b)/ig;
console.log(names.match(re));

console.log(re.test("1spam"));
console.log(/(\bspam|spam\b)/ig.test("1spam"));
console.log(/(\bspam|spam\b)/ig.test("Osama"));