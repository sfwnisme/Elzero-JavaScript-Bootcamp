/* 
Control Flow
  - if
  - else if
  - else

  if (Condition) {
    //Block Of Code
  }
*/

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Eygept";
let country_1 = "Yemen";
let country_2 = "KSA";
let country_3 = "Syria";

if (discount === true) {
  price -= discountAmount;
} else if (country === "Eygept") {
  price -= 10;
} else if (country_1 === "Yemen") {
  price -= 20;
} else if (country_2 === "KSA") {
  price -= 40;
} else if (country_3 === "Syria") {
  price -= 50;
} else {
  price -= 90;
}

console.log(price);

// [if] Change Statues By Condition
// [else if] Change Statuse By Condition If Previuse Condition Invalid
//[else] Implement A Coundition If [if] And [else if] Conditions Invalid
