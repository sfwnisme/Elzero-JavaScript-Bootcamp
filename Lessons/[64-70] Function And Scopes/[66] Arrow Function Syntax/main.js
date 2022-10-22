/* 
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/
console.log("%cRegular Function", "background-color: red; color: #000;");
console.log("%cExample Vol.1", "background-color: gold; color: #000;");

//Regular Function
let print = function fun() {
  return 10;
};
console.log(print());

console.log("%cArrow Function", "background-color: red; color: #000;");
console.log("%cExample Vol.1", "background-color: gold; color: #000;");
// No Parameters
// Adding "=>" After "()"
let print1 = () => {
  return 10;
};
console.log(print1());

console.log("%cExample Vol.2", "background-color: gold; color: #000;");
// We Can Also Delete "return" And "{}" Curly Brackets | But If We Have More Than One Line Of Code Deleting "{}" Will Stop Code Of Working
let print2 = () => 20;
console.log(print2());

console.log("%cExample Vol.3", "background-color: gold; color: #000;");
// But If We Have More Than One Line Of Code Deleting "{}" Will Stop Code Of Working
let print3 = () => {
  let a = 10;
  return 30 + a;
};
console.log(print3());

console.log("%cExample Vol.4", "background-color: gold; color: #000;");
// If There Is No Parameters We Can Also Use "_" Or "()" Paranthesess | But Keep An Eye On It Because If You Using "Prettier" Extension It Will Reformat It To "(_)"
let print4 = (_) => 40;
console.log(print4());

console.log("%cExample Vol.5", "background-color: gold; color: #000;");

let print5 = function (num) {
  return num;
};
console.log(print5(50));

console.log("%cExample Vol.6", "background-color: gold; color: #000;");
// We Can Use Parameters | If We Have One Paramenter We Can Delete "()" Paranthesess
let print6 = (num) => {
  return num;
};
console.log(print6(60));

console.log("%cExample Vol.7", "background-color: gold; color: #000;");

let print7 = (num) => num;
console.log(print7(70));

console.log("%cExample Vol.8", "background-color: gold; color: #000;");

let print8 = function (num1, num2) {
  return num1 + num2;
};
console.log(print8(80, 8));

console.log("%cExample Vol.9", "background-color: gold; color: #000;");

let print9 = (num1, num2) => {
  return num1 + num2;
};
console.log(print9(90, 9));

console.log("%cExample Vol.10", "background-color: gold; color: #000;");

let print10 = (num1, num2) => num1 + num2;
console.log(print10(100, 10));
