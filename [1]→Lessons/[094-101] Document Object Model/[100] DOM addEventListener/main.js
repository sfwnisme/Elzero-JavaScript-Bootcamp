/* 
    DOM [Add Event Listener]
    - addEventListener
    - Use Without On => onclick => click
    - Attach Multiple Events
    - Error Test // ACCEPT ONLY FUNCTION AND OBJECT
    
    Search
    - Capture & Bubbling JavaScript
    - removeEventListener
*/

let myP = document.querySelector("p");

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = `clone`;
  document.body.appendChild(newP);
};
// let cloned = document.querySelector(".clone"); // error

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log(`I'm Cloned With Classname`);
  }
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("clone")) {
    console.log(`I'm Cloned With Classlist`);
  }
});
// myP.onclick = function () {
//   console.log("Massage From OnClick");
// };

// myP.onclick = one;
// myP.onclick = two; // this will over write one if we used the regular method

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // error // Accept Only js function or objects
