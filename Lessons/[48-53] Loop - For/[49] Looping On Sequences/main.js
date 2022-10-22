/* 
  loop
  - Loop On Sequences
*/

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
let onlyNames = [];
let onlyNumbers = [];

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}
// Here We Used Loop To Filter "STRINGS" And Delete "NUMBERS" The Prosessing Will Described >>

// FIRST: Adding Array We Want To Filter == myFriends
// SECOND: Adding Empty Array To Insert Filtered Elements Into It == onlyNames
//THEIRD: Adding "Loop" By "for" For Variable We Want To Filter == myFriends
//FOURTH: Insert "Condition" By "if" The Condition Will Be "(typeof myFriends[i] === "string")" If The Filtered Variable [myFriends] Equal "string" By Type And Value ==>  PRINT "onlyNames.push(myFriends[i]);" Print The Empty Variable And Insert Into It Filtered Values "strings"
//FINALLY Printing "onlyNames" And You Will See The Result
console.log(onlyNames);

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "number") {
    onlyNumbers.push(myFriends[i]);
  }
}
console.log(onlyNumbers);

/*
END BoooraZar
*/
