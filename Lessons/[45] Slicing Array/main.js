/* 
    Arrays Methods [Slicing]
    - slice(Start [Opt], End [Opt] Not Including End)
    --- .slice() => All Array
    --- If Start Is Undefined => 0
    --- Negative Count From End
    --- If End Is Undefined || > Indexes => Slice To The End Array.length
    --- Return New Array
    -splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
    --- If Negative => Start From The End
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log("%c.slice()", "background-color: gold; color: red;");

console.log(myFriends);
console.log(myFriends.slice()); // = All Array > Due To We Didn't Select Start Or End
console.log(myFriends.slice(3)); // = Will Start From Index [3]>[Osama] To The End>Because We Did Not Add End ,So It Will Go To End
console.log(myFriends.slice(3, 5)); // = ["Osama", "Gamal"] | It Will Get The Index [3 To 5] But It Will Not Include The End
console.log(myFriends.slice(3, -2)); // We Can Also Use Negative With Positive Value
console.log(myFriends.slice(-4)); // [Index -4 = "Ali"] | Will Start From Index [2 To End] | Negative Start Counting From The End
console.log(myFriends.slice(-4, -2)); // = ["Ali", "Osama"]

console.log("%c.splice()", "background-color: gold; color: red;");

console.log(myFriends);
myFriends.splice(0, 0, "Salam", "Zein"); // .splice() Works On Removing And Add Items[Element] | Here We Added Elements ["Salam","Zein"] To Index [0]
console.log(myFriends);

myFriends.splice(2, 0, "Khaled", "Fadi"); // Here We Inserted ["Khaled", "Fadi"] To Index [2]
console.log(myFriends);

myFriends.splice(0, 4); // Here We Deleted [4] Indexes ['Salam', 'Zein', 'Khaled', 'Fadi'] | Deleting Start From Start Index ==> Here We Started From Index [0]
console.log(myFriends);
