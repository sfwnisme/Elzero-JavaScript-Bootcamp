/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.slice(13, 14).repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(a.split(" Web School", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 6), a.substr(11, 17)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  a.charAt(0, 1).toLowerCase() + a.slice(1, 16).toUpperCase() + a.slice(16)
); // eLZERO WEB SCHOOl
