for (let i = 0; i < 100; i++) {
  let parent = document.createElement("div");
  let child = document.createElement("h3");
  let child0 = document.createElement("p");
  let childText = document.createTextNode(`Product [${i + true}]`);
  let child0Text = document.createTextNode(`Beauty Symples For Face And Body`);

  // parent Class
  parent.className = "product";

  //Append Childs
  parent.appendChild(child);
  parent.appendChild(child0);

  //Append Childs Texts
  child.appendChild(childText);
  child0.appendChild(child0Text);

  // Append Main Parnet
  document.body.appendChild(parent);
}
