/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generatorAll() {
  yield 1;
  console.log('hihihihiihihihi');
  yield 2;
  yield 3;
  yield 4;
}

let generator = generatorAll();
console.log(typeof generator);
console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generatorAll()) {
  console.log(value);
}

console.log(`#`.repeat(66));

// this loop will not work because there's no yield to call, due to we used it all by 
// console.log(generator.next()) on the above lines
for (let value of generator) {
  console.log(value);
}
