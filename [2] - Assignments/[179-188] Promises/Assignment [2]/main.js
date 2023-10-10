function first() {
  async function fet(api) {
    let data = await fetch(api);
    let obj = await data.json();
    for (let i = 0; i <= 4; i++) {
      function dom() {
        let div = document.createElement("div");

        //title
        let h3 = document.createElement("h3");
        h3.innerHTML = obj[i].title;

        //descritption
        let p = document.createElement("p");
        p.innerHTML = obj[i].description;

        // body append
        div.append(h3);
        div.append(p);
        document.body.append(div);
      }
      dom();
    }
  }

  fet("./articles.json");
}
first();

function second() {
  async function fet(api) {
    let data = await fetch(api);
    let obj = await data.json();

    for (let i = 0; i <= 4; i++) {
      function dom() {
        let div = document.createElement("div");

        // title
        let h3 = document.createElement("h3");
        h3.innerHTML = obj[i].title;

        // description
        let p = document.createElement("p");
        p.innerHTML = obj[i].description;

        // append to body
        div.append(h3);
        div.append(p);
        document.body.appendChild(div);
      }
      dom();
    }
  }
  fet("./articles.json");
}

second();
