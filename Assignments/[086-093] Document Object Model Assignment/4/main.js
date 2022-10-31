//First Solution
/* 
let one = document.querySelector(".one");
let two = document.querySelector(".two");

one.title = two.title;
one.innerHTML = two.innerHTML.toUpperCase();

two.title = two.className;
two.innerHTML = `${two.className} 2`;
 */

// Another Solution
let one = document.querySelector(".one");
let two = document.querySelector(".two");

let tOne = (one.title = two.title);
let tTwo = (two.title = two.className);

let txtOne = one.innerHTML; // Save The Initial Formating Of Text
let txtTwo = two.innerHTML; // Doing This Mehtod To Save The Initial Formats

one.innerHTML = txtTwo;
two.innerHTML = txtOne;
