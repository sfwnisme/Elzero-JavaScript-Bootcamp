// Write Your Generator Function Here
function* gen() {
  let i = 1;
  while (true) {
    yield 100 * i * i - 160 * i + 74;
    i++;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
console.log(generator.next()); // {value: 6734, done: false}
console.log(generator.next()); // {value: 6734, done: false}
console.log(generator.next()); // {value: 6734, done: false}

// just for testing
for (let i = 1; i < 10; i++) {
  console.log(100 * i * i - 160 * i + 74);
}
