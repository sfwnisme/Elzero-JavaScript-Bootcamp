// Assignment Two

// First Solution
/* 
let leng = document.getElementsByTagName("img");
console.log(leng);

for (let i = 0; i < leng.length; i++) {
	let elzeroLogo = document.getElementsByTagName("img")[i];
	elzeroLogo.setAttribute(
		"src",
		"https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
	);
	elzeroLogo.alt = "Elzero";
}
 */

//Another Solution
let Logo = document.images;

for (let i = 0; i < Logo.length; i++) {
  Logo[i].alt = "Elzero";
  Logo[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
}
