/* --------------Vol.1---------------- */

console.log("%cAssignment Vol.1", "background-color: gold; color: #000;");
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i < end; i += start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}

/* // Output
10;
20;
30;
50;
60;
70;
80;
90;
100; */

/* --------------Vol.2---------------- */
console.log("%cAssignment Vol.2", "background-color: gold; color: #000;");

let startOne = 10;
let endOne = 0;
let stopOne = 3;

// console.log(startOne.toString());

for (let i = startOne; i > endOne; i--) {
  if (i >= startOne) {
    console.log(`${i}`);
  } else if (i < startOne) {
    console.log(`${endOne}${i}`);
  }
  if (i === stopOne) break;
}

/* // Output
10;
09;
08;
07;
06;
05;
04;
03; */

/* --------------Vol.3---------------- */
console.log("%cAssignment Vol.3", "background-color: gold; color: #000;");

let startTwo = 1;
let endTwo = 6;
let breakerTwo = 2;

for (let i = startTwo; i <= endTwo; i++) {
  console.log(`${i}`);
  for (let i = breakerTwo; i < endTwo; i += 2) {
    console.log(`--${i}`);
  }
}
/* // Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4 */

/* --------------Vol.4---------------- */
console.log("%cAssignment Vol.4", "background-color: gold; color: #000;");

let index = 10;
let jump = 2;
let endThree = 0;
let i = index;

for (;;) {
  console.log(i);
  if (i === jump + jump) {
    break;
  }
  i -= jump;
}
// console.log(i);

/* // Output
10;
8;
6;
4; */

/* --------------Vol.5---------------- */
console.log("%cAssignment Vol.5", "background-color: gold; color: #000;");

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = +true;
// let i = 0;
for (let i = +false; i < friends.length; i++) {
  if (friends[i][+false] === letter.toUpperCase()) {
    continue; // Here We Selected The inner Index By [+false]=[0] To Get The First Index Of The Element To Start Fillter. If You Did Not Understond Please Change [let counter = "a" => let counter = "s"] And You Will See STRINGS That Starts With Letter "S" Will Be DELETED?
  }
  console.log(`${counter++} => ${friends[i]}`);
}
/* 
// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh"); 
*/

/* --------------Vol.6---------------- */
console.log("%cAssignment Vol.6", "background-color: gold; color: #000;");

console.log("%cSolution Vol.1", "background-color: red; color: #000;");
let startThree = 0;
let swappedName = "elZerO";
let arr = [];

for (let i = startThree; i < swappedName.length; i++) {
  swappedName[i] === swappedName[i].toUpperCase()
    ? arr.push(swappedName[i].toLowerCase())
    : arr.push(swappedName[i].toUpperCase());
}
console.log(arr.join(""));

console.log("%cSolution Vol.2", "background-color: red; color: #000;");

let startFive = 0;
let swappedNameTwo = "elZerO";
let word = "";

for (i = startFive; i < swappedNameTwo.length; i++) {
  if (swappedNameTwo[i] === swappedNameTwo[i].toLowerCase()) {
    word += swappedNameTwo[i].toUpperCase();
  } else {
    word += swappedNameTwo[i].toLowerCase();
  }
}
console.log(word);

console.log("%cSolution Vol.3", "background-color: red; color: #000;");

let startEight = 0;
let swappedNameFour = "elZerO";
let wordTwo = "";

for (i = startEight; i < swappedNameFour.length; i++) {
  if (swappedNameFour[i] === swappedNameFour[i].toLowerCase()) {
    wordTwo = wordTwo + swappedNameFour[i].toUpperCase();
  } else {
    wordTwo = wordTwo + swappedNameFour[i].toLowerCase();
  }
}
console.log(wordTwo);

console.log("%cSolution Vol.4", "background-color: red; color: #000;");

let startSix = 0;
let swappedNameThree = "elZerO";
let arrTwo = [];

for (let i = startSix; i < swappedNameThree.length; i++) {
  if (swappedNameThree[i] === swappedNameThree[i].toUpperCase()) {
    arrTwo.push(swappedNameThree[i].toLowerCase());
  } else {
    arrTwo.push(swappedNameThree[i].toUpperCase());
  }
}

console.log(arrTwo.join(""));
/* 
// Output
"ELzERo"
 */

/* --------------Vol.7---------------- */
console.log("%cAssignment Vol.7", "background-color: gold; color: #000;");

console.log("%cSolution Vol.2", "background-color: red; color: #000;");

let startFour = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = 0; i < mix.length; i++) {
  if (typeof mix[i] === "string") {
    continue;
  } else if (mix[i] === mix[+false]) {
    continue;
  }
  console.log(mix[i]);
}

console.log("%cSolution Vol.2", "background-color: red; color: #000;");

let startSeven = 0;
let mixTwo = [1, 2, 3, "A", "B", "C", 4];
let zero = 0;

for (let i = 0; i < mixTwo.length; i++) {
  if (typeof mixTwo[i] === "string") {
    continue;
  } else if (mixTwo[i] === mixTwo[zero]) {
    continue;
  }
  console.log(mixTwo[i]);
}

/* // Output
2;
3;
4; */
