// Función para mostrar/ocultar el menú en pantallas pequeñas
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// Opcional: Cerrar el menú si se hace clic en un enlace (en dispositivos móviles)
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.remove('active');
  });
});
