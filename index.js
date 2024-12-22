const showAboutPage = document.querySelector(".about");
const aboutBtn = document.querySelector(".aboutBtn ");
const aboutClosebtn = document.querySelector(".aboutClosebtn ");

aboutBtn.addEventListener("click", (e) => {
  showAboutPage.style.display = "block";
});
aboutClosebtn.addEventListener("click", (e) => {
  showAboutPage.style.display = "none";
});
