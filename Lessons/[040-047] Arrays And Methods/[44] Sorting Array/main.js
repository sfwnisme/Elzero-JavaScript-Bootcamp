/* 
    Arrays Method [Sort]
    - sort(Function [Opt])
    - reverse()
*/

let myFriends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, 10];

console.log(myFriends);
console.log(myFriends.sort()); // .sort() The Default Sort Order Is Ascending(تصاعدي)
console.log(myFriends.reverse()); // It Reversing The Array | If There Is A Method Before Like .sort() It Will Reverse The Array Depending On It Status
console.log(myFriends.sort().reverse()); // [Chain Method] It Normally Working
