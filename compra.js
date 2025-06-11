function obtenerCarrito() {
  return JSON.parse(localStorage.getItem('carrito')) || [];
}

function vaciarCarrito() {
  localStorage.removeItem('carrito');
  renderCarrito();
}

function renderCarrito() {

  let carrito ={records: obtenerCarrito()}
  console.log(carrito)
  
  const contenedor = document.getElementById("carritoItems");
  const totalTexto = document.getElementById("totalCarrito");
  if(carrito.records.length == 0){
    contenedor.innerHTML  = `<h4>Sin productos</h4>`;

  }else{
  contenedor.innerHTML = "";

  let total = 0;

  carrito.records.forEach(producto => {
    const p = producto.fields;
    const recordId = producto.id;
    total += p.precio;

    const item = document.createElement("div");
    item.classList.add("item-carrito");

    item.innerHTML = `
      <a href="detalleproducto.html?id=${recordId}">
        <img src="${p.imagen}" alt="${p.nombre}">
      </a>
      <div>
        <h4>${p.nombre}</h4>
        <p>$${p.precio}</p>
      </div>
    `;

    contenedor.appendChild(item);
  });

  totalTexto.textContent = total;
}
}

renderCarrito()