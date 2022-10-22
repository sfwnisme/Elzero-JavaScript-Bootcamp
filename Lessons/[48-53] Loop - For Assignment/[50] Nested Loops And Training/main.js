/* 
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "black"];
let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log(`-`.repeat(10));
  console.log(`# ${products[i]}`);
  console.log(`-`.repeat(10));

  console.log(`Colors:`);
  for (let c = 0; c < colors.length; c++) {
    console.log(`-${colors[c]}`);
  }

  console.log(`Models:`);
  for (let m = 0; m < models.length; m++) {
    console.log(`${models[m]}`);
  }
}

// We Can Normally Nesting Loops In A Main Loop With The Same Format Of "for" Loop

/*
END BooraZar😁
*/
