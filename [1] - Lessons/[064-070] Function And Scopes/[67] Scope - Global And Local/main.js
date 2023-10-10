/* 
  Scope 
  - Global And Local Scope
*/
console.log("%cGlobal Scope", "background-color: red; color: #000");
console.log("%cExample Vol.1", "background-color: Gold; color: #000");
//Global Scope Is A Variable We Can Use Any Where
var a = 1;
let b = 2;

function word() {
  console.log(`Function-Global Word ${a}`);
  console.log(`Function-Global Word ${b}`);
}

console.log(`Word ${a}`);
console.log(`Word ${b}`);

word(); // The Result Will Be Form The Global Scope "GLOBAL VARIABLES", Because There Is No Local Scope As We Will See In The Next Example

console.log("%cLocal Scope", "background-color: Red; color: #000");
console.log("%cExample Vol.1", "background-color: Gold; color: #000");

//Local Scope
var c = 1;
let d = 2;

function word1() {
  var c = 10;
  let d = 20;
  console.log(`Function-Local Word ${c}`);
  console.log(`Function-Local Word ${d}`);
}

console.log(`Word ${c}`);
console.log(`Word ${d}`);

word1(); // The Result Will Be From Local Scope "LOCAL VARIABLES"
