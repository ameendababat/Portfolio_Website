// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

  scrollToTop();

  initHamburgerMenu();

  initDarkMode();
});

function scrollToTop() {
  const toTopButton = document.createElement("button");
  toTopButton.innerHTML = "↑<br>TOP";
  toTopButton.classList.add("scroll-to-top");
  toTopButton.setAttribute("aria-label", "Scroll to top");

  document.body.appendChild(toTopButton);

  let isVisible = false;

  window.addEventListener("scroll", () => {
    const scrollThreshold = 300;

    if (window.scrollY > scrollThreshold && !isVisible) {
      toTopButton.style.display = "block";
      toTopButton.classList.add("show");
      isVisible = true;
    } else if (window.scrollY <= scrollThreshold && isVisible) {
      toTopButton.classList.remove("show");
      setTimeout(() => {
        toTopButton.style.display = "none";
      }, 300);
      isVisible = false;
    }
  });

  // Smooth scroll to top on click
  toTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function initHamburgerMenu() {
  const navbar = document.querySelector(".navbar");
  const navbarMenu = document.querySelector(".navbar__menu");

  const hamburgerBtn = document.createElement("button");
  hamburgerBtn.classList.add("navbar__toggle");
  hamburgerBtn.setAttribute("aria-label", "Toggle navigation");
  hamburgerBtn.innerHTML = `
    <span class="navbar__toggle-bar"></span>
    <span class="navbar__toggle-bar"></span>
    <span class="navbar__toggle-bar"></span>
  `;

  const navbarBrand = document.querySelector(".navbar__brand");
  if (navbarBrand) {
    navbarBrand.insertAdjacentElement("afterend", hamburgerBtn);
  }

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navbarMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Close menu when clicking on a link
  const navLinks = navbarMenu.querySelectorAll(".navbar__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      navbarMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && navbarMenu.classList.contains("active")) {
      hamburgerBtn.classList.remove("active");
      navbarMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
}

function initDarkMode() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  const currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }

  themeToggleBtn.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    if (isDarkMode) {
      // Switch to dark mode
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
      localStorage.setItem("theme", "dark");
    } else {
      // Switch to light mode
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
      localStorage.setItem("theme", "light");
    }

    // Add rotation animation
    themeIcon.style.transform = "rotate(360deg)";
    setTimeout(() => {
      themeIcon.style.transform = "rotate(0deg)";
    }, 300);
  });
}