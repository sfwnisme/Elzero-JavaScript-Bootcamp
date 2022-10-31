// Declaring Variables
const currEle = document.querySelector("div[title=Current]");
const classesDiv = document.querySelector(".classes-list div");
const addClass = document.querySelector(".classes-to-add");
const remClass = document.querySelector(".classes-to-remove");
console.log(currEle);
// Function To Print All Elemtn Classes

function classL(element, result) {
	if (element.classList.value === "") {
		result.innerHTML = "No Classes To Show";
	} else {
		element.classList.value
			.split(" ") // classes => array
			.sort() // sort by alphabets
			// map to access every element in the array
			.map(a => {
				//creating <span> to append the classes[array element] in it
				let span = document.createElement("span");
				//including every array element in a span by adding [a=> the parameter]
				span.innerHTML = a;
				//append span to [result] to launch it on DOM
				result.appendChild(span);
			});
	}
}
// element => currEle // result => classesDiv
// you will not see any change because still not added EVENT
classL(currEle, classesDiv);

// Add Classes
//add blur event to start the idea of the challenge
addClass.onblur = function () {
	//insert addClass.value in a variable
	//.trim() => avoid any space
	//.toLowerCase => small letters
	//.split(" ") => convert it to array
	let wordsAdd = addClass.value.trim().toLowerCase().split(" ");
	//start looping [wordsAdd] to access every element in the array using its length
	for (let i = 0; i < wordsAdd.length; i++) {
		//adding every element in the array [wordsAdd => addClass.value] to [currEle.classList]
		// currEle.classList.value = "";  //>>>>>>>>>>>>>>>>>>>>>>>>>>>
		currEle.classList.add(wordsAdd[i]);
	}

	// empty the input to clean onblur => not effectible on the process
	addClass.value = "";
	//after looping it iterated the classes of currEle, but to avoid it we should empty the of [classesDiv.innerHTML]
	classesDiv.innerHTML = "";
	//apply the function to this event [onblur => function will work]
	classL(currEle, classesDiv);
};

// Add Classes
// start removing event
remClass.onblur = function () {
	/* --THE SAME WE DID ON addClass event */
	// inset remClass in a variable to convert it into array that will allow us looping it
	let wordsRemove = remClass.value.trim().toLowerCase().split(" ");
	// looping wordsRemove array to access every element
	for (let i = 0; i < wordsRemove.length; i++) {
		//remove the class from currEle
		/* remove class in [currEle.classList.value] => it will check
     if remove(wordsRemove[i]) is 
     the same as currEle.classList.value it will remove the class */
		// currEle.classList.value = ""; // will remove all the added classes
		currEle.classList.remove(wordsRemove[i]);
	}
	remClass.value = "";
	// it will stop repeating the previous classes BUG
	classesDiv.innerHTML = "";
	classL(currEle, classesDiv);
};
