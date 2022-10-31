let main = document.querySelector("main");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let div = document.querySelector("div");

window.onload = () => {
  setTimeout(() => {
    main.style.display = "block";
  }, 3000);
};
div.addEventListener("click", () => {
  main.style.display = "none";
});

console.log(div);
