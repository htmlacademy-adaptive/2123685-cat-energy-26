document.querySelector(".header-nav").classList.add("header-nav--js");
document.querySelector(".header-nav__toggle").addEventListener("click", function(){
  document.querySelector(".header-nav").classList.toggle("header-nav--open")
});
document.querySelector(".slider__handle").addEventListener("click", function(){
  document.querySelector(".slider").classList.remove("slider--demo");
  document.querySelector(".slider").classList.toggle("slider--before");
});
