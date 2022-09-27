let counter = document.querySelector("[data='counter']");
let down = document.querySelector("[data='down']");
let up = document.querySelector("[data='up']");
console.log(up);

function counterFunction(e) {
  if (e.target.id === "down") {
    counter.innerHTML--;
  } else if (e.target.id === "up") {
    counter.innerHTML++;
  } else if (e.target.id === "counter") {
    counter.innerHTML < 0 ? "" : e.preventDefault();
  }
}
document.addEventListener("click", counterFunction);
