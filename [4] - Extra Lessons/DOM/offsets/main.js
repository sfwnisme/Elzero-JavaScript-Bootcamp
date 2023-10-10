/* 
  offset
  - offsetHeight
  - offsetWidth
  - offsetParent
  - offsetTop

  Outer
  - outerText
  - outerHTML
*/
/* >>>>>>>>>>[offsetHeight]<<<<<<<<<< */
// The 'HTMLElement.offsetHeight' read-only property returns the height of an element, including vertical padding and borders, as an integer.
// ther result will be in pixel
const main = document.querySelector("main");
const mainText = document.querySelector("main .offsetHeight p");
const section = document.querySelector("section");
const sectionText = document.querySelector("section .offsetHeight p");
mainText.innerHTML = main.offsetHeight;
sectionText.innerHTML = section.offsetHeight;

/* >>>>>>>>>>[offsetWidth]<<<<<<<<<< */
const mainText1 = document.querySelector("main .offsetWidth p");
const sectionText1 = document.querySelector("section .offsetWidth p");
mainText1.innerHTML = main.offsetWidth;
sectionText1.innerHTML = section.offsetWidth;

/* >>>>>>>>>>[offsetParent]<<<<<<<<<< */
// The HTMLElement.offsetParent read-only property returns a reference to the element which is the closest (nearest in the containment hierarchy) positioned ancestor element.
console.log(main.offsetParent);

/* >>>>>>>>>>[offsetTop]<<<<<<<<<< */
// result the the first appear position of the element
// result in pixel
console.log(section.offsetTop);

/* >>>>>>>>>>[outerText]<<<<<<<<<< */
// ==> string
// output the texts of the element you select and its children
console.log(section.outerText);

/* >>>>>>>>>>[outerHTML]<<<<<<<<<< */
// ==> string
// output the html tags and texts of the elements and its children
console.log(section.outerHTML);

/* ==========[live test]========== */

// for checking live
window.addEventListener("resize", function () {
  /* >>>>>>>>>>[offsetHeight]<<<<<<<<<< */
  mainText.innerHTML = main.offsetHeight;
  sectionText.innerHTML = section.offsetHeight;

  /* >>>>>>>>>>[offsetWidth]<<<<<<<<<< */
  mainText1.innerHTML = main.offsetWidth;
  sectionText1.innerHTML = section.offsetWidth;
});