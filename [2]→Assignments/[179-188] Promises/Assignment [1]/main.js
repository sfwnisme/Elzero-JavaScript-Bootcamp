function prom(api) {
  return new Promise((res, rej) => {
    let xml = new XMLHttpRequest();
    xml.open("GET", api);
    xml.send();
    xml.onload = function () {
      if (this.redyState === 4 && this.status === 200) {
        let js = JSON.parse(this.responseText);
        console.log(js)
      }
    };
  });
}

console.log(prom("./articles.json").then((result) => console.log(result)))
