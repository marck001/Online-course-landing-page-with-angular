const toggle = document.querySelector("#menu-icon");
const menu = document.querySelector(".header-content");
const row2 = document.querySelector(".hidden");

function toggleNavMenu() {
    if (menu.classList.contains("active") && row2.classList.contains("active")) {
        menu.classList.remove("active");
        row2.classList.remove("active");
        toggle.innerHTML = "<i class='fa-solid fa-bars'></i>";
    } else {
        menu.classList.add("active");
        row2.classList.add("active");
        toggle.innerHTML = "<i class='fa-solid fa-times'></i>";
    }
}


toggle.addEventListener("click", toggleNavMenu, false);


const items = document.querySelectorAll(".dropdown");

function toggleItem(event) {
    event.stopPropagation();

    items.forEach(item => {
        if (item !== this) {
            item.classList.remove("dropdown-content-active");
        }
    });

    this.classList.toggle("dropdown-content-active");
}


items.forEach(item => {
    item.addEventListener("click", toggleItem);
});


function closeDropDown(event) {
    if (!event.target.closest(".dropdown-content") && !event.target.closest(".dropdown")) {
        items.forEach(item => {
            item.classList.remove("dropdown-content-active");
        });
    }
}

document.addEventListener("click", closeDropDown);