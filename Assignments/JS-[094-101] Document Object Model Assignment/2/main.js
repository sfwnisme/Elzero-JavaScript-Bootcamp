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
      .split(" ")
      .sort()
      .map((a) => {
        let span = document.createElement("span");
        span.innerHTML = a;
        result.appendChild(span);
      });
  }
}

classL(currEle, classesDiv);

// Add Classes
addClass.onblur = function () {
  let wordsAdd = addClass.value.trim().toLowerCase().split(" ");
  for (let i = 0; i < wordsAdd.length; i++) {
    currEle.classList.add(wordsAdd[i]);
  }
  addClass.value = "";
  classesDiv.innerHTML = "";
  classL(currEle, classesDiv);
};

// Add Classes
remClass.onblur = function () {
  let wordsAdd = remClass.value.trim().toLowerCase().split(" ");
  for (let i = 0; i < wordsAdd.length; i++) {
    currEle.classList.remove(wordsAdd[i]);
  }
  remClass.value = "";
  classesDiv.innerHTML = "";
  classL(currEle, classesDiv);
};
