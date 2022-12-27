/* 
  scroll
  - scrollHeight
  - scrollWidth
  - scrollLeft
  - scrollTop
  - scrollIntoView()
  - clientHeight
  - clientWidth
  - clientTop
  - clientLeft
  
*/

/*TODO
  [x] DONE
  [x] NO 
 */

/* >>>>>>>>>>[offsetHeight]<<<<<<<<<< */
const main = document.querySelector("main");
const mainText = document.querySelector("main .offsetHeight p");
const section = document.querySelector("section");
const sectionText = document.querySelector("section .offsetHeight p");
const mainText1 = document.querySelector("main .offsetWidth p");
const sectionText1 = document.querySelector("section .offsetWidth p");

console.log(`scrollHeight: ${document.documentElement.scrollHeight}`);
console.log(`scrollWidth: ${document.documentElement.scrollWidth}`);
console.log(`scrollY: ${window.scrollY}`);
console.log(`scrollX: ${window.scrollX}`);
console.log(`scrollLeft: ${main.scrollLeft}`);
console.log(`scrollLeft: ${main.scrollIntoView()}`);
