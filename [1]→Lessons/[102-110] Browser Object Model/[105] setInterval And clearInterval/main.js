/* 
  BOM [Browser Object Model]
  - setInterval: Calling An Exact Function After A Setted Time Inifinitly
  - Time => Miliseconds => ms
  - setInterval(Function, Milliseconds, Additional Params)
  - clearInterval(Identifier)
*/

// setInterval(() => {
//   console.log("Msg");
// }, 2000);

let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  // Focus here the number is string because it's in a DIV if we didn't wrote it as a STRING it will not do the function
  if (div.innerHTML === "0") {
    clearInterval(set);
  }
}

let set = setInterval(countdown, 1000);
