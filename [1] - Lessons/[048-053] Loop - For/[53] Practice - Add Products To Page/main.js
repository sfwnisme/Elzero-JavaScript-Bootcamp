/* 
  Products Practice
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>${i + 1} ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p> ${colors[j]}</p>`);
  } // You Can Delete It And Depend On The Next Code That I Made It With [join() Method]
  document.write(`<p>${colors.join("|")}</p>`); // You Can Do It For Styling Or Delete It If You Want
  document.write(`</div>`);
}

// You Can Delete Some Lines It's Ok , But You Can Not Change Its Positions,Because It Will Complicate

/* 
لفهم الشرح يرجى مراجعة الدرس مع التطبيق
*/
