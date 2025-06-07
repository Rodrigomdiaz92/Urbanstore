const API_TOKEN ='patugb4Wao0DRM7cX.49014db5b029c2ee34bf0d4ead68451c8b80cd78c2cf60684dd6fc3919aec82b';
const BASE_ID= 'apphx0a6IRoL5RvyA';
const TABLE_NAME = 'Products';
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;



console.log("Hola, esta es la base de datos: ");

let productosAirtable;


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
  productosAirtable = data;
   console.log(productosAirtable);
   publicarTabla(productosAirtable);
  
}
getProductsAirtable();



const addToAirtable = async() => {

  const nuevoProducto = {
          nombre: "Zapatilla biribiri",
          categoria: "zapatillas biri",
          marca: "Nike biri",          
          precio: 50000,
          stock: "12",
          color: "Negro",
          imagen: "../img/zapatillas/nike1biri.jpg",
          descripcion: "hhh",        
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









function publicarTabla(data) {
  let tabla = document.getElementById("datos-tabla");

  data.records.forEach(producto => {
    const p = producto.fields;
    const id = producto.id;

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><a href="detalleproducto.html?id=${id}">${p.nombre}</a></td>
      <td>${p.marca}</td>
      <td>${p.color}</td>
      <td>${p.stock}</td>
      <td>$${p.precio}</td>
      <td>
        <button onclick="abrirModalEditar({ nombre: '${p.nombre}',categoria:'${p.categoria}', marca:'${p.marca}', color:'${p.color}', stock:'${p.stock}', precio: ${p.precio},rutaimg:'${p.imagen}', descripcion:'${p.descripcion}' ,})" class="btn-editar">
          Editar
        </button>
      </td>
    `;
    tabla.appendChild(fila);
  });
}








const modalEditar = document.getElementById("modalEditar");
const cerrarModalBtn = document.getElementById("cerrarModal");
const eliminarBtn = document.getElementById("btn-eliminar");
const tituloEditor = document.getElementById("titulo-editor")


function abrirModalEditar(producto) {
  document.getElementById("nombreEditar").value = producto.nombre;
  document.getElementById("marcaEditar").value = producto.marca;
  document.getElementById("colorEditar").value = producto.color;
  document.getElementById("stockEditar").value = producto.stock;
  document.getElementById("precioEditar").value = producto.precio;
  document.getElementById("categoriaEditar").value = producto.categoria;
  document.getElementById("imgEditar").value = producto.rutaimg;
  document.getElementById("descripcionEditar").value = producto.descripcion;
  modalEditar.classList.add("activo");
  eliminarBtn.classList.remove("eliminar");
  tituloEditor.innerHTML = "Editar producto"
}


cerrarModalBtn.addEventListener("click", () => {
  modalEditar.classList.remove("activo");
});

function abrirModalAgregarProducto() {
  document.getElementById("nombreEditar").value = " ";
  document.getElementById("marcaEditar").value = " ";
  document.getElementById("colorEditar").value = " ";
  document.getElementById("stockEditar").value = " ";
  document.getElementById("precioEditar").value = " ";
  document.getElementById("categoriaEditar").value = " ";
  document.getElementById("imgEditar").value = " ";
  document.getElementById("descripcionEditar").value = " ";
  eliminarBtn.classList.add("eliminar");  
  modalEditar.classList.add("activo");
  tituloEditor.innerHTML = "Agregar Producto"
}





