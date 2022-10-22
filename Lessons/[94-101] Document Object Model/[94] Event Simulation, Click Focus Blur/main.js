let ele = document.getElementsByName("elements")[0];
let txt = document.getElementsByName("texts")[0];
let cr = document.getElementsByName("create")[0];
console.log(txt);

window.onload = function () {
  ele.focus();
};
txt.onblur = function () {
  document.links[0].click();
};
