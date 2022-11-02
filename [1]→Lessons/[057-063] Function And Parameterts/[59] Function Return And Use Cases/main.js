/* 
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
  
*/

console.log(`%cVol.1`, `background-color: #FF6363; color: black;`);
function hello(userName) {
  console.log(`Hello ${userName}`);
}

hello(`Ahmed`); //In This Way It Will Get The Result Directly

console.log(`%cVol.2`, `background-color: #FF6363; color: black;`);
// return Function Works On Save The Value [Final Out Put] And Not Out Put It Directlly That Mean We Can Call It As A Variable Or Print It By [conosle.log, etc...]
function helloTwo(userNameTwo) {
  return `Hello ${userNameTwo}`;
}

helloTwo(`Ahmed`); // Here You Will Notice That Is No Result For This Value

console.log(helloTwo(`Ahmed`)); // Here We Printed The Value When We Wanted

console.log(`%cVol.3`, `background-color: #FF6363; color: black;`);

function helloThree(userNameThree) {
  return `Hello ${userNameThree}`;
}

let result = helloThree(`Ahmed`);
console.log(result); // We Can Also Drag It In Variable

console.log(`%cVol.4`, `background-color: #FF6363; color: black;`);

function helloFour(userNameFour) {
  return `Hello ${userNameFour}`;
  console.log(`hi`); // We Can Not Use Any Code After [return] => Unreachable
}

function helloFive(userNameFive) {
  return;
  `Hello ${userNameFive}`; // Automatic Semicolon Insertion [No Line Terminator Allowed]

  // We Can Not Enter The Rest Of [return] Code Under It As Same As Any Other Code It => Unreachable
}

console.log(`%cVol.5`, `background-color: #FF6363; color: black;`);

function generate(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    if (i === exclude) {
      return `${exclude} Interrupting`; // It Will Count Till [exclude] Then It Will Interrupt
    }
  }
}

generate(10, 20, 15);
