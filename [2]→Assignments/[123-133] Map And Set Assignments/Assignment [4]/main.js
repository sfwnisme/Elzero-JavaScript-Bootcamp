let theNumber = 100020003000;

// solution 1
console.log(+[...new Set(theNumber.toString())].sort().join("")); // 123

// solution 2
console.log(Number(Array.from(new Set(theNumber.toString())).sort().join(""))); // 123

// solution 3
console.log(
  +Array.from(new Set(theNumber.toString()), (e) => (e === "0" ? "" : +e))
    .sort()
    .join("")
); // 123
console.log(
  +[
    ...new Set(
      theNumber
        .toString()
        .split("")
        .filter((e) => e > false)
    ),
  ].join("")
); // 123
// Needed Output
// 123

/* 
  process of solution 1
  [1]
  [...new Set()]
  [] => convert The value to array
  ... => divide the value to array elements
  new Set() => to remove the dublcated array elements
  
  [2]
  theNumber.toString() => spread operator (...) not accept numbers, thus we use .toString() to convert the number to string
  
  [3]
  .sort() => to order the elements by number

  [4]
  .join("") to remove the spaces or commas between the array elements

  [5]
  +[] => convert the whole array elements to number
  
*/
