let img = document.getElementsByTagName("img");
// let img = document.querySelectorAll("img");

console.log(img);

for (let i = 0; i < img.length; i++) {
  if (img[i].hasAttribute("alt")) {
    img[i].alt = "Old";
  } else {
    img[i].alt = "Elzero New";
  }
}
