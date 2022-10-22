// Genenral Style
document.body.style.cssText =
  "margin: 0; padding: 0; box-sizing: border-box; font-family: arial";

/* Start Header */

let header = document.createElement("header");
let logo = document.createElement("h1");
logo.innerHTML = "Elzero";
logo.style.cssText = "color: #099155; margin: 0";
header.appendChild(logo);
header.style.cssText =
  "display: flex; justify-content: space-between; align-items: center; padding: 20px";

// links
let ul = document.createElement("ul");
let arr = ["Home", "About", "Services", "Contact"];
for (let i = 0; i < arr.length; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.href = "https://google.com";
  a.innerHTML = arr[i];
  a.style.cssText = "text-decoration: none; color:darkblue;";
  li.appendChild(a);
  li.style.cssText = "list-style: none";
  ul.append(li);
  header.appendChild(ul);
  ul.style.cssText =
    "display: flex; jsutify-content: center; align-items: center; gap: 20px; list-style: none;";
}

document.body.appendChild(header);
//Styling

/* End Header */

/* Start Main */

// Main
let main = document.createElement("main");
main.style.cssText =
  "background-color: #ddd;padding: 20px; display: grid; grid-template-columns: repeat(auto-fill, minmax(min(clamp(300px, 20vw,400px)),1fr)); gap: 10px";

// Content Box
for (let i = 1; i <= 15; i++) {
  // Content Box
  let contentBox = document.createElement("section");
  contentBox.style.cssText =
    "background-color: #fff; padding: 20px;display:flex; flex-direction:column; justify-content: center; align-items: center; text-align: center; border-radius: 5px; border: 1px solid #9999;";
  main.appendChild(contentBox);
  let numContainer = document.createElement("h2");
  let num = document.createTextNode(i);
  numContainer.appendChild(num);
  numContainer.style.cssText = "margin: 0 0 10px; font-weight: 500;";
  contentBox.appendChild(numContainer);

  //Title
  let title = document.createElement("p");
  title.innerHTML = "product";
  title.style.cssText = "margin: 0; font-size: 12px; color: #aaa";
  contentBox.appendChild(title);
}

document.body.appendChild(main);
/* End Main */

/* Start Footer */
//Footer
let footer = document.createElement("footer");
footer.style.cssText =
  "padding: 10px; background-color: #099155; text-align: center";

// Right Text
let copyRight = document.createElement("p");
let copyRightText = document.createTextNode("Copyright 2022");
copyRight.style.cssText = "font-size: 20px; color: white; margin: 0;";
copyRight.appendChild(copyRightText);
footer.appendChild(copyRight);

document.body.appendChild(footer);

/* End Footer */
