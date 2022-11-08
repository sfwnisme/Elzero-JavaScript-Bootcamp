/* 
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location In The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At OR Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Omitted => Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Omitted => Reach The End

  ****** Targetting The Same Array More Than One Time It Override Depending On The Previouse Value
*/

// Start Value
const array1 = ["a", "b", "c", "d", "e"]
// console.log(array1.copyWithin(0,0)); // Default ['c', 'd', 'e', 'd', 'e']
// console.log(array1.copyWithin(0,2)); // ['c', 'd', 'e', 'd', 'e']
// console.log(array1.copyWithin(0,1)); // ['d', 'e', 'c', 'd', 'e']
console.log(array1.copyWithin(0, 3)); // ['d', 'e', 'c', 'd', 'e']
console.log(array1.copyWithin(0, 4)); // ['e', 'b', 'c', 'd', 'e']

// Start And End Values
const array2 = ["a", "b", "c", "d", "e"];
// console.log(array2.copyWithin(0,2,4)); // ['c', 'd', 'c', 'd', 'e']
// console.log(array2.copyWithin(0,0,2)); // Default ['a', 'b', 'c', 'd', 'e']
// console.log(array2.copyWithin(0, -2, -1)); // ['d', 'b', 'c', 'd', 'e']
// console.log(array2.copyWithin(2, -4, -3)); // ['a', 'b', 'b', 'd', 'e']
console.log(array2.copyWithin(2, 4, -3)); // Default ['a', 'b', 'c', 'd', 'e']

// Negative Values
const array3 = ["a", "b", "c", "d", "e"];
console.log(array3.copyWithin(0 , -3)) // ["c", "d", "e", "d", "e"]

// No Start And End
const array4 = ["a", "b", "c", "d", "e"];
console.log(array3.copyWithin(3)); // ["e", "b", "c", "d", "e"]
