/* 
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

let nam = "Osama";
console.log(nam); // Osama
console.log(...nam); // O s a m a
console.log([...nam]); // ["O", "s", "a", "m", "a"]

// Concatenate Arrays
let arr = ["Osama", "Ghareeb", "Ahmed"];
let arr0 = ["Gamal", "Islam"];

// usnig .concat()
let concatMethod = arr.concat(arr0);
console.log(concatMethod); // ["Osama", "Ghareeb", "Ahmed", "Gamal", "Islam"]

// usnig ...spread
let spread = [...arr, ...arr0];
console.log(spread); // ["Osama", "Ghareeb", "Ahmed", "Gamal", "Islam"]

//using .push()
arr.push(arr0);
console.log(arr); // ["Osama", "Ghareeb", "Ahmed", ["Gamal", "Islam"]]

// Copy Array
let arr1 = ["a", "b", "c"];
console.log(arr1); // ["a", "b", "c"]

let spreadCopyArray = [...arr1];
console.log(spreadCopyArray); // ["a", "b", "c"]

let cop = arr1;
console.log(cop); // ["a", "b", "c"]

// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);
console.log(allFriends); // ["Osama", "Ahmed", "Sayed", "Sameh", "Mahmoud"]

// Use With Math Object

let myNums = [100, 10234, -134, 345, 13];
console.log(Math.max(myNums)); // NaN
console.log(Math.max(...myNums)); // 10234

// Spread With Objects => Merge Objects

let objOne = {
  "Osama": 40,
  "Safwan": 24,
};

let objTwo = {
  "Ali": 40,
  "Wassim": 36,
};

console.log({objOne, objTwo}); // {{"Osama": 40, "Safwan": 24}, {"Ali": 40, "Wassim": 36}}
console.log({...objOne, ...objTwo}); // {"Osama": 40, "Safwan": 24, "Ali": 40, "Wassim": 36}
console.log({...objOne, ...objTwo, "Tariq": 28}); // {"Osama": 40, "Safwan": 24, "Ali": 40, "Wassim": 36, "Tariq": 28}