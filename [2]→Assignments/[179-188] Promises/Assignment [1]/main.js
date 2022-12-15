function p(api) {
  return new Promise((res, rej) => {
    let xml = new XMLHttpRequest();
    xml.open("GET", api);
    xml.send();
    xml.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        let obj = JSON.parse(this.responseText);
        res(obj);
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
            document.body.append(div);
          }
          dom();
        }
      } else {
        rej(Error("not working"));
      }
    };
  });
}
p("./articles.json")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
