let a = 16;

for (let i = 16; i <= 30; i++) {
  // console.log(i);
}

let font = document.querySelector(".font");
let color = document.querySelector(".color");
let size = document.querySelector(".size");
let text = document.querySelector("p");
console.log(text);

// if condition is the best way to save local storage data on reload or closing site and back to it
// if (changes()) {
//   window.localStorage.getItem("font")
//     ? (text.style.fontFamily = window.localStorage.font)
//     : (text.style.fontFamily = "unset");
//   window.localStorage.getItem("color")
//     ? (text.style.color = window.localStorage.color)
//     : (text.style.color = "red");
//   window.localStorage.getItem("size")
//     ? (text.style.fontSize = window.localStorage.size)
//     : (text.style.fontSize = "10px");
// }

// window.onload can also save the local storage data
// window.onload = () => {
//   window.localStorage.getItem("font")
//     ? (text.style.fontFamily = window.localStorage.font)
//     : (text.style.fontFamily = "unset");
//   window.localStorage.getItem("color")
//     ? (text.style.color = window.localStorage.color)
//     : (text.style.color = "red");
//   window.localStorage.getItem("size")
//     ? (text.style.fontSize = window.localStorage.size)
//     : (text.style.fontSize = "10px");
// };

// if condition is the best way to save local storage data on reload or closing site and back to it
if (changes()) {
  window.localStorage.getItem("font");

  window.localStorage.getItem("color");

  window.localStorage.getItem("size");
}

font.onchange = function () {
  console.log(font.value);
  window.localStorage.font = font.value;
  changes();
};

color.onchange = () => {
  console.log(color.value);
  window.localStorage.color = color.value;
  changes();
};

size.onchange = () => {
  console.log(size.value);
  window.localStorage.size = size.value;
  changes();
};

function changes() {
  // text.style.color = color.value;
  window.localStorage.getItem("font")
    ? (text.style.fontFamily = window.localStorage.font)
    : (text.style.fontFamily = "unset");
  window.localStorage.getItem("color")
    ? (text.style.color = window.localStorage.color)
    : (text.style.color = "red");
  window.localStorage.getItem("size")
    ? (text.style.fontSize = window.localStorage.size)
    : (text.style.fontSize = "10px");
}
