document.addEventListener("DOMContentLoaded", function () {
  // Navbar Toggle
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });

  // Optional: You can add more JavaScript for additional interactivity, like dynamic content loading
});
