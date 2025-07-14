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
  const facturacion = document.getElementById("formulario-compra");
  if(carrito.records.length == 0){
    contenedor.innerHTML  = `<h4>Sin productos</h4>`;
    facturacion.innerHTML = " "

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


function confirmacionCompra(compra){
  const contenedor = document.getElementById("compra");
  contenedor.innerHTML = " ";

  contenedor.innerHTML = `
      <div id="confirmacion-compra">
      <h2>Compra Confirmada</h2>
      <img src="../img/imgs/Tick Pop.gif" alt="confirmacion">
      <h4>Datos del pedido</h4>
      <p>Cliente: ${compra.nombre}</p>
      <p>Correo: ${compra.correo}</p>
      <p>Telefono: ${compra.contacto}</p>
      <p>Direccion: ${compra.calle} ${compra.altura}, ${compra.localidad}</p>
      <p>Codigo Postal: ${compra.codigo}</p>
      <a href="../docs/tienda.html" id="boton-tienda">Volver a Tienda</a>  
      </div>
          
      `;
      //console.log(compra.contacto)
      //console.log(compra.altura)
      

}



function confirmarCompra() {
  let calle = document.getElementById("calle-entrega").value;
  let altura = document.getElementById("altura-entrega").value;
  let localidad = document.getElementById("localidad-entrega").value;
  let codigo = document.getElementById("codigop-entrega").value;
  let nombre = document.getElementById("nombre-apellido").value;
  let correo = document.getElementById("correo-electronico").value;
  let contacto = document.getElementById("telefono").value;
  console.log(contacto)
  console.log(altura)


  
  let nuevacompra = {
          nombre: nombre,
          correo: correo,
          //contacto: toString(contacto),
          contacto: contacto,
          calle: calle,          
          //altura: toString(altura),
          altura: altura,
          localidad: localidad,
          //codigo: toString(codigo),
          codigo: codigo,                     
      };
  addToAirtableCompra(nuevacompra);  
  vaciarCarrito();
  confirmacionCompra(nuevacompra);  

}


renderCarrito()