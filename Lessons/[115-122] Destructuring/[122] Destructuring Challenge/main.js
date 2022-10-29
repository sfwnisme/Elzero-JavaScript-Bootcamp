/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["PYTHON", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

for (let i = 0; i < myFriends.length; i++) {
  // console.log(myFriends[i][chosen]);
  // console.log(myFriends[chosen]);
  if (myFriends[i] === myFriends[chosen]) {
    console.log(myFriends[i]);
    // const [{ title }] = myFriends[i];
    // console.log(title);
  }
}

for (friend of myFriends) {
  console.log(myFriends);
  if (myFriends[chosen]) {
    console.log("kd");
  }
}

// if (myFriends[chosen]) {
//   console.log(myFriends[chosen]);
//   // const [{title}] = myFriends[chosen];
//   // const [{ title }] = myFriends[chosen];
//   // console.log(title);
// } else {
//   console.log("Nothing");
// }

// function details([{ title }] = myFriends) {
//   console.log(title);
// }
