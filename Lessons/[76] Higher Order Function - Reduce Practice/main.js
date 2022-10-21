/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`-`.repeat(20));
  return acc.length > current.length ? acc : current;
});
console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let filter = removeChars.filter((a) => !a.includes("@")).join("");
// Doing Only joining To Turn The Array To String Or Number etc... For The Values Is Not That Professional Because It A Prepared Method We Should Use Other Ways Like The Next Example
console.log(filter);

let filterAndReduce = removeChars
  .filter((a) => !a.includes("@"))
  .reduce((acc, current) => `${acc}${current}`);
// Here We Used reduce() Converting The Array To String Without Using join("")
console.log(filterAndReduce);

console.log(removeChars);
