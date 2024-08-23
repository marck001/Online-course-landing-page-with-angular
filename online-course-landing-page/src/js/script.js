

window.onscroll = function() {scrollBar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scrollBar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

scrollBar();