let input = document.querySelector("[data-value=input]");
let submit = document.querySelector("[data-value=submit]");
let ul = document.querySelector("[data-value=ul]");
console.log(submit);

// submit.onclick = submit.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (input.value !== "") {
//     list = document.createElement("li");
//     listText = document.createElement("p");
//     listDelete = document.createElement("button");
//     listText.innerText = input.value;
//     listDelete.innerText = "Delete";
//     list.appendChild(listText);
//     list.appendChild(listDelete);
//     ul.appendChild(list);
//   } else {
//     console.log("Empty");
//   }
//   console.log(list);
//   listDelete.forEach((e) => {
//     e.onclick = function () {
//       list.remove();
//     };
//   });
// });

// console.log(list);

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value !== "") {
    list = document.createElement("li");
    listText = document.createElement("p");
    listDelete = document.createElement("button");
    listText.innerText = input.value;
    listDelete.innerText = "Delete";
    list.appendChild(listText);
    list.appendChild(listDelete);
    ul.appendChild(list);
  } else {
    console.log("Empty");
  }
  console.log(list);
});
