

window.onscroll = function() {scrollBar()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function scrollBar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

