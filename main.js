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

function publicarProductos(productos){
  document.getElementById("card-conteiner-productos").innerHTML = "";

  productos.forEach(producto => {
    //const html =`<h2 class="titulo-producto">${producto.nombre}</h2>`;
    const html =`
    <div id="${producto.nombre}" class="productConteiner">
            <a href=""></a><img src="${producto.imagen}" alt="${producto.nombre}" /></a>
            <h3>${producto.nombre}</h3>
            <h6>ENVIO GRATIS</h6>            
            <h5>$${producto.precio}</h5>            
            <button >Agregar al carrito</button>
          </div>
    `;
    console.log("hola")

    document.getElementById("card-conteiner-productos").insertAdjacentHTML('beforeend', html);
    
  });


}






  function filtrar(){
    let categoria= document.getElementById("").value;
    let color=document.getElementById("").value;

    //let productosFiltrados= 
  }

  publicarProductos(productos);