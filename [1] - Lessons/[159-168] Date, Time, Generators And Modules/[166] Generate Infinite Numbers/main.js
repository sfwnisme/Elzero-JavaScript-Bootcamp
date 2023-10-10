/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

function* generateNumbers() {
  // yield 1;
  // yield 2;
  // return `keke do you love me?`; // here the generator will stop
  // yield 3;
  // yield 4;
  // using this block of code to get infinite numbers by request
  let index = 0;
  while(true) {
    yield index++;
  }
}

let generator = generateNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
