/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/
let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myClass = document.querySelector(".my-span");
let myClass2 = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]); // Using Index To Select The Exact Tag Or Element
myTagElements[1].innerHTML = "Test"; // InnerHTML Change Element Content In Html
console.log(myClassElement);
console.log(myClass);
console.log(myClass2);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);
console.log(document.images);
