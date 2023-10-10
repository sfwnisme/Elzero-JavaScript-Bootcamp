/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options) // support on safari
  - scroll(x, y || Options) // Not support on safari
  - scrollBy(x, y || Options) // Adding scroll value to the current value
*/

// Stop()
// window.stop(); // => Stop loading the page

// print()
// window.print(); // Print the page

// let myNewWindow = window.open("https://elzero.org", "", "width=400,height=400");

// myNewWindow.close(); // close the opend window
// myNewWindow.focus() // will focus on the opend

//scroll & scrollTow

// Redirect you to a specific position on the screen you can use y & x

// scroll(200, 200); // The first way
window.scroll({
  left: 1300,
  top: 1300,
  behavior: 'smooth'
}); // We can use also this way
// scrollBy(200, 500);
// scrollBy(200, 500);
