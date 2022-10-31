//Assignment Vol.1
console.log("%cAssignment Vol.1", "background-color: gold;color: red;");

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substring(1, 0).toLowerCase()); // e
console.log(userName.substr(0, 1).repeat(3).toLowerCase()); // eee

//Assignment Vol.2
console.log("%cAssignment Vol.2", "background-color: gold;color: red;");

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True
