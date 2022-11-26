let theName = "Elzero";

console.log([...theName]);
console.log(Array.from(theName));
console.log([...new Set(theName)]);
console.log(theName.split(""));
console.log(Object.assign([], theName));
let arr = [];
for(let i = 0; i < theName.length; i++) {
  arr.push(theName[i]);
}
console.log(arr)

let arr2 = [];
for(let i of theName) {
  arr2.push(i);
}

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']