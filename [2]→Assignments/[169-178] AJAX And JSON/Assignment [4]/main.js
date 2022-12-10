let req = new XMLHttpRequest();
req.open("GET", "../Assignment [1]/articles.json");
req.send();
console.log(req);

req.onreadystatechange = function () {
  // this main condition to confirm the rest process
  if (this.readyState === 4 && this.status === 200) {
    // convert to js object for appending process
    // we should convert here by my opinion
    let reqToJs = JSON.parse(this.responseText);

    // looping all the objects properties' values to appending in DOM
    for (let i = 0; i < reqToJs.length; i++) {
      reqToJs[i].category = "All";
      console.log(reqToJs[i].category); // testing
      let parent = document.createElement("div");
      parent.id = "data";

      // child container
      let child = document.createElement("div");

      // child parts
      // id
      let childId = document.createElement("p");
      childId = reqToJs[i].id;

      // title
      let childTitle = document.createElement("h2");
      childTitle.innerHTML = reqToJs[i].title;

      // horizontal separator
      let hr = document.createElement("hr");

      // body
      let childBody = document.createElement("p");
      childBody.innerHTML = reqToJs[i].body;

      // category
      let childCategory = document.createElement("p");
      childCategory.innerHTML = reqToJs[i].category;

      // author
      let childAuthor = document.createElement("p");
      childAuthor.innerHTML = reqToJs[i].author;

      // appending to DOM
      child.append(childId);
      child.append(childTitle);
      child.append(hr);
      child.append(childBody);
      child.append(childCategory);
      child.append(childAuthor);
      parent.append(child);
      document.body.append(parent);
    }
    console.log(reqToJs);
  }
};
