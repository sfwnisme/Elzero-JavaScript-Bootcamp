// Assignment Vol.1
console.log("%cAssignment Vol.1", "background-color: gold; color: black;");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(-++num, --num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"]; */

// Assignment Vol.2
console.log("%cAssignment Vol.2", "background-color: gold; color: black;");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

// Assignment Vol.3
console.log("%cAssignment Vol.3", "background-color: gold; color: black;");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [arrOne.concat(arrTwo).sort().reverse()];

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Assignment Vol.4
console.log("%cAssignment Vol.4", "background-color: gold; color: black;");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words.pop()[0].slice(words.length).toUpperCase()); // ZERO
console.log(words);

// Assignment Vol.5
console.log("%cAssignment Vol.5", "background-color: gold; color: black;");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

console.log(haystack.includes(needle));
console.log(haystack[1].includes(needle));
console.log(haystack.slice(1, 2).includes(needle));
console.log(haystack.splice(1, 1).includes(needle));
if (haystack.includes(needle) === true) {
  console.log("Found");
}

// Assignment Vol.6
console.log("%cAssignment Vol.6", "background-color: gold; color: black;");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [
  (
    arr2[arr1.length - true] +
    arr1[arr1.length - true] +
    arr2[arr1.length]
  ).toLowerCase(),
].toString();
console.log(arr1);
// Your Code Here

console.log(allArrs); // fxy
