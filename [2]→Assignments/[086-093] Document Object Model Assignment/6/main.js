let num = document.querySelector("[type='number']");
let txt = document.querySelector("[type='text']");
let sel = document.getElementsByName("type")[0];
let sub = document.querySelector("[type='submit']");
let rmv = document.querySelector("[value='Remove']");
let res = document.getElementsByClassName("results")[0];
console.log(res);

sub.onclick = function (e) {
  numValue = num.value;
  txtValue = txt.value;
  selValue = sel.value;
  res.innerHTML = ``;
  res.setAttribute("style", "display: flex; gap: 10px; flex-wrap: wrap;");
  for (i = 0; i < numValue; i++) {
    if (selValue === "Div") {
      let myDiv = document.createElement("div");
      let myDivTxt = document.createTextNode(txtValue);
      myDiv.setAttribute(
        "style",
        "background-color: red; padding:20px 30px; flex-basis: 200px;"
      );
      myDiv.appendChild(myDivTxt);
      myDiv.id = `id-${i}`;
      myDiv.className = `box`;
      myDiv.title = "Element";
      res.appendChild(myDiv);
    } else {
      let mySec = document.createElement("section");
      let mySecTxt = document.createTextNode(txtValue);
      mySecTxt.style = "background-color:red;";
      mySec.appendChild(mySecTxt);
      mySec.id = `id-${i}`;
      mySec.className = `box`;
      mySec.title = "Element";
      res.appendChild(mySec);
    }
  }

  e.preventDefault();
};

//Another Solution
/* 
let num1 = document.getElementsByName("elements")[0];
let txt1 = document.querySelector("[placeholder='Elements Text']");
let sel1 = document.getElementsByTagName("select")[0];
let sub1 = document.querySelectorAll("[value='Create']")[0];
let res1 = document.getElementsByClassName("results")[0];
sub1.onclick = function (e) {
	numValue1 = num1.value;
	txtValue1 = txt1.value;
	selValue1 = sel1.value;

	res1.innerHTML = ``;

	for (let i = 0; i < numValue1; i++) {
		if (selValue1 === "Div") {
			let myDiv1 = document.createElement("div");
			myDiv1.textContent = txtValue1;
			myDiv1.id = `id-${i + 1}`;
			myDiv1.className = `box`;
			myDiv1.title = `Element`;
			res1.appendChild(myDiv1);
		} else {
			let mySec1 = document.createElement("section");
			mySec1.textContent = txtValue1;
			mySec1.id = `id-${i + 1}`;
			mySec1.className = `box`;
			mySec1.title = `Element`;
			res1.appendChild(mySec1);
		}
	}

	e.preventDefault();
};
 */
window.onload = function () {
  num.focus();
};
