const btn = document.getElementById("btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const logoImg = document.getElementById("logo-img");
const fullLogo = document.getElementById("full-logo");
function currentTheme() {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {

    document.body.classList.add("dark-theme");
    console.log("dark")
    logoImg.src = "src/assets/img/logo/logo-dark-style.png";
    fullLogo.src ="src/assets/img/logo/full-logo-dark-style.png";



  } else if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    console.log("light")
    logoImg.src = "src/assets/img/logo/logo-light1.png";
    fullLogo.src ="src/assets/img/logo/full-logo-light-style.png";



  } else if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
    console.log("dark1")
    logoImg.src = "src/assets/img/logo/logo-dark-style.png";
    fullLogo.src ="src/assets/img/logo/full-logo-dark-style.png";
  }
}

currentTheme()

btn.addEventListener("click", function () {
  if (document.body.classList.contains("dark-theme") || document.body.classList.contains("light-theme")) {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
   
  } else {
    if (prefersDarkScheme.matches) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.add("dark-theme");
    }
  }

  var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  console.log(theme);
  logoImg.src = theme === "dark" ? "src/assets/img/logo/logo-dark-style.png" : "/src/assets/img/logo/logo-light1.png";
  fullLogo.src = theme === "dark" ? "src/assets/img/logo/full-logo-dark-style.png" : "/src/assets/img/logo/full-logo-light-style.png";
});