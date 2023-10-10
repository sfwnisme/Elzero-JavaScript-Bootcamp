/*
  Modules
  - Export Alias
  - Named Export
  - Default Export 
  - Import All
*/

let a = 10;
let arr = [1, 2, 3];

function saySomething() {
  return `Hey! I'm Something But Changed To S`;
}

export { a, arr, saySomething as s };

export default function () {
  return `I'm the BOOS Here`
}
