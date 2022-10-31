/* 
  Function
  - Function Inside Function
  - Return Function
*/
console.log(
  "%cFunction Inside Function",
  "Background-color: red; color: #000;"
);
console.log("%cExample Vol.1", "Background-color: gold; color: #000;");
function sayMessage(fName, lName) {
  let message = "Hello";
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg(); // We Wrote The Function To Enable It
  // This Function Is To Update The Variabel | We Add New Variable And Create Nested Function Then We Update It In The Variable In The Nested Function Then Finally We Call It In The Main Function
  return message; // Here We Returned The message Form The First Function Not Form concatMsg
}
console.log(sayMessage("Osama", "Mohamed"));

/* ----------------------------------------- */

console.log("%cExample Vol.2", "Background-color: gold; color: #000;");

function sayMessage2(fName, lName) {
  let message = "Hello";

  function concatMsg2() {
    return `${message} ${fName} ${lName}`; // We Change The Value Of concatMst To return For Calling It Withot Need To Call "message" Variable
  }

  return concatMsg2(); // We Replaced concatMsg2 Instead Of "message" Variable To Call The Whole Nested Function
}
console.log(sayMessage2("Osama", "Mohamed")); // But Here You Can See That I Did Not Changed The Finall Out Put

/* ----------------------------------------- */

console.log("%cExample Vol.3", "Background-color: gold; color: #000;");

function sayMessage3(fName, lName) {
  let message = "Hello";

  function concatMsg3() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`; // I Added A Nested Nested Function To Make It More Short And Easy
  }

  return concatMsg3();
}
console.log(sayMessage3("Osama", "Mohamed"));
