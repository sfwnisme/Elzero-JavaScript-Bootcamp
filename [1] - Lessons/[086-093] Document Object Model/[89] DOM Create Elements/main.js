/* 
 Dom [Create Elements]
 - createElement
 - createComment
 - createTextNode
 - createAttribute
 - appendChild
*/

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myAttr2 = document.createAttribute("details");
// let myText = document.createTextNode("Product One");

// myElement.className = "Product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttributeNode(myAttr2);
// myElement.appendChild(myText);
// myElement.appendChild(document.createTextNode("hhhhhh"));

// console.log(myElement);
// document.body.appendChild(myElement);

let myEle = document.createElement("div");
let myAtr = document.createAttribute("data");
let myText = document.createTextNode("Product One");
let myCom = document.createComment("this Is Practicing");

myEle.className = "name";
myEle.id = "element";

myEle.setAttributeNode(myAtr);

myEle.setAttribute("title", "div");

//Append Text To The Element
myEle.appendChild(myText);

// Append Comment To Element
myEle.appendChild(myCom);

// Append The Element To Body
document.body.appendChild(myEle);

console.log(myEle);
