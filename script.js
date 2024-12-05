document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMobile = document.querySelector(".nav-mobile");
  const closeMenu = document.querySelector(".close-menu");
  const body = document.body;

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

  // closes menu by clicking any space accept the menu in mobile version
  document.addEventListener("click", (event) => {
    if (
      !navMobile.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenuHandler();
    }
  });

  // Handles the close menu in the mobile version of the page
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMobile.classList.contains("active")) {
      closeMenuHandler();
    }
  });
});
