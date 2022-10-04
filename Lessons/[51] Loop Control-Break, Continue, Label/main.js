/* 
  loop Control
  - Break
  - Continue
  - Lable
 */

let products = ["Keyboards", "Mouse", "Pen", 2, "Pad", 3, "Monitor"];

let colors = ["Red", "Green", "Black"];

console.log("%cbreak;", "background-color: red; color: #eee;");
// break; Is A Method That Stop Looping In Specific Point
// We Want To Print "products" From The First To "Pen"
// First Way We Know Till Now
console.log("%cEx. Vol.1", "background-color: gold; color: black;");
for (let i = 0; i < 3; i++) {
  console.log(products[i]);
}
// Second Way NOTE:>> This Way Include The End "Pen" Due To We Print "console.log(products[i]);" Be For The Condition "if"
console.log("%cEx. Vol.2", "background-color: gold; color: black;");
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  if (products[i] === "Pen") {
    break;
  }
}

// Theird We Don't Want To Include The End, So We Will Use The "console.log(products[i]);" In The End Of The Code After The Condition "if" As You See
console.log("%cEx. Vol.3", "background-color: gold; color: black;");

for (let i = 0; i < products.length; i++) {
  if (products[i] === "Pen") {
    break;
  }
  console.log(products[i]);
}
// break; Deal To Stop Printing Or Processing On Point We Select
console.log("-".repeat(10));

console.log("%ccontinue;", "background-color: red; color: #eee;");
// continue; Works To Exclude[يستثني] An Elements We Select

console.log("%cEx. Vol.1", "background-color: gold; color: #000;");
// We Trying To Exclude The Numbers By "continue;" With "typeof" condition To Delete Numbers And Only Outputting STRINGS
// Here We Did The Loop Correctlly But It Printed All The Array, Because We Print "console.log(products[i]);" In The Top Before The Condition "if"
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  if (typeof products[i] === "number") {
    continue;
  }
}

console.log("%cEx. Vol.2", "background-color: gold; color: #000;");
// Successfully We Excluded[Deleted] The NUMBERS And Only Outputting Only STRINGS. You Can Notice The Difference Between The "Ex. Vol.1" And Thes Example "Ex. Vol.2"
for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") {
    continue;
  }
  console.log(products[i]);
}

console.log("-".repeat(10));

console.log("%cLable", "Background-color: red;color: #eee;");

// Label Is An Identifier[معرف] For [break; And continue;]
console.log("%cEx. Vol.1", "Background-color: gold;color: #000;");
// Here We Break The Nested Loop
// Here The Loop Included The End Because We Putted The "console.log(`-${colors[j]}`);" Before The Condition "if"
mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(`${products[i]}`);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`-${colors[j]}`);
    if (colors[j] === "Green") {
      break; //Here We Break The Nested Loop Behind Scene Will Be Like >> [break nestedLoop;]
    }
  }
}

console.log("%cEx. Vol.2", "Background-color: gold;color: #000;");
// Here The Loop Did Not Included The End Because We Putted The "console.log(`-${colors[j]}`);" After The Condition "if"
mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(`${products[i]}`);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    if (colors[j] === "Green") {
      break;
    }
    console.log(`-${colors[j]}`);
  }
}

console.log("%cEx. Vol.3", "Background-color: gold;color: #000;");
mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(`${products[i]}`);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`-${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop; // Focus On Console In Browser You Will See The Loop Stopped On One Of "products" And On One Selected Nested Loop All That Because We Mentioned [break mainLoop;] In The Nested Loop And The Browser Will Take It As An Order Of Break Loop And Don't Iterate It
    }
  }
}
/* 
    FINALLY ORDERING IT TOO IMPORTANT
  */
