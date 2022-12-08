/*
  Generators
  - Delegate Generator
*/
function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield 'A';
  yield 'B';
  yield 'C';
}

function* generateAll() {
  // to delegate any generator function you must add yield* with the star symbol
  yield* generateNums();
  yield* generateLetters();
  yield* [6, 7, 8]; // if we wrote yield with out * it will not spill the array
}

let generator = generateAll();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return('Stop Point')); // .return() to prevent the next yield calling
console.log(generator.next());
console.log(generator.next());
