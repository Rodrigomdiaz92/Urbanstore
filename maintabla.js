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
        `;
        tabla.appendChild(fila);
      });
    });
  
  
  } 

  setTimeout(() => {
    publicarTabla(productos);
  }, 1000);
  

  