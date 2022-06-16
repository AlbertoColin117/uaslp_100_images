document.querySelectorAll(".info_imagen").forEach(function(elemento) {
  elemento.addEventListener("click", function() {
    this.classList.toggle("descubierto");
  });
});
