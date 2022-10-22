/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
console.log("%cpart vol.1", "background-color: gold; color: red;");
if ((st.length + st.length).toString() === "34") {
  console.log("Good length With toString");
}

if (st[7].toLowerCase() === "w") {
  console.log("Good index Method");
}
if (st.charAt(7).toLowerCase() === "w") {
  console.log("Good charAt");
}
if (st.slice(7, 8).toLowerCase() === "w") {
  console.log("Good slice");
}
if (st.substr(7, 1).toLowerCase() === "w") {
  console.log("Good substr");
}
if (st.substring(7, 8).toLowerCase() === "w") {
  console.log("Good substring");
}

console.log("%cpart vol.2", "background-color: gold; color: red;");

if (typeof +st !== typeof "string") {
  console.log("Good typeof");
}

console.log("%cpart vol.3", "background-color: gold; color: red;");

if (typeof st === typeof "number") {
  console.log("Good typeof");
}

console.log("%cpart vol.4", "background-color: gold; color: red;");

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good slice With repeat");
}
