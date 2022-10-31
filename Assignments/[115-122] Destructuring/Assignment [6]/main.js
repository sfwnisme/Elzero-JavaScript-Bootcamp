let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

for (let i = 0; i < myFriends.length; i++) {
  if (myFriends[i] === myFriends[chosen - 1]) {
    ({
      title,
      age,
      available,
      skills: [a, b],
    } = myFriends[i]);
  }
}
console.log(`${title}
${age}
${available ? "Available" : "Not Available"}
${b}
`);

if (chosen > myFriends.length) {
  console.log(`No One Wanna Work With You😊`);
} else if (chosen <= 0) {
  console.log(`No One Available For You👌`);
}
// If chosen === 1
/* 
("Osama");
39;
("Available");
("CSS"); */

// If chosen === 2

/* ("Ahmed");
25;
("Not Available");
("Django"); */

// If chosen === 3

/* ("Sayed");
33;
("Available");
("Laravel"); */
