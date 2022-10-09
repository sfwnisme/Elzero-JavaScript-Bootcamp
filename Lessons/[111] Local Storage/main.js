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
window.localStorage.setItem("color", "#f00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// getItem
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);
let changeBackgroundColor = window.localStorage.getItem("color");

// Set color on the page
document.body.style.backgroundColor = changeBackgroundColor;
