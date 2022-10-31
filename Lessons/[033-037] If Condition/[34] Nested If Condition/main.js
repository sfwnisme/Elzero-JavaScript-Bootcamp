/*
Nested If
*/
let price = 100,
  discount = false,
  discountAmount = 10,
  country = "Eygpt",
  student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Eygpt") {
  if (student === true) {
    price -= discountAmount + 30;
  } else {
    price -= discountAmount + 20;
  }
} else {
  price -= discountAmount + 10;
}
console.log(price);
