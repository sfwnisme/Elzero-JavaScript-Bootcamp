/* 
  Loop
  - While
*/
console.log("%cVol.1", "background-color: gold; color: #000;");

let products = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let index = 0;
while (index < 10) {
  console.log(index);
  index++;
}
// Here It Will Start From [0] And Stop On [9] Because [console.log] Is Before [index++] That Mean It Will Loop As Index

console.log("%cVol.2", "background-color: gold; color: #000;");

let productsTwo = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let indexTwo = 0;
while (indexTwo < 10) {
  indexTwo++;
  console.log(indexTwo);
}
// Here It Will Start From [1] And Stop On [10] Because [console.log] Is After [index++] That Mean It Will Loop As Length

/* 
Generally And Clearlly If We Used [console.log] At The End It Will Loop As Length, But If We Used It In The First It Will Loop As Index
*/

console.log("%cVol.3", "background-color: gold; color: #000;");

let productsThree = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let indexThree = 0;
while (indexThree < 10) {
  console.log(indexThree);
  indexThree++;
  if (indexThree === 3) {
    break;
    // Also We Can Use Break And Continue In [While] Normally Same As [For]
  }
}

console.log("%cVol.4", "background-color: gold; color: #000;");

let productsFour = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let indexFour = 0;
while (indexFour < 10) {
  console.log(productsFour[indexFour]);
  indexFour++;
}
// Will Loop All [productsFour] And Will Loop [undefined] For The Rest Till [10]

console.log("%cVol.5", "background-color: gold; color: #000;");

let productsFive = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let indexFive = 0;
while (indexFive < products.length) {
  console.log(productsFive[indexFive]);
  indexFive++;
}
// As We Learned In Looping We Use [products.length] To Avoid [undefined] Or Empty Elements

/* 
Generally And Clearlly If We Used [console.log] At The End It Will Loop As Length, But If We Used It In The First It Will Loop As Index
*/
