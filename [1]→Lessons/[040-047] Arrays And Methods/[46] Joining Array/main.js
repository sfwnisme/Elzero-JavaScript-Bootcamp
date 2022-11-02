/* 
    Arrays Methods [Joining]
    - .concat(array, array) => Return A New Array
    - .join(Separator)
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

console.log("%c.concat()", "background-color: gold; color: red;");

console.log(myFriends);
let allFriends = myFriends.concat(myNewFriends, schoolFriends); // .concat() Deal With Adding A Single Variable Or More To Gather[Concat = لم او جمع] It In A Single Array
console.log(allFriends);

console.log("%c.join()", "background-color: gold; color: red;");

console.log(myFriends.join()); // .join() Deal With Adding Separator Between Elements And Concat Arrays Will Add [,] Initially Between Elements
console.log(myFriends.join(" ")); // Will Add SPACE Between Elements
console.log(myFriends.join("|")); // Will Add [|] Between Elements
console.log(myFriends.join(" | ")); // Will Add [ | ] Between Elements
console.log(myFriends.join(" - ")); // Will Add [ - ] Between Elements
console.log(allFriends.join(" + ")); // Will Add [ + ] Between Elements
