





let carritoActivo=[
    {
    id: 1,
    nombre: "Zapatilla Nike Air Max",
    categoria: "zapatillas",
    marca: "Nike",
    talle: [39, 40, 41, 42, 43],
    precio: 45000,
    stock: 12,
    color: "Negro",
    imagen: "../img/zapatillas/nike1.jpg"
  },
  {
    id: 2,
    nombre: "Zapatilla Adidas Ultraboost",
    categoria: "zapatillas",
    marca: "Adidas",
    talle: [38, 39, 40, 41, 42],
    precio: 50000,
    stock: 8,
    color: "Blanco",
    imagen: "../img/zapatillas/addidas1.jpg"
  },
  ];


  function renderCarrito(carrito) {
  const contenedor = document.getElementById("carritoItems");
  const totalTexto = document.getElementById("totalCarrito");
  contenedor.innerHTML = "";

  let total = 0;

  carrito.forEach(producto => {
    total += producto.precio;

    const item = document.createElement("div");
    item.classList.add("item-carrito");

    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div>
        <h4>${producto.nombre}</h4>
        <p>$${producto.precio}</p>
      </div>
    `;

    contenedor.appendChild(item);
  });

  totalTexto.textContent = total;
}

renderCarrito(carritoActivo)