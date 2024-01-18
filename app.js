const menu = document.getElementById("menu-button");
const mobileMenu = document.getElementById("topNav");

//function to see if menu button was clicked
function toggleMobileMenu() {
  console.log("toggle");
  mobileMenu.classList.toggle("open");
}

menu.addEventListener("click", toggleMobileMenu);

// close mobile menu if link is clicked
mobileMenu.addEventListener("click", (e) => {
  if (
    e.target.className == "nav-select" &&
    mobileMenu.classList.contains("open")
  ) {
    mobileMenu.classList.remove("open");
  }
});

//function to see if surrounding area was clicked
function isClickInsideNavbar(e) {
  return menu.contains(e.target) || mobileMenu.contains(e.target);
}

document.addEventListener("click", (e) => {
  if (!isClickInsideNavbar(e) && mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
  }
});
