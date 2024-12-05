document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMobile = document.querySelector(".nav-mobile");
  const closeMenu = document.querySelector(".close-menu");
  const body = document.body;
  const loader = document.getElementById("loader");

  function openMenu() {
    navMobile.classList.add("active");
    body.style.overflow = "hidden";
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeMenuHandler() {
    navMobile.classList.remove("active");
    body.style.overflow = "";
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeMenuHandler);

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !navMobile.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenuHandler();
    }
  });

  // Handles the escape key of the menu tab of mobile
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMobile.classList.contains("active")) {
      closeMenuHandler();
    }
  });

  // Hides my timepass loader after some time
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
      setTimeout(() => {
        loader.style.display = "none";
      }, 300);
    }, 2500);
  });
});
