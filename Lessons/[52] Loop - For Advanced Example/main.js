/* 
  Loop For Advanced Example
*/
/* 
Rebuild To Advanced Formt Process
- Getting "let i = 0" Out And Do It As A Usable Variable [We Can Use Any    Where Unlimited Times]. ***Try To Print "i" You Will See That It Equal Products Length
--- We Do Not Delete [;] That After [let i = 0]
- Getting "i++" Out And Put It Under "console.log(produts.length[i]);"
  >> console.log(products[i]); 
  i++;
- Getting "i < products.length" Out And Change It To Condition "if" And Put It Under "i++" And The Result Of The Condition is [break;]

>> i++;
  if (i === products.length) {
    break;
  }
  OR  
  if (i === products.lenght) break;
We Can Use Both Ways Of Condition
*/
let products = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

console.log("%cAdvanced Format", "background-color: red; color: #eee;");

for (;;) {
  console.log(products[i]);
  i++;
  if (i === products.length) {
    break;
  }
}
console.log(i);

/* 
  Loop For Advanced Example
*/

let prod = ["Keyboards", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
//Regular Format
console.log("%cRegular Format", "background-color: red; color: #eee;");
for (let i = 0; i < prod.length; i++) {
  console.log(prod[i]);
}
console.log(i); // i Variable Can Not Used Out Of It Loop >> Because It Built In Loop
