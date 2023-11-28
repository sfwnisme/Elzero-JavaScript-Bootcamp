let theName = "Elzero";

console.log('spread', [...theName]);
console.log('Array.form', Array.from(theName));
console.log('spread, Set', [...new Set(theName)]);
console.log('split', theName.split(''));
console.log('Object.assign', Object.assign([], theName));
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
