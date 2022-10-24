let text = document.querySelector(".text");
let email = document.querySelector(".email");
let search = document.querySelector(".search");
let inputs = document.querySelectorAll("input");
let select = document.querySelector("select");
console.log(inputs);

window.onload = () => {
  getting();
};

text.oninput = () => {
  window.sessionStorage.setItem("text", text.value);
  getting();
};

email.oninput = () => {
  window.sessionStorage.email = email.value;
  getting();
};

search.oninput = () => {
  window.sessionStorage.search = search.value;
  getting();
};

select.oninput = () => {
  window.sessionStorage.select = select.value;
  getting();
};

window.onload = () => {
  window.sessionStorage.text ? (text.value = window.sessionStorage.text) : "";
  window.sessionStorage.email
    ? (email.value = window.sessionStorage.email)
    : "";
  window.sessionStorage.search
    ? (search.value = window.sessionStorage.search)
    : "";
  window.sessionStorage.select
    ? (select.value = window.sessionStorage.select)
    : "";
};
