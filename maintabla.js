const API_TOKEN ='patugb4Wao0DRM7cX.49014db5b029c2ee34bf0d4ead68451c8b80cd78c2cf60684dd6fc3919aec82b';
const BASE_ID= 'apphx0a6IRoL5RvyA';
const TABLE_NAME = 'Products';
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;



console.log("Hola, esta es la base de datos: ");


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
  
}
getProductsAirtable();



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






const productos = [
  {
    id: 1,
    nombre: "Zapatilla Nike Air Max",
    categoria: "zapatillas",
    marca: "Nike",
    talle: [39, 40, 41, 42, 43],
    precio: 45000,
    stock: 12,
    color: "Negro",
    imagen: "/img/zapatillas/nike1.jpg"
  },
  {
    id: 2,
    nombre: "Zapatilla Adidas Ultraboost",
    categoria: "zapatillas",
    marca: "Adidas",
    talle: [38, 39, 40, 41, 42],
    precio: 50000,
    stock: 8,
    color: "Blanco",
    imagen: "/img/zapatillas/addidas1.jpg"
  },
  {
    id: 3,
    nombre: "Remera Nike",
    categoria: "remeras",
    marca: "Nike",
    talle: ["S", "M", "L", "XL"],
    precio: 12000,
    stock: 20,
    color: "Gris",
    imagen: "/img/camisetas/nike1.jpg"
  },
  {
    id: 4,
    nombre: "Zapatilla Addidas Sportswear",
    categoria: "remeras",
    marca: "Addidas",
    talle: ["M", "L", "XL"],
    precio: 14000,
    stock: 15,
    color: "Negro",
    imagen: "/img/zapatillas/addidas2.jpg"
  }
];














function publicarTabla(productos){
    let tabla= document.getElementById("datos-tabla");
  
    productos.forEach(producto => {
      producto.talle.forEach(talle => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td><a href="detalleproducto.html?id=${producto.id}">${producto.nombre}</a></td>
          <td>${producto.marca}</td>
          <td>${producto.color}</td>
          <td>${talle}</td>
          <td>${producto.stock}</td>
          <td>$${producto.precio}</td>
          <td><button onclick="abrirModalEditar({nombre: 'Zapatilla Nike', precio: 45000})" class="btn-editar">Editar</button></td>
        `;
        tabla.appendChild(fila);
      });
    });
  
  
  } 

  setTimeout(() => {
    publicarTabla(productos);
  }, 1000);
  

  const modalEditar = document.getElementById("modalEditar");
const cerrarModalBtn = document.getElementById("cerrarModal");

// Función para abrir el modal
function abrirModalEditar(producto) {
  document.getElementById("nombreEditar").value = producto.nombre;
  document.getElementById("precioEditar").value = producto.precio;
  modalEditar.classList.add("activo");
}

// Cerrar el modal
cerrarModalBtn.addEventListener("click", () => {
  modalEditar.classList.remove("activo");
});






