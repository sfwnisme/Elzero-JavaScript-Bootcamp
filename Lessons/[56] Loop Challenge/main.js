/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

let admins = [];
let ctr = 1; // This Counter Starts [1] For Counting The Every List

for (i = +false; i < myAdmins.length; i += +true) {
  if (myAdmins[i].includes("Stop")) {
    break;
  } else {
    admins.push(myAdmins[i]);
  }
}

document.write(`We Have ${admins.length} Admins`);
document.write(`<hr/>`);

for (let i = +false; i < admins.length; i += +true) {
  document.write(`<h3>The Admin For Team ${i + 1} Is ${admins[i]}</h3>`);

  for (let j = +false; j < myEmployees.length; j += +true) {
    if (admins[i][+false] === myEmployees[j][+false]) {
      document.write(`<p>${ctr} ${myEmployees[j]}</p>`);
      ctr++;
    }
  }
  ctr = 1; // We Did This Code For Restart Looping For The Nested Loop Of Numbers [ctr] ==> When We Start New List For Team 1 Its [ctr] Will Start Counting From [1]
  document.write(`<hr/>`);
}
