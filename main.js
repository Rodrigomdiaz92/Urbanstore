


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
  console.log(localProductos);
  publicarProductos(localProductos);
  
}
  

function publicarProductos(data) {
  const contenedor = document.getElementById("card-conteiner-productos");
  contenedor.innerHTML = "";

  data.records.forEach(producto => {
    const p = producto.fields;
    const recordId = producto.id;

    const html = `
      <div id="${p.nombre}" class="productConteiner">
        <a href="detalleproducto.html?id=${recordId}">
          <img src="${p.imagen}" alt="${p.nombre}" />
        </a>
        <h3>${p.nombre}</h3>
        <h6>ENVÍO GRATIS</h6>
        <h5>$${p.precio}</h5>
        <button onclick="agregarACarrito('${recordId}')">Agregar al carrito</button>
      </div>
    `;

    contenedor.insertAdjacentHTML('beforeend', html);
     
  });

}

// eventos filtros
const selectCategorias = document.getElementById("filtro-categoria");
const selectMarcas = document.getElementById("filtro-marca");


selectCategorias.addEventListener("change", function () {
  const categoriaSeleccionada = selectCategorias.value; 
  const productosFiltrados ={
                              records: filtrarPorCategoria(categoriaSeleccionada, localProductos.records)
                            }; 
  //console.log(productosFiltrados);
  publicarProductos(productosFiltrados);
});

selectMarcas.addEventListener("change", function () {
  const marcaSeleccionada = selectMarcas.value; 
  filtrarPorMarca(marcaSeleccionada, localProductos.records);
  const productosFiltrados ={
                              records: filtrarPorMarca(marcaSeleccionada, localProductos.records)
                            };
  //console.log(productosFiltrados);
  publicarProductos(productosFiltrados);
});



function filtrarPorCategoria(nombreCategoria, productos) {
  return productos.filter(producto => producto.fields.categoria.toLowerCase() === nombreCategoria.toLowerCase());
}

function filtrarPorMarca(nombreMarca, productos) {
  return productos.filter(producto => producto.fields.marca.toLowerCase() === nombreMarca.toLowerCase());
}





getProductsAirtable();
  