const div = document.querySelector(".our-element");
const p = document.querySelector("p");

console.log(div);

//remove p
p.remove();

//Before
let beforeDiv = document.createElement("div");
beforeDiv.className = "start";
beforeDiv.title = "Start Element";
beforeDiv.setAttribute("data-value", "Start");
beforeDiv.innerText = beforeDiv.getAttribute("data-value");
div.before(beforeDiv);
console.log(beforeDiv);

let afterDiv = document.createElement("div");
afterDiv.classList.add("end");
afterDiv.setAttribute("title", "End Element");
afterDiv.setAttribute("data-value", "End");
afterDiv.textContent = afterDiv.getAttribute("data-value");
div.after(afterDiv);
