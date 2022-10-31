/* 
Switch Statement
switch(expression) {
  Case 1: 
    // Code Block
    break;
  Case 2:
    // Code Block
    break;
  Default
    // Code Block
}
- Default Ordering
- Multiple Match
- ===
*/

let day = 1;
let dayTwo = 1;
let dayThree = 5;
let dayFour = 1;
let dayFive = 1;
let daySix = 5;
let daySeven = 5;

console.log("%cPart One", "background-color: red;color: gold;");
switch (day) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 5:
    console.log("Wednesday");
    break;
  case 6:
    console.log("Thursday");
    break;
  case 7:
    console.log("Friday");
    break;
  default:
    console.log("Unknown");
}
/* 
-[switch(expression)] Expression Must Equal The Variable Name ---Variable Structure---> let variabelName = variable Value; 
-[case] Number Must Equal Value & Type
*/
/* -------------------------------------- */

console.log("%cPart Two", "background-color: red;color: gold;");

// Part Two
switch (dayTwo) {
  default:
    console.log("Unknown");
    break;
  case 1:
    console.log("Saturday");
    break;
  case 3:
    console.log("Monday");
}
/* 
-Using [default] Anywhere Is Normal
*/
/* -------------------------------------- */

console.log("%cPart Three", "background-color: red;color: gold;");

// Part Three
switch (dayThree) {
  case 1:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Tuesday");
}
/* 
-If The Variable Not Matching Any Case Will Equal NOTHING,But If There Is [default In switch CODE] It Will Result The [default] Value
*/
/* -------------------------------------- */

console.log("%cPart Four", "background-color: red;color: gold;");

// Part Four
switch (dayFour) {
  default:
    console.log("Unknown");
    break;
  case 1:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Tuesday");
}
/* 
-Using The Same Case Number Will Get The First Option
*/
/* -------------------------------------- */

console.log("%cPart Five", "background-color: red;color: gold;");

// Part Five
switch (dayFive) {
  default:
    console.log("Unknown");

  case 1:
    console.log("Saturday");
  case 2:
    console.log("Sunday");
  case 3:
    console.log("Monday");
  case 4:
    console.log("Tuesday");
}
/* 
-Not Using [break;] Will Get The Chosed Case And All The Cases Below
*/

console.log("%cPart Six", "background-color: red;color: gold;");

// Part Six
switch (daySix) {
  default:
    console.log("Unknown");
  case 1:
    console.log("Saturday");
  case 2:
    console.log("Sunday");
  case 3:
    console.log("Monday");
  case 4:
    console.log("Tuesday");
}
/* 
-Not Using [break;] Will Get The Chosed Case And All The Cases Below, Specially If Chosed Out Range Number Will Result All Cases With [default] , If There's No [default] It Equal NOTHING
*/

console.log("%cPart Seven", "background-color: red;color: gold;");

// Part Seven
switch (daySeven) {
  case 1:
    console.log("Saturday");
  case 2:
    console.log("Sunday");
  case 3:
    console.log("Monday");
  case 4:
    console.log("Tuesday");
}
/* 
-Not Using [break;] Will Get The Chosed Case And All The Cases Below, Specially If Chosed Out Range Number Will Result All Cases With [default] If There's No [default] It Equal NOTHING
*/
