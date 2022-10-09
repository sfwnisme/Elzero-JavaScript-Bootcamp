let div = document.querySelector("div");

function countdown() {
  div.innerHTML--;
  if (div.innerHTML === "0") {
    // clearInterval(counter);
    // location.assign('https://elzero.org')
    location.replace('https://elzero.org')
  }
}
let counter = setInterval(countdown, 100);
