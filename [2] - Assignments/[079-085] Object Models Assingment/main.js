console.log("%cAssignment 1", "background-color: gold; color: #000");

let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${member.name}, My Age Is ${member.age}, I Live In ${member.country}`;
  },
};
// Create Your Object Here

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

console.log("%cAssignment 2", "background-color: gold; color: #000");

// Method One
// Create Your Object Here
let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = {
  property: "Method Two",
};
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
// Bracket Method
let objMethodThree = {
  property: "Method Three",
};
console.log(objMethodThree["property"]); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = {};
objMethodFour.property = "Method Four";
console.log(objMethodFour.property); // "Method Four"

// Method Five
// Create Your Object Here
let objMethodFive = new Object();
objMethodFive.property = "Method Five";
console.log(objMethodFive.property); // "Method Five"

// Method Six
// Create Your Object Here
let objMethodSix = Object.assign(objMethodFive);
objMethodSix.property = "Method Six";
console.log(objMethodSix.property); // "Method Six"

// Method Seaven
// Create Your Object Here
let objMethodSeaven = Object.assign({}, objMethodFive);
objMethodSeaven.property = "Method Seaven";
console.log(objMethodSeaven.property); // "Method Seaven"

// Method Eight
// Create Your Object Here
let objMethodEight = Object.assign({}, { property: "Method Eight" });
console.log(objMethodEight.property); // "Method Eight"

console.log("%cAssignment 2", "background-color: gold; color: #000");

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({ a }, threeNums, twoNums);

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

console.log("%cAssignment 4", "background-color: gold; color: #000");

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
// Object.keys(object variable).length Is The Way We Can Get The Length Of An Object
console.log(Object.keys(myFavGames)); // Convert Object To Array

let objectLength = Object.keys(myFavGames).length;
// console.log(objectLength);
for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
  );
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
    );
  }
  console.log("#".repeat(20));
}

// Ouput

("The Game Name Is Trinity Universe");
("The Publisher Is NIS America");
("The Price Is 40");
("####################");
("The Game Name Is Titan Quest");
("The Publisher Is THQ");
("The Price Is 50");
("- Game Has Releases");
("First => Immortal Throne");
("Second => Ragnarök");
("Third => Atlantis");
("####################");
("The Game Name Is YS");
("The Publisher Is Falcom");
("The Price Is 40");
("- Game Has Releases");
("First => Oath in Felghana");
("Second => Ark Of Napishtim");
("Third => origin");
("####################");
