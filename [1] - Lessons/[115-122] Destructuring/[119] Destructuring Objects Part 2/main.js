/*
  Destructuring
  - Destructuring Object
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};
// Destructuring Way
// you change the name of the called object property lik theName: n;
// if you changed the name of the property you just can called by the new name
const {
  theName: n,
  theAge: a,
  theCountry,
  theColor: co = "red",
  status,
  height = "190cm",
  weight: w = "90kg",
  skills: { html: h, css },
} = user;

console.log(n);
console.log(a);
console.log(theCountry);
console.log(co),
  // you can also add a new variable (property) but will output => undefined
  console.log(status);
// if you added a new variable (property) you can declaring it in this way => height="190cm"
console.log(height);
// you can also change the name of the new variable and declaring it in the same time
console.log(w);
console.log(`My Html Skill Is ${h}`);
console.log(`My Css Skill Is ${css}`);

// Changed the name of the properties to avoid errors
// if we wrote the same names of the properties it will send this massege => Identifier 'css' 'html' has already been declared
const { html: skillOne, css: skillTwo } = user.skills;

console.log(skillOne);
console.log(skillTwo);
