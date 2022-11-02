/*
  Destructuring
  - Destructuring Function Parameters
*/

const user = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const {
  theName,
  theAge,
  skills: [a, ,],
  addresses: { egypt },
} = user;

console.log(theName);
console.log(theAge);
console.log(a);
console.log(egypt);

console.log(`%c--------Destructure Function--------`, `color: red;`);
showDetails(user);

function showDetails({
  theName,
  theAge,
  skills: [a, ,],
  addresses: { egypt },
} = user) {
  console.log(theName);
  console.log(theAge);
  console.log(a);
  console.log(egypt);
}
