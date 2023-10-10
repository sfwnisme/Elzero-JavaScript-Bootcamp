/* 
	DOM [Traversing]
	- cloneNode (Deep)
*/

// False And Empty Clone Value
let falseClone = document.querySelector("p").cloneNode(); // We Used Empty=>[false] Clone Value That Returns The Clone Without Text Or Child Elements
let myDiv = document.querySelector("div");

falseClone.id = `${falseClone.id}-false-clone`; // Updating The Id
myDiv.appendChild(falseClone);

// True Clone Value

let trueClone = document.getElementById("my-p").cloneNode(true); // True Clone Value Returns The Cloned Element With What It Containes
let myH1 = document.getElementsByTagName("h1")[0];

trueClone.id = `${trueClone.id}-true-clone`; // Updating Id
myH1.appendChild(trueClone);
