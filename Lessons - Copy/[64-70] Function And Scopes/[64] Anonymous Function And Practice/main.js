/* 
  Function 
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argumnet To Other Function
  - Task Without Name
  - SetTimeout
*/
//Normal Function
console.log("%cAnonymous Function", "background-color: red;color: #000;");
console.log("%cExample Vol.1", "background-color: gold;color: #000;");
function calc(num1, num2) {
  return num1 + num2;
}
console.log(calc(10, 20));

// We Can Use The Value Out Put Before The Function
console.log("%cExample Vol.2", "background-color: gold;color: #000;");

console.log(calc2(10, 20));

function calc2(num1, num2) {
  return num1 + num2;
}

// We Can Access The Function By Variable | But Can Not Use The Value Before Function In This Example
console.log("%cExample Vol.3", "background-color: gold;color: #000;");

let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

// Unable To Get The Function By It Name Because It Is Already In A Variable , Only We Can Call It By The Variable Name
console.log("%cExample Vol.4", "background-color: gold;color: #000;");

let calculator2 = function calc3(num1, num2) {
  return num1 + num2;
};

console.log(calc3(10, 20));

// Anonymous Function Usually Using For A Single Button Or Event We Wanna Do And We Don't Want Use It Another Time
