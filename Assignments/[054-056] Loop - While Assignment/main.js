let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

/* 
Output
("1 => Sayed");
("2 => Mahmoud"); 
*/

while (index < friends.length) {
  index++;
  if (friends[index][+false] === "A") {
    continue;
  } else if (typeof friends[index] === "number") {
    continue;
  } else {
    console.log(`${(counter += +true)} => ${friends[index]}`);
  }
}

//Another Solution
/* 
let friendsTwo = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let indexTwo = 0;
let counterTwo = 0;

for (let i = indexTwo; i < friendsTwo.length; i++) {
  if (friendsTwo[i][indexTwo] === "A") {
    continue;
  } else if (typeof friendsTwo[i] === "number") {
    continue;
  }
  console.log(`${counterTwo++ + 1} => ${friendsTwo[i]}`);
}
 */
