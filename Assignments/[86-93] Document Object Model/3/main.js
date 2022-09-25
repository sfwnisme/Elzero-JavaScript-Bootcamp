//First Solution
/* 
let counter = document.querySelector("[name='dollar']");
let usd = document.querySelector(".usd");
let egy = document.querySelector(".egy");
// console.log(egy);

counter.oninput = function () {
	counterValue = counter.value;
	usd.textContent = counterValue;
	egy.textContent = (counterValue * 15.6).toFixed(2);
};

document.forms[0].onsubmit = function (e) {
	e.preventDefault();
};

counter.onkeydown = e => {
	if (["-", "+", "e"].includes(e.key)) e.preventDefault();
};
*/

// Another Solution
/* 
let counter = document.querySelector("input");
let result = document.querySelector(".result");

document.forms[0].oninput = function () {
	// counter.innerHTML = counter.value;
	result.innerHTML = `{${counter.value}} USD Dollar = {${(
		counter.value * 15.6
	).toFixed(2)}} Egyptian Pound`;
}; 
*/

// Another Solution

let counter = document.querySelector("input");
let result = document.querySelector(".result");

counter.oninput = function () {
  result.innerHTML = `{${counter.value}} USD Dollar = {${(
    counter.value * 15.6
  ).toFixed(2)}} Egyptian Pound`;
};
