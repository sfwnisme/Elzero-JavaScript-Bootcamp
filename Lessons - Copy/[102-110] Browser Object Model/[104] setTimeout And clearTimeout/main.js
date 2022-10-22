/* 
  BOM [Browser Object Model]
  - Calling An Exact Function After A Setted Time
  - Time => Miliseconds => ms
  - settimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// Try One
setTimeout(function () {
  console.log("This Is 2000ms Test");
}, 2000);

// Try Two
setTimeout(test, 2500);
function test() {
  console.log("This Is 2500ms Param Function");
}

// Try Three
setTimeout(param, 3000, "Param Function");
function param(arg) {
  console.log(`This Is 3000ms ${arg} With Argument`);
}

// Try Four
// Adding setTimeout In A Variable Will Work Normally Without Call It
let set = setTimeout(() => {
  console.log("This Is setTimeout In Variable");
}, 2000);

// Calling A Variable Contains A setTimeout It Outputs A Number
console.log(set); // 4

let btn = document.getElementById("btn");
// onclick Will Stop
btn.onclick = function () {
  clearTimeout(set);
};
