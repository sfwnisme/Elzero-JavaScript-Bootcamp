/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split("")
  .map((a) => (isNaN(parseInt(a)) ? a : ""))
  .filter((a) => !a.includes(",") && !a.includes("_") && !a.endsWith("Z"))
  .reduce((acc, current) => `${acc}${current}`)
  .slice(+true);

console.log(solution); // Elzero Web School

let s = myString
  .split("")
  .map((a) =>
    isNaN(parseInt(a)) && !a.endsWith(",") && !a.startsWith("_") ? a : ""
  ); //.filter(a =>
//   a
//   )
// ;

console.log(s);

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString
//   .split(",")
//   .filter(a => isNaN(a))
//   .map(a => (a.includes("_") ? " " : a[a.length - true]));
// console.log(solution); // Elzero Web School

/* let solution = myString
  .split(",")
  .filter(a => isNaN(a))
  .map(a => (a.includes("_") ? " " : a.includes("Z") ? "" : a[a.length - true]))
  .reduce((acc, current) => `${acc}${current}`); // This Method Loop Every Element And Delete 1 Character From Every Element
console.log(solution); // Elzero Web School

*/
/* let x = ["aA", "bB", "cC", "defg"];
for (let i = 0; i < x.length; i++) {
  console.log(x[i][x[i].length - 1]); // هنا اللوب يشتغل على كل عنصر بالأراي وينقص منه رقم وكل رقم يرمز لمكان العنصر ويخرج العنصر اللي رقمة بعد ناتج الناقص
}
 */
// First Solution
let solution = myString
  .split(",")
  .filter((a) => isNaN(a))
  .map((a) =>
    a.includes("_") ? " " : a.includes("Z") ? "" : a[a.length - true]
  ) // a[a.length - true] => This Method Loop Every Element And Delete 1 Character From Every Element
  .reduce((acc, current) => `${acc}${current}`);
console.log(solution); // Elzero Web School

// Another Solution
let solution1 = myString
  .split(",")

  .filter((a) => isNaN(a))

  .map(
    (a) =>
      // a.includes("_")
      // a.startsWith("_")
      // a.endsWith("_")
      a === "_"
        ? " "
        : a === myString[myString.length - 1] // To Catch "Z" From The Global Scope
        ? ""
        : a[a.length - true] // To Catch The Last Index In Every Element
    // : a[a.length - a.length] // 1-1=0,2-2=0 To Catch The Last Index In Every Element
  )

  .reduce((acc, current) => `${acc}${current}`);

console.log(solution1); // Elzero Web School

console.log(myString[myString.length - 1]);
