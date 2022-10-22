/* 
Array Methods [Search]
- indexOf(Search Element, From Index [Opt])
- lastIndexOf(Search Element, From Index [Opt])
- includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let userName = ["Sayed", "Ahmed", "Khaled", "Ahmed", "Ali"];

console.log("%cindexOf", "background-color: gold;color: red;");

console.log(userName);
console.log(userName.indexOf("Ahmed")); // ==> 1 | .indexOf Result Index Position Number, If We Did Not Wrote Index Start From It Normally Will Start From [0]
console.log(userName.indexOf("Ahmed", 1)); // ==> 1 | Will Start Search From INDEX [1 To End]
console.log(userName.indexOf("Ahmed", 2)); // ==> 3 | Will Start Search From INDEX [2] | Will Got Ahmed Index Number [3]

console.log("%clastIndexOf", "background-color: gold;color: red;");

console.log(userName);
console.log(userName.lastIndexOf("Ahmed")); // ==> 3 | .lastIndexOf Result Index Position Number, It Start Search From The End [last index] | If We Did Not Add Index Start From It Will Initially Start Searching From The End To Index [0]
console.log(userName.lastIndexOf("Ahmed", 1)); // ==> 1 | Will Start Search From INDEX [1 to 0]
console.log(userName.lastIndexOf("Ahmed", 2)); // ==> 1 | Will Start Search From INDEX [2 to 0] | Will Got Ahmed Index Number [1]

console.log("%cincludes", "background-color: gold; color: red;");

console.log(userName);
console.log(userName.includes("Ahmed")); // ==> true | .includes Result Boolean Values | If We Did Not Put Index Start From It Initially Will Start Searching From Index [0]
console.log(userName.includes("Ahmed", 1)); // ==> true | It Start Search From Index [1 to End]
console.log(userName.includes("Ahmed", 2)); // ==> true | It Start Search From Index [2 to End]
console.log(userName.includes("Ahmed", 4)); // ==> false | It Start Search From [4 to End]

if (userName.indexOf("Ahmed") === -1) {
  console.log("Not Found");
}
if (userName.indexOf("Tariq") === -1) {
  console.log("Not Found");
}