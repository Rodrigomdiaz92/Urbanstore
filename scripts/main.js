


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
  renderCarrito();
  
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
        <button id="agregarProducto" onclick="agregarACarrito('${recordId}')">Agregar al carrito</button>
      </div>
    `;

    contenedor.insertAdjacentHTML('beforeend', html);
     
  });

}

// eventos filtros
const selectCategorias = document.getElementById("filtro-categoria");
const selectMarcas = document.getElementById("filtro-marca");




selectCategorias.addEventListener("change", aplicarFiltros);
selectMarcas.addEventListener("change", aplicarFiltros);

function aplicarFiltros() {
  const categoriaSeleccionada = selectCategorias.value;
  const marcaSeleccionada = selectMarcas.value;

  let productosFiltrados = localProductos.records;

  
  if (categoriaSeleccionada !== "Todos") {
    productosFiltrados = productosFiltrados.filter(producto => 
      producto.fields.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase()
    );
  }

  
  if (marcaSeleccionada !== "Todos") {
    productosFiltrados = productosFiltrados.filter(producto => 
      producto.fields.marca.toLowerCase() === marcaSeleccionada.toLowerCase()
    );
  }

  if (productosFiltrados.length === 0) {
    const contenedor = document.getElementById("card-conteiner-productos");
    contenedor.innerHTML = `<p>No se encontraron productos con los filtros seleccionados.</p>`;

  } else {
    publicarProductos({ records: productosFiltrados });
  }

  
}



getProductsAirtable();
