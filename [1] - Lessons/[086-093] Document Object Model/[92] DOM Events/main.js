/* 
	DOM [Events]
	- Use Events ON HTML
	- Use Events On JS
	--- onclick
	--- oncontextmenu // The Options Menu You Can Customize It like Google Drive When Click Right Button The Option Menu Appears
	--- onmouseenter // Like :hover On CSS
	--- onmouseleave // Like :hover On CSS But When The Mouse Leave The Element

	--- onload 
	--- onscroll 
	--- onresize 

	// Watch The Lesson Not Explainable Here :)
	--- onfocus  
	--- onblur  
	--- onsubmit  
*/

let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
  console.log("onclick");
};

myBtn.onmouseenter = function () {
  console.log("onmouseenter");
};
myBtn.onmouseleave = function () {
  console.log("onmouseleave");
};

window.onscroll = function () {
  console.log("Scroll"); // On Scrolling It Will Write This On Console
};

window.onresize = function () {
  console.log("onresize"); // On Resizing The View Port Will Got The Resoult
};
