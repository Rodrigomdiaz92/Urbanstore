






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
    imagen: "../img/zapatillas/nike1.jpg"
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
    imagen: "../img/zapatillas/addidas1.jpg"
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
    imagen: "../img/camisetas/nike1.jpg"
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
    imagen: "../img/zapatillas/addidas2.jpg"
  }
];







const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));


const producto = productos.find(p => p.id === id);



const contenedor = document.getElementById("detalle-producto");

if (producto) {
  contenedor.innerHTML = `
    <div id="img-producto">
          <img src="${producto.imagen}" alt="">
        </div>        
        <div id="producto">
          <h1>${producto.nombre}</h1>
          <ul>
            <li>Marca: ${producto.marca}</li>
            <li>Color: ${producto.color}</li>
            <li>Talles disponibles: ${producto.talle}</li>
          </ul>
          <h2>Descripción:</h2>
          <p>...</p>
          <h2>Precio: $${producto.precio}</h2>
          <button>Comprar</button>
        </div> 
    `;
} else {
  contenedor.innerHTML = `<p>Producto no encontrado.</p>`;
}


  