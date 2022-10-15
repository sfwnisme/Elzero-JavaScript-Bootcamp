/* 
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key
  
  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

let test = document.querySelector(".name");
test.onblur = function () {
  window.sessionStorage.setItem("userName", this.value); // Will Be saved on sesstion storage
};
