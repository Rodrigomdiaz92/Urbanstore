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
      imagen: "nike-air-max.jpg"
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
      imagen: "adidas-ultraboost.jpg"
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
      imagen: "puma-essentials.jpg"
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
      imagen: "nike-sportswear.jpg"
    }
  ];

function publicarProductos(productos){
  document.getElementById("card-conteiner-productos").innerHTML = "";

  productos.forEach(producto => {
    const html =`<h2 class="titulo-producto">${producto.nombre}</h2>`;
    //const html =``;
    console.log("hola")

    document.getElementById("card-conteiner-productos").insertAdjacentHTML('beforeend', html);
    
  });


}






  function filtrar(){
    let categoria= document.getElementById("").value;
    let color=document.getElementById("").value;

    //let productosFiltrados= 
  }

  //publicarProductos(productos);