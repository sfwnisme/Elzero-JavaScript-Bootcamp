/* 
	DOM [Traversing]
	- nextSibling // Any Wrote Line After The Selected Sibling COMMENT, TEXT OR EVEN ELEMENT
	- previousSibling // Any Wrote Line Before The Selected Sibling
	- nextelementSibling // The Next Element After The Selected Sibling NOT ACCEPT ANY TEXT OR COMMENT
	- previusElementSibling // The Previous Element
	- parentElement // The Parent Of The Element
	*/

let span = document.querySelector(".two");

console.log(span.nextSibling); // Result => comment
console.log(span.previousSibling); // Result => comment
console.log(span.nextElementSibling); // Result => Element
console.log(span.previousElementSibling); // Result => Element
console.log(span.parentElement); // Result => parent
