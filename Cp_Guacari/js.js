// Animación simple: suavizar scroll al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Ejemplo de alerta cuando envían el formulario
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Gracias por contactarnos. Te responderemos pronto.");
  this.reset();
});
