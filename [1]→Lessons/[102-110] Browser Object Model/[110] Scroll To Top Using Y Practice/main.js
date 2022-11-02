let btn = document.querySelector("button");

window.onscroll = () => {
  if (window.scrollY < 400) {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
  // getting the scrollY value
  if (scrollY > 0) {
    console.log(`${window.scrollY}`);
  }
};

btn.onclick = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
