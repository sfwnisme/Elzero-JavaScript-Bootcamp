let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");
console.log(lis);

if (window.localStorage.getItem("color")) {
  lis.forEach((e) => {
    e.classList.remove("active");
  });
  exp.style.backgroundColor = window.localStorage.getItem("color");
  document
    .querySelector(`[data-color= ${window.localStorage.getItem("color")}]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // target define the selected element
    e.target.classList.add("active"); // If we wrote the code without .target or .currentTarget it will not work
    // console.log(e.currentTarget);
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    exp.style.backgroundColor = window.localStorage.getItem("color");
  });
});
