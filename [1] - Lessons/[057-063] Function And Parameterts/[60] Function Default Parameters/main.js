/* 
  function
  - Default Function Parameters
  - Function Parameters Default [Undefinde]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

console.log(`%cVol.1 => Normal`, "background-color: gold;color: #000;");
//Focus Here We Printed The Value Of [userName] Without [age] Then The Printed Value Of [age] Will Be => "undefined"
function sayHello(userName, age) {
  return `Hello ${userName} Your Age Is ${age}`;
}

console.log(sayHello("Ahmed"));

console.log(`%cVol.1 => Condition "if"`, "background-color: gold;color: #000;");
// Here Will Use Old Way To Change The Value Of [ageOne] From "undefined" To "Unknown" ==> Will Use "if"
function sayHelloOne(userNameOne, ageOne) {
  if (ageOne === undefined) {
    ageOne = "Unknown";
  }
  return `Hello ${userNameOne} Your Age Is ${ageOne}`;
}

console.log(sayHelloOne("Ahmed"));

//Here We Repeated The Value With different Way ==> I Used Logical Operator [||] To Use ageOne Or "Unknown" Follow The Example For More Understanding
function sayHelloOne(userNameOne, ageOne) {
  if (ageOne === undefined) {
    ageOne = ageOne || "Unknown";
  }
  return `Hello ${userNameOne} Your Age Is ${ageOne}`;
}

console.log(sayHelloOne("Ahmed", 29));

console.log(
  `%cVol.1 => Using Variable Names`,
  "background-color: gold;color: #000;"
);

function sayHelloTwo(userNameTwo, ageTwo) {
  ageTwo = ageTwo || "Unknown";
  return `Hello ${userNameTwo} Your Age Is ${ageTwo}`;
}

console.log(sayHelloTwo("Ahmed"));

// We Repeated The Same Code With Another Way ==> Check The Both functions To Know What The different
function sayHelloTwo(userNameTwo, ageTwo) {
  ageTwo = ageTwo || "Unknown";
  return `Hello ${userNameTwo} Your Age Is ${ageTwo}`;
}

console.log(sayHelloTwo("Ahmed", 35));

/* Finally ES6 Method */
//Keep An Eye On Every Example From Here And Will Be Easy To Eat😋
console.log(
  `%cVol.1 => Using ES6 Modern Method`,
  "background-color: gold;color: #000;"
);

function sayHelloThree(userNameThree, ageThree = "Unknown") {
  return `Hello ${userNameThree} Your Age Is ${ageThree}`;
}

console.log(sayHelloThree("Ahmed"));

function sayHelloThree(userNameThree = "Unknown", ageThree = "Unknown") {
  return `Hello ${userNameThree} Your Age Is ${ageThree}`;
}

console.log(sayHelloThree());

function sayHelloThree(userNameThree = "Unknown", ageThree = "Unknown") {
  return `Hello ${userNameThree} Your Age Is ${ageThree}`;
}

console.log(sayHelloThree("Ahmed", 34));
