/* 
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notaion
  - Dynamic Property Name
*/

let user = {
  theName0: "Sfwn", // Dot Notation
  theName1: "Tariq", // Bracket Notation
  "the Name2": "Ali", // Dot Notation
};

console.log(user.theName0);
console.log(user.theName1); // Noramlly Outpotted
// console.log(user."theName1"); // Not Outpotted
// console.log(user.""the Name2""); // Not Outputted

// Using Bracket Notation
console.log(user["theName1"]); // Outputted Normally
console.log(user["the Name2"]); // Outputted Normally

/* 
  FINALLY 
  - Using Dot Notation Not Allowed Strings
  - Using Bracket Notation Allowed Strings And Spaces
*/
