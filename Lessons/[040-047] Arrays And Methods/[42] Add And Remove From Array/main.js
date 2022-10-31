/* 
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push(" ", " ") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/
//Normal Array
console.log("%cNormal Array", "background-color: gold; color: red;");

let myFriends = ["Ahmed", "Ismael", "Salah"];
console.log(myFriends);

//unshift Method
console.log("%cunshift Method", "background-color: gold; color: red;");

myFriends.unshift("Jebreal"); // unshift Method Adding Element To The First Of The Array ==> .unshift("Element", "Element","...")
console.log(myFriends);

//push Method
console.log("%cpush Method", "background-color: gold; color: red;");

myFriends.push("Ammar"); // push Method Adding Element To The End Of The Array ==> .unshift
console.log(myFriends);

//shift Method
console.log("%cshift Method", "background-color: gold; color: red;");

first = myFriends.shift(); // .shift Method Remove First Element From The Array ==> "Jebreal" Had Removed From The Array
//Here We Not Allowed To Add Any Value In parenthesis ==>()
console.log(`Removed Element Is ${first}`); // By Adding Inner Variable "myFriends" Includes The Array In A Main Variable "first" And Here Will See The Element That Removed From The Previous Array As A String ==>"Jebreal"
console.log(myFriends); // Here Will See The Full Array Without Removed The Last First Element Due To We Called The Array's Variable "myFriends"

//pop Method
console.log("%cpop Method", "background-color: gold; color: red;");

second = myFriends.pop(); // .pop Method Remove Last Element From The Array ==> "Ammar" Had Removed From The Array
//Here We Not Allowed To Add Any Value In parenthesis ==>()
console.log(`Removed Element Is ${second}`); // We Adding A Main Variabel Called "second" And It's Value Is The Variable That Includes The Array "myFriends" And We Call The "second" Variable To See The Removed Element "Ammar"
console.log(myFriends); // Here We Call The Inner Variable "myFriends" To See The Full Array After Removing The Selected Element
