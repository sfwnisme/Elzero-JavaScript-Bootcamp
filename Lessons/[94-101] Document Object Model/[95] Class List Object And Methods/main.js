/* 
	DOM [Class List]
	- classList
	--- length // The Class Length
	--- contains // Boolean Value
	--- item(index) // Add The Index Of The Class To Got It
	--- add // Adding New Class Or More
	--- remove // Remove Class Or More
	--- toggle // Remove Class If It Launched Before Or Adding If It's Not Added Before
*/

let element = document.getElementById("my-div");
console.log(element.classList);
console.log(element.classList.length); // Classess Length
console.log(element.classList.contains("show")); // Boolean Value
console.log(element.classList.item("2")); // Select The Index Get The Class
console.log(element.classList.item("9")); // Out Range Index Give "null"
console.log(typeof element.classList); // Type Is Object

element.onclick = function () {
  element.classList.add("addingClass");
};
