/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let myString = "AaBbcdefG123!234%^&*";
let atozSmall =/[a-z]/g;
let NotAtozSmall =/[^a-z]/g;
let atozCapital =/[A-Z]/g;
let NotAtozCapital =/[^A-Z]/g;
let aAndcAnde = /a|c|e/g;
let NotaAndcAnde =/[^a c e]/g;
let lettersCapsAndSmall = /[a-z A-Z]/g;
let numsAndSpecials =/[^a-zA-Z]/g;
let specials =/[^a-z1-9]/ig;
console.log(myString.match(atozSmall));
console.log(myString.match(NotAtozSmall));
console.log(myString.match(atozCapital));
console.log(myString.match(NotAtozCapital));
console.log(myString.match(aAndcAnde));
console.log(myString.match(NotaAndcAnde));
console.log(myString.match(lettersCapsAndSmall));
console.log(myString.match(numsAndSpecials));
console.log(myString.match(specials));