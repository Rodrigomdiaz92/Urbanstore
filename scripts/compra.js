const API_TOKEN ='patugb4Wao0DRM7cX.49014db5b029c2ee34bf0d4ead68451c8b80cd78c2cf60684dd6fc3919aec82b';
const BASE_ID= 'apphx0a6IRoL5RvyA';
const TABLE_NAME = 'Compras';
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;






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
    const cantidad = producto.cantidad || 1;
    total += p.precio * cantidad;
    

    const item = document.createElement("div");
    item.classList.add("item-carrito");

      item.innerHTML = `
      <a href="detalleproducto.html?id=${recordId}">
        <img src="${p.imagen}" alt="${p.nombre}">
      </a>
      <div>
        <h4>${p.nombre}</h4>
        <p>$${p.precio} X ${cantidad}</p>
        <p>.-$${p.precio * cantidad}</p>
      </div>
      `;

    contenedor.appendChild(item);
  });

  totalTexto.textContent = total;
}
}

const addToAirtableCompra = async(compra) => {

  

      const compraAirTable ={
        records: [
          {
            fields: compra
          }
        ]
        
      };

  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(compraAirTable)
  }).then(data => console.log(data))
}



function confirmarCompra() {
  let calle = document.getElementById("calle-entrega").value;
  let altura = document.getElementById("altura-entrega").value;
  let localidad = document.getElementById("localidad-entrega").value;
  let codigo = document.getElementById("codigop-entrega").value;
  let nombre = document.getElementById("nombre-apellido").value;
  let correo = document.getElementById("correo-electronico").value;
  let contacto = document.getElementById("telefono").value;
  Swal.fire({
  title: "Compra Confirmada ",
  icon: "success",
  draggable: true
  });
  let nuevacompra = {
          nombre: nombre,
          correo: correo,
          contacto: toString(contacto),
          calle: calle,          
          altura: toString(altura),
          localidad: localidad,
          codigo: toString(codigo),                  
      };
  addToAirtableCompra(nuevacompra);
  
  vaciarCarrito();
  

}


renderCarrito()