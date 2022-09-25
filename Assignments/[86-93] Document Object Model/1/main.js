// Assignment 1
/* 
<div id="elzero" class="element" name="js">
	JavaScript
</div>; 
*/

let i = document.createElement("h1");
let iT = document.createTextNode("Assignment One");
let sup = document.createElement("sup");
let supT = document.createTextNode(" => Result On Console");
let hr = document.createElement("hr");

i.appendChild(iT);
sup.appendChild(supT);
i.appendChild(sup);
document.body.appendChild(i);
document.body.appendChild(hr);

let x1 = document.getElementsByTagName("div");
console.log(x1);

let x2 = document.getElementById("elzero");
console.log(x2);

let x3 = document.getElementsByClassName("element");
console.log(x3);

let x4 = document.querySelector("[name='js']");
console.log(x4);

let x5 = document.querySelector("div");
console.log(x5);

let x6 = document.querySelector("#elzero");
console.log(x6);

let x7 = document.querySelector(".element");
console.log(x7);

let x8 = document.querySelectorAll("div");
console.log(x8);

let x9 = document.querySelectorAll("#elzero");
console.log(x9);

let x10 = document.querySelectorAll(".element");
console.log(x10);

let x11 = document.querySelectorAll("[name='js']")[0];
console.log(x11);

let x12 = document.getElementsByName("js");
console.log(x12);

let x13 = document.children[0];
console.log(x13);

let x14 = document.childNodes[1];
console.log(x14);

let x15 = document.firstElementChild;
console.log(x15);
