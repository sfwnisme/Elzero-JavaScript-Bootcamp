/*
  Destructuring
  - Challenge
*/

let chosen = 0;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["PYTHON", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

for (let i = 0; i < myFriends.length; i++) {
  if (myFriends[i] === myFriends[chosen - 1]) {
    console.log(myFriends[i]);
    const {
      title,
      age,
      available,
      skills: [a, b],
    } = myFriends[i];
    console.log(`${title} ${age} ${available ? available : ""} ${`${a} ${b}`}`);
  }
}
if (chosen > myFriends.length) {
  console.log(`No One Wanna Work With You😊`);
} else if (chosen <= 0) {
  console.log(`No One Available For You👌`);
}
