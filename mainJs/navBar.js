
const navBar = document.createElement('nav');
navBar.innerHTML = ` <div class="container nav_container">
<a href="index.html"> <h4>School</h4> </a>
<menu class="nav_menu">
  <li class="nav_menu__close">
    <a class="active_link" href="index.html"> Home </a>
  </li>
  <li>
    <a href="about.html"> About </a>
  </li>
  <li>
    <a href="courses.html"> Courses </a>
  </li>
  <li>
    <a href="contact.html"> Contact </a>
  </li>
</menu>
<button class="menu__open">
  <i class="uil uil-bars"></i>
</button>
<button  class="menu__close">
  <i class="uil uil-multiply"></i>
</button>
</div>`;

// change navbar styles on scroll

window.addEventListener('scroll', () => {
  navBar.classList.toggle('window__scroll', window.scrollY > 0)
})


const links = navBar.querySelectorAll(".nav_menu a");
links.forEach(link => {
  if (window.location.pathname !== "/") {
    link.classList.remove("active_link");
    if (link.pathname === window.location.pathname) {
      link.classList.add("active_link")
    }
  }

})

// ================== show/close nav menu====================
const navMenu = navBar.querySelector(".nav_menu");
const navMenuOpen = navBar.querySelector(".menu__open");
const navMenuClose = navBar.querySelector(".menu__close");

navMenuOpen.addEventListener("click", () => {
  navMenu.style.display = "flex";
  navMenuClose.style.display = "block";
  navMenuOpen.style.display = "none";
}
)
navMenuClose.addEventListener("click", () => {
  navMenu.style.display = "none";
  navMenuClose.style.display = "none";
  navMenuOpen.style.display = "block";

}
)

document.body.prepend(navBar);