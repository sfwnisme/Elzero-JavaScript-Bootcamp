// Assignment Vol.1
console.log("%cAssignment Vol.1", "background-color: gold; color: red;");

// Test Case 1
let numOne = 9; // "009"
if (numOne < 10) {
  console.log(`00${numOne}`);
}
// Test Case 2
let numTwo = 20; // "020"
if (numTwo > 10 && numTwo < 100) {
  console.log(`0${numTwo}`);
}
// Test Case 3
let numThree = 110; // "110"
if (numThree >= 100) {
  console.log(numThree);
}

// Assignment Vol.2
console.log("%cAssignment Vol.2", "background-color: gold; color: red;");

let num111 = 9;
let str = "9";
let str2 = "20";
// ("{num111} Is The Same Value As {str}");
console.log(num111 == str);
// ("{num111} Is The Same Value As {str} But Not The Same Type");
console.log(num111 !== str);
// ("{num111} Is Not The Same Value Or The Same Type As {str2}");
console.log(num111 != str2 || num111 === str2);
console.log(num111 !== str2);
// ("{str} Is The Same Type As {str2} But Not The Same Value"); */
console.log(str !== str2);

// Assignment Vol.3
console.log("%cAssignment Vol.3", "background-color: gold; color: red;");

let num11 = 10;
let num22 = 30;
let num33 = "30";
if (num33 > num11 && num33 !== num22) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
} else if (num33 > num11 && num33 == num22) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
} else if (num33 !== num11 && num33 !== num22) {
  console.log(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}

// Assignment Vol.4
console.log("%cAssignment Vol.4", "background-color: gold; color: red;");

// Edit What You Want Here

let num1 = 10;
let num2 = 9;
let num3 = +"10";
let num4 = 32;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
