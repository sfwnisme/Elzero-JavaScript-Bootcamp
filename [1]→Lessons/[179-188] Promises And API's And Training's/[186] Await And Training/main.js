/*
  Async & Await With Try, Catch, Finally
*/

/* ===============[Promise With Try Way]=============== */
function first() {
  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Call Of Duty video Games111");
    }, 3999);
  });

  function rend() {
    console.log("Before");
    try {
      prom.then((result) => console.log(result));
    } catch (reason) {
      console.log(reason);
    } finally {
      console.log("After");
    }
  }

  rend();
}

// first();

/* ===============[Promise Async And Await With Try Way]=============== */
function second() {
  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Call Of Duty video Games111");
      reject("BaDDDDDD");
    }, 3999);
  });

  async function rend() {
    console.log("Before");
    try {
      console.log(await prom);
    } catch (reason) {
      console.log("noooooo" + reason);
    } finally {
      console.log("After");
    }
  }

  rend();
}

// second();

/* ===============[Promise Async And Await With Try Way]=============== */
function third() {
  async function rend() {
    console.log("Before");
    try {
      const fet = await fetch("https://api.github.com/users/sfwnisme/repos");
      console.log(await fet.json()); // you must add .json() otherwise fetch will not accept 'await'
    } catch (reason) {
      console.log(reason);
    } finally {
      console.log("After");
    }
  }

  rend();
}

third();
