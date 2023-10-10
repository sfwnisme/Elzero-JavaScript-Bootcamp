/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/
console.log(document.getElementsByTagName("p")[0].attributes); // For Checking The Available Attributes
let myP = document.getElementsByTagName("p")[0];
if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log("Not Found");
}

if (myP.hasAttributes()) {
  console.log("Has Attributes");
} else {
  console.log("Not Has");
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log("Has Attributes");
} else {
  console.log("NOt Has");
}
