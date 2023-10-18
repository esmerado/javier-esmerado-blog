const navLinks = document.querySelectorAll("[data-navLink]");

navLinks.forEach((navLink) => {
  if (navLink.getAttribute("href") === window.location.pathname) {
    navLink.setAttribute("aria-current", "page");
  }
});
