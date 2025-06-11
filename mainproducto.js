const API_TOKEN ='patugb4Wao0DRM7cX.49014db5b029c2ee34bf0d4ead68451c8b80cd78c2cf60684dd6fc3919aec82b';
const BASE_ID= 'apphx0a6IRoL5RvyA';
const TABLE_NAME = 'Products';
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;



console.log("Hola, esta es la base de datos: ");
let localProductos=[];

const getProductsAirtable = async() => {
  const response = await fetch(API_URL,{
    method: 'GET',
    headers:{
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  console.log('data', data);
  localProductos = data;
   publicarDetalleProducto(data)
  
}
getProductsAirtable();

const params = new URLSearchParams(window.location.search);
const recordId = params.get("id"); 


function publicarDetalleProducto(data) {
  renderCarrito();
  const producto = data.records.find(p => p.id === recordId);
  const contenedor = document.getElementById("detalle-producto");

  if (producto) {
    const p = producto.fields;

    contenedor.innerHTML = `
      <div id="img-producto">
        <img src="${p.imagen}" alt="${p.nombre}">
      </div>        
      <div id="producto">
        <h1>${p.nombre}</h1>
        <ul>
          <li>Marca: ${p.marca}</li>
          <li>Color: ${p.color}</li>
          
        </ul>
        <h2>Descripción:</h2>
        <p>${p.descripcion}</p>
        <h2>Precio: $${p.precio}</h2>
        <button onclick="agregarACarrito('${producto.id}')">Agregar al Carrito</button>
      </div> 
    `;
  } else {
    contenedor.innerHTML = `<p>Producto no encontrado.</p>`;
  }
}



