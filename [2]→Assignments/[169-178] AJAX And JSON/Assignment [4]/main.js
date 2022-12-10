let req = new XMLHttpRequest();
req.open("GET", "../Assignment [1]/articles.json");
req.send();
console.log(req);

req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log("--------------------------");
    let reqToJs = JSON.parse(this.responseText);
    for (let i = 0; i < reqToJs.length; i++) {
      reqToJs[i].category = "All";
      console.log(reqToJs[i].category); // testing
    }
    console.log(reqToJs);
  }
};
