
  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle");
    const menuContent = document.getElementById("menu-content");

    toggleBtn.addEventListener("click", function (e) {
      e.preventDefault();
      menuContent.classList.toggle("hidden");
    });
  });

  const miniatura = document.getElementById("miniatura");
  const modal = document.getElementById("modal");

  miniatura.addEventListener("click", () => {
    modal.classList.add("active");
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("active");
  });


  window.addEventListener("scroll", function() {
    const menu = document.querySelector(".menu");
    if (window.scrollY > 50) {
      menu.classList.add("scroll");
    } else {
      menu.classList.remove("scroll");
    }
  });
  // Script para abrir/cerrar el submenu
const toggleBtn = document.getElementById("menu-toggle");
const submenu = document.getElementById("submenu");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault(); // evitar que se vaya a #menu
  submenu.classList.toggle("active");
});

