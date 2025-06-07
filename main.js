


const API_TOKEN ='patugb4Wao0DRM7cX.49014db5b029c2ee34bf0d4ead68451c8b80cd78c2cf60684dd6fc3919aec82b';
const BASE_ID= 'apphx0a6IRoL5RvyA';
const TABLE_NAME = 'Products';
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;



console.log("Hola, esta es la base de datos: ");



const addToAirtable = async() => {

  const nuevoProducto = {
          id: 1,
          nombre: "Zapatilla biribiri",
          categoria: "zapatillas biri",
          marca: "Nike biri",
          talle: "39, 40, 41, 42, 43",
          precio: 50000,
          stock: "12",
          color: "Negro",
          imagen: "../img/zapatillas/nike1biri.jpg"        
      };

      const productoAirTable ={
        records: [
          {
            fields: nuevoProducto
          }
        ]
        
      };

  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(productoAirTable)
  }).then(data => console.log("Fue agregado:" + data))
}


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
  publicarProductos(data)
}
  

function publicarProductos(data) {
  const contenedor = document.getElementById("card-conteiner-productos");
  contenedor.innerHTML = "";

  data.records.forEach(producto => {
    const p = producto.fields;

    const html = `
      <div id="${p.nombre}" class="productConteiner">
        <a href="detalleproducto.html?id=${p.id}">
          <img src="${p.imagen}" alt="${p.nombre}" />
        </a>
        <h3>${p.nombre}</h3>
        <h6>ENVÍO GRATIS</h6>
        <h5>$${p.precio}</h5>
        <button>Agregar al carrito</button>
      </div>
    `;

    contenedor.insertAdjacentHTML('beforeend', html);
  });
}










  function filtrar(){
    let categoria= document.getElementById("").value;
    let color=document.getElementById("").value;

    //let productosFiltrados= 
  }

 
  


 //addToAirtable();
getProductsAirtable();
  