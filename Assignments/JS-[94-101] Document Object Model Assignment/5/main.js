let div = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");
console.log(span.tagName.toLowerCase());
let array = [div, span, p, article, section];
for (let i = 0; i < array.length; i++) {
  array[i].addEventListener("click", function () {
    console.log(`This Is ${array[i].tagName.toLowerCase()}`);
  });
}

// Another Solution

/*
let div = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");
console.log(span.tagName.toLowerCase());
let array = [div, span, p, article, section];
for (let i = 0; i < array.length; i++) {
	array[i].addEventListener("click", function () {
		console.log(`This Is ${array[i].tagName.toLowerCase()}`);
	});
}
*/
// Advanced Solution
/*
document.body.onclick = function (e) {
	if (e.target.nodeName != "BODY") {
		console.log(`This Is ${e.target.nodeName.toLowerCase()}`);
	}
}; 
*/
let div1 = document.querySelector("div");
let span1 = document.querySelector("span");
let p1 = document.querySelector("p");
let article1 = document.querySelector("article");
let section1 = document.querySelector("section");
console.log(span.tagName.toLowerCase());
let array1 = [div, span, p, article, section];
for (let i = 0; i < array1.length; i++) {
  array1[i].addEventListener("click", function () {
    console.log(`This Is ${array1[i].tagName.toLowerCase()}`);
  });
}

// Another Solution

/*
let div = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");
console.log(span.tagName.toLowerCase());
let array = [div, span, p, article, section];
for (let i = 0; i < array.length; i++) {
	array[i].addEventListener("click", function () {
		console.log(`This Is ${array[i].tagName.toLowerCase()}`);
	});
}
*/
// Advanced Solution
/*
document.body.onclick = function (e) {
	if (e.target.nodeName != "BODY") {
		console.log(`This Is ${e.target.nodeName.toLowerCase()}`);
	}
}; 
*/
