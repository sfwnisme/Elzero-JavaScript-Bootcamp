/* 
  Destructuring
  - Destructuring Array Advanced Examples
*/
let myFriends = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohamed", "Gamal"]],
];

// Access to  Shady And Gamal only
let [, , , [a, , [, b]]] = myFriends;

console.log(a); // Shady
console.log(b); // Gamal
