let start = new Date();
let p1 = performance.now();

for (let i = 0; i < 999; i++) {
  let div = document.createElement("div");
  div.innerHTML = i;
  document.body.append(div);
}
let end = new Date();
let p2 = performance.now();

console.log(`by new Date(${end - start})`);
console.log(`by performance.now(${p2 - p1})`);

// Needed Output

// "Loop Took 1921 Milliseconds."
