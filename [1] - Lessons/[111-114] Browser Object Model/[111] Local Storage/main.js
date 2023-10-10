/* 
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key
  
  info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Local Storage // => A property on the window allow you to access storage objects
console.log(window.localStorage);
console.log(typeof window.localStorage);

// setItem => Adding the properties
window.localStorage.setItem("color", "#000");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// getItem
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// removeItem = remove a single key value
// window.localStorage.removeItem("color"); // it must be before the getItem like the backgroundColor

// clean => remove all key values
// window.localStorage.clear();

// Set color on page
// All this ways working
// document.body.style.backgroundColor = window.localStorage.getItem("color");
// document.body.style.backgroundColor = window.localStorage.color;
document.body.style.backgroundColor = window.localStorage["color"];

// key => Get the key the index of it
console.log(window.localStorage.key(1)); // value = color
