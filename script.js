// Esperar a que el contenido de la página esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    // Definir los colores posibles
    const colores = ["green", "blue", "red"];
  
    // Función para obtener un color aleatorio de la lista
    function obtenerColorAleatorio() {
      const indice = Math.floor(Math.random() * colores.length);
      return colores[indice];
    }
  
    // Seleccionar todos los elementos <h5>
    const nombres = document.querySelectorAll("h5");
  
    // Agregar un event listener a cada <h5>
    nombres.forEach((nombre) => {
      nombre.addEventListener("click", () => {
        const colorAleatorio = obtenerColorAleatorio();
        nombre.style.color = colorAleatorio;
      });
    });
  
  });
  