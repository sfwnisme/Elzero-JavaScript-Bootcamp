/*
  Destructuring
  - Destructuring Object
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};
console.log(user);

// The old method
// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// Destructuring Way
const { theName, theAge, theTitle, theCountry } = user;
// Also you can using it like this adding the Destructure in paranthies ()
// ({ theName, theAge, theTitle, theCountry } = user);

console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry);
