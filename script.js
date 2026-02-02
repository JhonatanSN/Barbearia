// Rolagem automática da galeria
const carrossel = document.querySelector(".carrossel");
let scrollX = 0;

function autoScrollGaleria() {
  scrollX += 1;
  if (carrossel.scrollWidth - carrossel.clientWidth <= scrollX) {
    scrollX = 0;
  }
  carrossel.scrollTo({ left: scrollX, behavior: "smooth" });
}

setInterval(autoScrollGaleria, 30);
