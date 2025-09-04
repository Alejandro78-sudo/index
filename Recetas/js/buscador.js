const searchInput = document.getElementById("search");
const recetas = document.querySelectorAll(".receta");

searchInput.addEventListener("keyup", function() {
    const filtro = searchInput.value.toLowerCase();

recetas.forEach(receta => {
    const titulo = receta.querySelector(".titulo-receta").textContent.toLowerCase();
    const overlay = receta.querySelector(".overlay").textContent.toLowerCase();

    if (titulo.includes(filtro) || overlay.includes(filtro)) {
    receta.style.display = "block";
    } else {
    receta.style.display = "none";
    }
    });
});
// Lista de curiosidades
const curiosidades = [
  "📜 ¿Sabías que el pan más antiguo encontrado tiene más de 14.000 años?",
  "🍫 El chocolate era usado como moneda en la civilización maya.",
  "🍕 La pizza Margarita fue creada en honor a la reina Margarita de Italia.",
  "🍨 El primer helado moderno se preparó en China hace más de 2000 años."
];

const tips = [
  "☕ Ponle un poco de sal al café para reducir el amargor.",
  "🧂 Si la sal se humedece, agrega unos granos de arroz al salero.",
  "🌿 Para mantener hierbas frescas, guárdalas en agua como si fueran flores.",
  "🍝 Cuando hiervas pasta, añade un chorrito de aceite para que no se pegue."
];

function cambiarTexto(contenedor, lista) {
  const p = contenedor.querySelector("p");
  const random = Math.floor(Math.random() * lista.length);

  // Animación de salida
  contenedor.classList.add("move-out");

  setTimeout(() => {
    // Cambia el texto
    p.textContent = lista[random];

    // Quita salida y agrega entrada
    contenedor.classList.remove("move-out");
    contenedor.classList.add("move-in");

    // Forzar reflujo para reiniciar animación
    void contenedor.offsetWidth;

    // Activar animación de entrada
    contenedor.classList.add("move-in-active");

    // Quitar clases después de animar
    setTimeout(() => {
      contenedor.classList.remove("move-in", "move-in-active");
    }, 500);
  }, 500);
}