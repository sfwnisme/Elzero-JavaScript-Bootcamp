let div = document.querySelector("div");

function countdown() {
  div.innerHTML--;
  if (div.innerHTML === "5") {
    window.open("https://elzero.org", (width = 400), (height = 400));
  } else if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}
let counter = setInterval(countdown, 100);
