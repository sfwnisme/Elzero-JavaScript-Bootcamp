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
// if (changing()) {
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
// if (changing()) {
//   window.localStorage.getItem("font");

//   window.localStorage.getItem("color");

//   window.localStorage.getItem("size");
// }

// another way
// window.onload = () => {
//   // this code to save the data of the text of <p></p>
//   // here we confirm the data of the localStorage and saving it
//   changing();
// };

//another way to save the data
changing() ? changing() : "";

font.onchange = function () {
  console.log(font.value);
  window.localStorage.font = font.value;
  changing();
};

color.onchange = () => {
  console.log(color.value);
  window.localStorage.color = color.value;
  changing();
};

size.onchange = () => {
  console.log(size.value);
  window.localStorage.size = size.value;
  changing();
};

function changing() {
  // save the status and data of the text function
  window.localStorage.getItem("font")
    ? (text.style.fontFamily = window.localStorage.font)
    : (text.style.fontFamily = "unset");
  window.localStorage.getItem("color")
    ? (text.style.color = window.localStorage.color)
    : (text.style.color = "red");
  window.localStorage.getItem("size")
    ? (text.style.fontSize = window.localStorage.size)
    : (text.style.fontSize = "10px");

  // save <select> status
  // this way to save the current status of the text in <select>
  // after reloading the page the properties of the text that we changed from select tages will be saved
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
