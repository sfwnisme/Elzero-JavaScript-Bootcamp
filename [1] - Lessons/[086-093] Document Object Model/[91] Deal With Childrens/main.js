/* 
	DOM [Deal With Childrens]
	- children
	- childNodes
	- firstChild
	- lastChild
	- firstElementChild
	- lastElementChild
*/

let myElement = document.querySelector("div");

console.log(myElement);
console.log(myElement.children); // .children Outputs Only Elements Not Including Comments
console.log(myElement.children[1]);
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);

// It Always Give The First Child What Ever Its Kind Comment, Tage, And Elements All Above Are Accepted
console.log(myElement.firstChild);
console.log(myElement.lastChild);

// The Rest Methods Give Only Childrens Elements Not Texts That Out Of Childres

console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);
