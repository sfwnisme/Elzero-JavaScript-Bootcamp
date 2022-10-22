/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

/* 
NOTES
- currentTarget =>
--- currentTarget outputs the current selected element 
--- let lis = document.querySelectorAll("ul li");
------ the currentTarget is li
- target
--- the same as currentTarget function
- dataset 
--- dataset give you info of data attribute in your element
--- <h1 data-color="red">Hello</h1> => [data-color="red"] 
------ dataset is "data"
------ type of dataset is "-color"
------ value of dataset is "red"
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");
console.log(exp);

// window.localStorage.clear();
if (window.localStorage.getItem("color")) {
  // If there is color in localStorage
  //[1] Add color to div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  //[2] Remove active class
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add active class to li
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
} else {
  console.log("no");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.target.dataset.color);
    // li.classList.remove("active"); // here will only remove active class if clicked on the element that has this class
    // Remove Active Class From All Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active class to current element
    e.target.classList.add("active");
    // Add current color to local storage
    window.localStorage.setItem("color", e.target.dataset.color);
    // Change div background-color
    exp.style.backgroundColor = window.localStorage.getItem("color");
  });
});
