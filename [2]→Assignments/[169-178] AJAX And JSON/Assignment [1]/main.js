//Assignment 2
let req = new XMLHttpRequest();
req.open("GET", "articles.json");
req.send();
console.log(req);

req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    console.log(mainData);
    console.log("Data Loaded");
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category = "All";
      console.log(mainData[i].category); // testing
    }
    console.log("#".repeat(50)); // separator
    console.log(mainData);
    console.log("#".repeat(50)); // separator
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};
