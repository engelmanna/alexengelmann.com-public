// Responsive Nav
let navtoggle = document.getElementsByClassName('nav-toggle')[0];
let navlinks = document.getElementsByClassName('nav-links')[0];

navtoggle.addEventListener('click', () => {
  navlinks.classList.toggle('active');
  navtoggle.classList.toggle('active');
});

//Navbar color on scroll
let min_scroll_height = 20;
let navbarwrap = document.getElementsByClassName('navbar-wrap')[0];

if (window.scrollY > min_scroll_height) {
  navbarwrap.classList.add('navbar-wrap-shadow');
}

window.addEventListener('scroll', () => {
  if (window.scrollY > min_scroll_height) {
    navbarwrap.classList.add('navbar-wrap-shadow');
  } else {
    navbarwrap.classList.remove('navbar-wrap-shadow');
  }
})