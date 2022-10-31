let div = document.querySelector("div");

function countdown() {
  div.innerHTML--;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}
let counter = setInterval(countdown, 100);
