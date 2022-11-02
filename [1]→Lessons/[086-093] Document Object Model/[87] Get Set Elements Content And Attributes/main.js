/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement);
console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span> Main.js</span> File";
myElement.textContent = "Text From <span> Main.js</span> File";

document.images[0].src = "https://google.com";
document.images[0].alt = "Google";
document.images[0].title = "Image";
document.images[0].id = "img";
document.images[0].className = "img";
document.images[0].tagName = "";

// console.log(myElement);

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

// document.links[0].className = "go";
myLink.setAttribute("class", "no hi gooo");
// document.links[0].id = "go";
myLink.setAttribute("id", "no hi gooo");
// document.links[0].href = "go";
myLink.setAttribute("href", "no hi gooo");
// document.links[0].title = "go";
myLink.setAttribute("title", "no hi gooo");
