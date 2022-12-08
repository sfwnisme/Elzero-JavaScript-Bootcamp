/* 
  Modules
  - Import And Export
*/

// METHOD ONE => you can use export before the target
export let a = 10;
export let arr = [1, 2, 3, 4];

export function saySomething() {
  return `Something`;
}

let b = 20;
let obj = {
  a: 3,
  b: 5,
};

function* tst() {
  yield "hi";
}

// METHOD TWO => exporting the whole targets in a single line
export { b, obj, tst };
