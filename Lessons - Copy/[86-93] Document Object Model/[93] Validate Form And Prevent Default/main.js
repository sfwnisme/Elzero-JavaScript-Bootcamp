/* 
	DOM [Events]
	- Validate Form Practice
	- Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onclick = function (e) {
  let userValid = false;
  let ageValid = false;

  console.log(userInput.value);
  console.log(userInput.value.length);

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault(); // If The Forms Are Empty Do Not Submit
  }
};

document.links[0].onclick = function (event) {
  console.log(event); // Using Parameter Allow You Getting Event's Info
  event.preventDefault(); // To Stop The Function Of The Event OR Element
};
