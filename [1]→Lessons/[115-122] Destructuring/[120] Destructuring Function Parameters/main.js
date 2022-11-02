/*
  Destructuring
  - Destructuring Function Parameters
*/

const user = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};

showDetails(user);

function showDetails(obj) {
  console.log(`Your Name Is ${obj.theName}`);
  console.log(`Your Age Is ${obj.theAge}`);
  console.log(`Yours Css Skills Progressing Is ${obj.skills.css}`);
}

console.log(`%c..... Using Destructuring Function .....`, `color: red`);
showDetails2(user);

function showDetails2({ theName, theAge, skills: { css } }) {
  console.log(`Your Name Is ${theName}`);
  console.log(`Your Age Is ${theAge}`);
  console.log(`Your Css Skill Progressing Is ${css}`);
}
