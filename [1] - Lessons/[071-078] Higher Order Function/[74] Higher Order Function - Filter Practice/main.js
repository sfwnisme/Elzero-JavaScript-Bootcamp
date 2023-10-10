/* 
  Filter
  - Filter Longest Wrod By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

console.log("%cFilter Ex.0", "background-color:gold;color:#000;");
let smallWords = sentence
  .split(" ")
  .filter((a) => a.length <= 4)
  .join(" ");

console.log(smallWords);

console.log("%cFilter Ex.1", "background-color:gold;color:#000;");
let smallWords1 = sentence
  .split(" ")
  .filter(function (a) {
    return a.length <= 4;
  })
  .join(" ");

console.log(smallWords1);

console.log("%cFilter Ex.2", "background-color:gold;color:#000;");
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers
  .split("")
  .filter(function (a) {
    return isNaN(parseInt(a)) ? a : "";
  })
  .join("");
console.log(ign);

console.log("%cFilter Ex.3", "background-color:gold;color:#000;");
let ign1 = ignoreNumbers
  .split("")
  .filter(function (a) {
    return isNaN(parseInt(a)) ? a : "";
  })
  .join("");

console.log(ign1);

console.log("%cFilter Ex.4", "background-color:gold;color:#000;");
let ign11 = ignoreNumbers
  .split("")
  .filter(function (a) {
    return isNaN(parseInt(a));
  })
  .join("");

console.log(ign11);

console.log("%cmap Ex.0", "background-color:gold;color:#000;");

let ign2 = ignoreNumbers
  .split("")
  .map(function (a) {
    return isNaN(parseInt(a)) ? a : "";
  })
  .join("");

console.log(ign2);

console.log("%cmap Ex.1", "background-color:gold;color:#000;");

let ign3 = ignoreNumbers
  .split("")
  .map(function (a) {
    return isNaN(parseInt(a)); // If Did Not Write The TernaryCondition Values => [true : false] You Will Got Only Boolean Values
  })
  .join("");

console.log(ign3);

console.log("%cFilter Ex.5", "background-color:gold;color:#000;");

let mix = "A13BS2ZX";

console.log(
  "%cfilter() & map() Ex.5",
  "background-color:#ff5656;color:#000; font-weight: 800"
);
let mx = mix
  .split("")
  .filter(function (a) {
    return !isNaN(parseInt(a));
  })
  .map((b) => b * b)
  .join("");
console.log(mx);

console.log(
  "%cmap() & filter() Ex.5",
  "background-color:#ff5656;color:#000; font-weight: 800"
);
let mx1 = mix
  .split("")
  .map((a) => (!isNaN(parseInt(a)) ? a : ""))
  .filter((a) => a * a)
  .join("");

console.log(mx1); // Focus Here In The Value Is The Same Not Processed Multibly Because We Used The Process In The Filter[filter()=> ONLY OUTPUT THE FIRST TRUE VALUE] Otherwise Map[map()=> ACCEPTING TRUE OR FALSE VALUES LIKE THE PREVIOUS EXAMLE]

console.log(
  "%cmap() Only Ex.5",
  "background-color:#ff5656;color:#000; font-weight: 800"
);
let mx2 = mix
  .split("")
  .map((a) => (!isNaN(parseInt(a)) ? a * a : ""))
  .join("");

console.log(mx2);
