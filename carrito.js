
  


  let carritoPrueba =[];



function agregarACarrito(recordId){
  const producto = localProductos.records.find(p => p.id === recordId);
  carritoPrueba.push(producto)
  console.log(carritoPrueba)
  agregarAlCarritoLocal(producto);
  renderCarrito()
}

function agregarAlCarritoLocal(producto) {
  let carritoLocal = JSON.parse(localStorage.getItem('carrito')) || [];  
  carritoLocal.push(producto);  
  localStorage.setItem('carrito', JSON.stringify(carritoLocal));
}

function vaciarCarrito() {
  localStorage.removeItem('carrito');
  renderCarrito();
}

function obtenerCarrito() {
  return JSON.parse(localStorage.getItem('carrito')) || [];
}





  function renderCarrito() {

  let carrito ={records: obtenerCarrito()}
  console.log(carrito)
  const contenedor = document.getElementById("carritoItems");
  const totalTexto = document.getElementById("totalCarrito");
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

const abrirBtn = document.getElementById("abrirCarrito");
const cerrarBtn = document.getElementById("cerrarCarrito");
const carrito = document.getElementById("carrito");
const agregarProducto = document.getElementsByClassName("agregarProducto")

abrirBtn.addEventListener("click", () => {
  carrito.classList.add("activo");
  renderCarrito();
  //vaciarCarrito();
});

cerrarBtn.addEventListener("click", () => {
  carrito.classList.remove("activo");
});

agregarProducto.addEventListener("click", () => {
  carrito.classList.add("activo");
  renderCarrito(carritoActivo);
  
});