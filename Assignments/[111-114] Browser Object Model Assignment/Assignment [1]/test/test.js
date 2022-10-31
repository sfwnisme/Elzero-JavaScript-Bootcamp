let font = document.querySelector(".font");
let color = document.querySelector(".color");
let size = document.querySelector(".size");
let text = document.querySelector("p");

console.log(text);
changing() ? changing() : "";

font.onchange = function () {
  window.localStorage.setItem("font", font.value);
  changing();
};

color.onchange = function () {
  window.localStorage.setItem("color", color.value);
  changing();
};

size.onchange = function () {
  window.localStorage.setItem("size", size.value);
  changing();
};

function changing() {
  window.localStorage.getItem("font")
    ? (text.style.fontFamily = window.localStorage.font)
    : (text.style.fontFamily = "unset");

  window.localStorage.getItem("color")
    ? (text.style.color = window.localStorage.getItem("color"))
    : (text.style.color = "initial");

  window.localStorage.getItem("size")
    ? (text.style.fontSize = window.localStorage.getItem("size"))
    : (text.style.fontSize = "10px");

  window.localStorage.font
    ? (font.value = window.localStorage.font)
    : (font.value = "initial");

  window.localStorage.color
    ? (color.value = window.localStorage.color)
    : (color.value = "initial");

  window.localStorage.size
    ? (size.value = window.localStorage.size)
    : (size.value = "initial");
}
