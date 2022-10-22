/* 
	DOM [Deal With Elements]
	- before [Element || String]
	- after [Element || String]
	- append [Element || String]
	- prepend [Element || String]
	- remove // It Remove Element Directlly
*/

let element = document.getElementById("my-div");
let rmv = document.querySelector(".remove");
let createdP = document.createElement("p");

element.before("Hello I'm before Method");
element.after("Hello I'm after Method");
element.before(createdP);
element.after(createdP);

rmv.remove();
