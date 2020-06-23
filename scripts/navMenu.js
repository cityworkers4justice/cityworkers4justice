let main = document.getElementsByTagName('main')[0];
let navDropdown = document.getElementsByClassName('nav-dropdown')[0];
let navBarToggle = document.getElementsByClassName('fa-bars')[0];

navBarToggle.addEventListener('click', function () {
  navDropdown.classList.toggle('active-nav-dropdown');
  main.classList.toggle('active-main');
  navBarToggle.classList.toggle('fa-bars')
  navBarToggle.classList.toggle('fa-times');
});

function removeResponsiveClass() {
    if(window.innerWidth >= 768) {
      main.classList.remove('active-main');
      navDropdown.classList.remove('active-nav-dropdown');
      navBarToggle.classList.remove('fa-times');
      navBarToggle.classList.add('fa-bars');
    }
}

window.addEventListener("resize", removeResponsiveClass);