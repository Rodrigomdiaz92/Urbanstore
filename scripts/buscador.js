


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
  

getProductsAirtable();

console.log(localProductos);


const inputBusqueda = document.getElementById("input-busqueda");
const contenedorResultados = document.getElementById("resultados-busqueda");

inputBusqueda.addEventListener("input", function () {
  const texto = inputBusqueda.value.toLowerCase();
  contenedorResultados.innerHTML = "";

  if (texto === "") return;

  const resultados = localProductos.records.filter(producto =>
    producto.fields.nombre.toLowerCase().includes(texto)
  );

  resultados.forEach(producto => {
    const item = document.createElement("div");
    item.classList.add("resultado-item");

    item.innerHTML = `
      <img src="${producto.fields.imagen}" alt="${producto.fields.nombre}">
      <span>${producto.fields.nombre}</span>
    `;

    item.addEventListener("click", () => {
      
      window.location.href = `detalleproducto.html?id=${producto.id}`;
    });

    contenedorResultados.appendChild(item);
  });
});



