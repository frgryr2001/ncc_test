const wrapper = document.querySelector(".wrapper");
const btn__hamburger = document.querySelector(".hamburger-menu");
btn__hamburger.addEventListener("click", function () {
  console.log("click");
  wrapper.classList.toggle("nav-open");
});
