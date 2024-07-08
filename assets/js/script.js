// Esta función se asegura de que el nombre se muestre si está guardado en localStorage
function pintarNombre() {
  let nombreGuardado = localStorage.getItem("name");
  if (nombreGuardado) {
    document.getElementById("nombreUsuario").textContent = nombreGuardado;
  } else {
    // Redirigir a la página de entrada si no hay nombre guardado
    window.location.href = "pagina_de_entrada.html"; // Cambia esto por la URL de tu página de entrada
  }
}

// Llama a pintarNombre al cargar la página para mostrar el nombre guardado si existe
window.onload = function () {
  pintarNombre();
};
