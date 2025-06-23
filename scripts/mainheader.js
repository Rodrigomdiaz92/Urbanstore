
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navBar = document.getElementById('nav-bar');
  const cerrarMenu = document.getElementById('cerrar-menu');

  
  menuToggle.addEventListener('click', () => {
    navBar.classList.add('active');
  });

  
  cerrarMenu.addEventListener('click', () => {
    navBar.classList.remove('active');
  });
});
