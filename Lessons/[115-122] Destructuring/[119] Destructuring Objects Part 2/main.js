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
// Destructuring Way
// you change the name of the called object property lik theName: n;
// if you changed the name of the property you just can called by the new name
const {
  theName: n,
  theAge: a,
  theCountry,
  status,
  height = "190cm",
  weight: w = "90kg",
} = user;

console.log(n);
console.log(a);
console.log(theCountry);
// you can also add a new variable (property) but will output => undefined
console.log(status);
// if you added a new variable (property) you can declaring it in this way => height="190cm"
console.log(height);
// you can also change the name of the new variable and declaring it in the same time
console.log(w);
