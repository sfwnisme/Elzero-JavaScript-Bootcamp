/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/


let start = new Date();

for(let i = 0 ; i < 3000; i++) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.append(div);

}
let end = new Date();
let dur = end - start;
console.log(dur);
console.log(performance.now());