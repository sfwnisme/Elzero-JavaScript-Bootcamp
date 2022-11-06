/* 
  Array Methods
  - Array.from(Iterable, Mapfunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use Arguments
*/

console.log(Array.from("osama"));
console.log(Array.from("1341245", function (n) {
  return +n + +n;
}));
console.log(Array.from("1341245",(n)=> +n + +n));


let myArray = [1,1,1,2,3,4];

let mySet = new Set(myArray);

console.log(mySet);
console.log(Array.from(mySet));

console.log([new Set(myArray)]);
// console.log([...new Set(myArray)]); // Future lesson

function fr() {
  return arguments;
}
console.log(fr("Safwan","Yaseen","Zana"));
console.log(Array.from(fr("Safwan","Yaseen","Zana")));

function fr2(...a) {
 return a;
}
console.log(fr2("Safwan","Yaseen","Zana"));
