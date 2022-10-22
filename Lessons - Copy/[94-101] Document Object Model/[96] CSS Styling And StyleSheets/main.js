/* 
	DOM [CSS]
	- style // Normally adding style method then write dot . to use any CSS property. If the CSS property Contains TWO words write it in CAMAL CASE METHOD. Finally you can use only ONE method per function
	- cssText // Allow you using MORE THAN ONE PROPERTY IN A SINGLE FUNCTION
	- removeProperty(propertyName) [Inline, Stylesheet]
	- setProperty(propertyName, value, priority)
*/

let element = document.getElementById("my-div");
console.log(element);

element.style.color = "red";
element.style.backgroundColor = "black";
element.style.cssText =
  "padding: 20px; background-color:black; color: green; display: inline-block";
element.style.removeProperty("color");
element.style.setProperty("color", "white", "important");
document.styleSheets[0].rules[0].style.removeProperty("font-size"); // If you wrote this code in console will got the value of property you RMOVED
document.styleSheets[0].rules[0].style.setProperty(
  "text-decoration",
  "underline"
);
