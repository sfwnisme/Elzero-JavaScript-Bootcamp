let set = setTimeout(function () {
  console.log("hey");
}, 1000);

/* 
structure 
  setTimeout(function,Time In milliseconds)
*/
let btn = document.createElement("button");
btn.innerText = "Button";
document.body.append(btn);

btn.onclick = function () {
  clearTimeout(set);
};
