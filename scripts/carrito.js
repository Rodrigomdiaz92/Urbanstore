 
  


  let carritoPrueba =[];



function agregarACarrito(recordId) {
  const producto = localProductos.records.find(p => p.id === recordId);
  
  let carritoLocal = JSON.parse(localStorage.getItem('carrito')) || [];
  const indexProducto = carritoLocal.findIndex(p => p.id === recordId);

  if (indexProducto !== -1) {
    carritoLocal[indexProducto].cantidad += 1;
  } else {
    producto.cantidad = 1;
    carritoLocal.push(producto);
  }

  localStorage.setItem('carrito', JSON.stringify(carritoLocal));
  renderCarrito();
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
function eliminarDelCarrito(recordId) {
  let carritoLocal = JSON.parse(localStorage.getItem('carrito')) || [];
  carritoLocal = carritoLocal.filter(producto => producto.id !== recordId);
  localStorage.setItem('carrito', JSON.stringify(carritoLocal));
  renderCarrito();
}

function aumentarCantidad(recordId) {
  let carritoLocal = JSON.parse(localStorage.getItem('carrito')) || [];
  const indexProducto = carritoLocal.findIndex(p => p.id === recordId);

  if (indexProducto !== -1) {
    carritoLocal[indexProducto].cantidad += 1;
    localStorage.setItem('carrito', JSON.stringify(carritoLocal));
    renderCarrito();
  }
}

function disminuirCantidad(recordId) {
  let carritoLocal = JSON.parse(localStorage.getItem('carrito')) || [];
  const indexProducto = carritoLocal.findIndex(p => p.id === recordId);

  if (indexProducto !== -1) {
    if (carritoLocal[indexProducto].cantidad > 1) {
      carritoLocal[indexProducto].cantidad -= 1;
    } else {
      carritoLocal.splice(indexProducto, 1);
    }

    localStorage.setItem('carrito', JSON.stringify(carritoLocal));
    renderCarrito();
  }
}





function renderCarrito() {
  let carrito = { records: obtenerCarrito() };
  console.log(carrito);

  const contenedor = document.getElementById("carritoItems");
  const totalTexto = document.getElementById("totalCarrito");
  contenedor.innerHTML = "";

  let total = 0;

  carrito.records.forEach(producto => {
    const p = producto.fields;
    const recordId = producto.id;
    const cantidad = producto.cantidad || 1;
    total += p.precio * cantidad;

    const item = document.createElement("div");
    item.classList.add("item-carrito");

    item.innerHTML = `
      <a href="../docs/detalleproducto.html?id=${recordId}">
        <img src="${p.imagen}" alt="${p.nombre}">
      </a>
      <div>
        <h4>${p.nombre}</h4>
        <p>Precio: $${p.precio}</p>
        <div>
          <button onclick="disminuirCantidad('${recordId}')">-</button>
          <span>Cantidad: ${cantidad}</span>
          <button onclick="aumentarCantidad('${recordId}')">+</button>
        </div>
        <p>Subtotal: $${p.precio * cantidad}</p>
        <button onclick="eliminarDelCarrito('${recordId}')">🗑️</button>
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
/*
agregarProducto.addEventListener("click", () => {
  carrito.classList.add("activo");
  renderCarrito(carritoActivo);
  
});*/