let text = document.querySelector(".text");
let email = document.querySelector(".email");
let search = document.querySelector(".search");
let inputs = document.querySelectorAll("input");
let select = document.querySelector("select");
console.log(inputs);

text.oninput = () => {
  window.sessionStorage.setItem("text", text.value);
  sessionFunc();
};

email.oninput = () => {
  window.sessionStorage.setItem("email", email.value);
  sessionFunc();
};

search.oninput = () => {
  window.sessionStorage.setItem("search", search.value);
  sessionFunc();
};

select.oninput = () => {
  window.sessionStorage.setItem("select", select.value);
  sessionFunc();
};

function sessionFunc() {
  window.sessionStorage.text
    ? (text.value = window.sessionStorage.text)
    : (text.value = "");
  window.sessionStorage.email
    ? (email.value = window.sessionStorage.email)
    : (email.value = "");
  window.sessionStorage.search
    ? (search.value = window.sessionStorage.search)
    : (search.value = "");
  window.sessionStorage.select
    ? (select.value = window.sessionStorage.select)
    : (select.value = "");
}

// sessionFunc() ? sessionFunc() : "";

window.onload = () => {
  sessionFunc();
};
