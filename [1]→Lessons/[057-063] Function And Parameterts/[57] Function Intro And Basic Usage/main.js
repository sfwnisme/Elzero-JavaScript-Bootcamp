/* 
  Function
  - What Is Function ?
  - User-Defined Vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

console.log(`%cVol.1`, `background-color: #FF6363; color: black;`);
//Function Basic Built
function sayHello() {
  console.log(`Hello Ahmed`);
}
sayHello(); // Argument

console.log(`%cVol.2`, `background-color: #FF6363; color: black;`);
// We Can Use A Parameter [function sayHelloTwo(parameter)] For Making It More DYNAMIC
function sayHelloTwo(userName) {
  console.log(`Hello ${userName}`);
}

sayHelloTwo(`Ahmed`);

console.log(`%cVol.3`, `background-color: #FF6363; color: black;`);
function sayHelloThree(userNameTwo) {
  console.log(`Hello ${userNameTwo}`);
}

sayHelloThree(`Ahmed`);
sayHelloThree(`Khaled`);
sayHelloThree(`Sayed`);
sayHelloThree(`Omar`);
sayHelloThree(`Emad`);

console.log(`%cVol.4`, `background-color: #FF6363; color: black;`);

console.log(`Hello Ahmed`);
console.log(`Hello Khaled`);
console.log(`Hello Sayed`);
console.log(`Hello Omar`);
console.log(`Hello Emad`);
