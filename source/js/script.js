document.querySelector(".header-nav").classList.add("header-nav--js");
document.querySelector(".header-nav__toggle").addEventListener("click", function(){
  document.querySelector(".header-nav").classList.toggle("header-nav--open")
})
