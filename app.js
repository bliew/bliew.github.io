const menu = document.getElementById("menu-button");
const mobileMenu = document.querySelector("ul");

//function to see if menu button was clicked
function toggleMobileMenu() {
  mobileMenu.classList.toggle("open");
}

//function to see if surrounding area was clicked
function isClickInsideNavbar(e) {
  return menu.contains(e.target) || mobileMenu.contains(e.target);
}

menu.addEventListener("click", toggleMobileMenu);

document.addEventListener("click", (e) => {
  if (!isClickInsideNavbar(e) && mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
  }
});

//close mobile menu if link is clicked
mobileMenu.addEventListener("click", (e) => {
  if (e.target.tagName == "A") {
    mobileMenu.classList.remove("open");
  }
});
