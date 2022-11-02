/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["Khalil", "Ali", "Waseem"];
console.log(myFriends); // Normally Using Variable It Will Equal The Array
console.log(myFriends[1]); // Using Index With Array It Allowed Index Start => 0
console.log(myFriends[1][1]); // Accessing Arrays Element's Index Position Is Another Usfull Way Access Element => Access Element Indexes

let myFriendsTwo = ["Kalil", ["Ali", "Amar"], "Waseem"];

console.log(myFriendsTwo); // We Can Use Nested Arrays
console.log(myFriendsTwo[1]); // As You See It Result The Full Nested Array As An Index
console.log(myFriendsTwo[1][1]); // We Can Go Into The Array By Using Index Position Number Then We Can Also Use It Deeper
console.log(myFriendsTwo[1][1][1]); // Here You Can See How Far We Can Go With Nested Arrays

myFriendsTwo[1] = ["Gamal"]; // Here We Changed The Array By Index From ["Ali","Amar"] => ["Gamal"]
console.log(myFriendsTwo); // The Array Changed Successfully
myFriendsTwo[1] = ["Hind", "Sara"]; // Try To Change ["Gamal"] => ["Hind","Sara"]
console.log(myFriendsTwo); // As It Appears It Changed Correctly

console.log(Array.isArray(myFriends)); // Array Code It Help To Check Is It Array Or Not By Boolean Values
