/* 
  Arrays Methods
  - Length
*/
console.log("%cPart Vol.1", "background-color: gold; color: red;");
// Index Start From 0 [0, 1, 2, 3]
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Ala'a"];

console.log(myFriends); // Will Result [4] Arrays
console.log(myFriends.length); // Will Result [4]

console.log("%cPart Vol.2", "background-color: gold; color: red;");
// Index Start From 0 [0, 1, 2, 3]
myFriends[3] = "Omar";
console.log(myFriends); // Will Result [4] Arrays
console.log(myFriends.length); // Will Result [4]

console.log("%cPart Vol.3", "background-color: gold; color: red;");
// Index Start From 0 [0, 1, 2, 3, 4]
//Dinamically We Can Use length As An Index To Add A New Array Without Empty Arrays
myFriends[myFriends.length] = "Bakr";
console.log(myFriends); // It Added A New Arry Due to length = Array Index + 1 That Mean Will Add A New Array After The Last One
console.log(myFriends.length);

console.log("%cPart Vol.4", "background-color: gold; color: red;");
// Index Start From 0 [0, 1, 2, 3, 4]
// Also We Can Us [-1] For length To Change The Last Index In The Array Dinamically
myFriends[myFriends.length - 1] = "Not Bakr";
// console.log(myFriends); // Focus On The Last Array Or Index It Changed From "Bakr" To "Not Bakr" ,Because We [-1] From The length That Mean We spotted The Last Array Or Index
console.log(myFriends);
console.log(myFriends.length);

console.log("%cPart Vol.5", "background-color: gold; color: red;");
// Index Start From 0 [0, 1, 2, 3, 4, 5,]
myFriends[7] = "Salah";
console.log(myFriends); // Will Result [8] Arrays, But Index Number From 4 To 6 Is Empty
console.log(myFriends[5]); // It's Undefined Because It's ==>| Empty Index Empty Index = Undefindes |
console.log(myFriends.length); // Will Result [8] It Including Empty Arrays
