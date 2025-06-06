





  const abrirBtn = document.getElementById("abrirCarrito");
  const cerrarBtn = document.getElementById("cerrarCarrito");
  const carrito = document.getElementById("carrito");

  abrirBtn.addEventListener("click", () => {
    carrito.classList.add("activo");
  });

  cerrarBtn.addEventListener("click", () => {
    carrito.classList.remove("activo");
  });
