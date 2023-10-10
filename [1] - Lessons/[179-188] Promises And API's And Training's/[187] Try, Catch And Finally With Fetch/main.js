/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

/* ===============[Promise Regular Way]=============== */
function first() {
  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Call Of Duty video Games111");
    }, 3999);
  });

  function rend() {
    console.log("Before");
    prom.then((result) => console.log(result));
    console.log("After");
  }

  rend();
}

first();

/* ===============[Promise Await Way]=============== */
function second() {
  const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Call Of Duty video Games222");
    }, 3999);
  });

  async function rend2() {
    console.log("Before");
    console.log(await prom2);
    console.log("After");
  }

  rend2();
}

second();
