const API_TOKEN ='patugb4Wao0DRM7cX.49014db5b029c2ee34bf0d4ead68451c8b80cd78c2cf60684dd6fc3919aec82b';
const BASE_ID= 'apphx0a6IRoL5RvyA';
const TABLE_NAME = 'Products';
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;





let productosAirtable;
let idSeleccionado;


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


const addToAirtable = async(producto) => {

  

      const productoAirTable ={
        records: [
          {
            fields: producto
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
  tabla.innerHTML = " "
  tabla.innerHTML = `
        <tr>
          <th>Nombre</th>
          
          <th>Color</th>          
          
          <th>Precio</th>
          <th></th>
          <th></th>
        </tr>

  `;

  data.records.forEach(producto => {
    const p = producto.fields;
    const id = producto.id;

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><a href="detalleproducto.html?id=${id}">${p.nombre}</a></td>
      
      <td>${p.color}</td>
      
      <td>$${p.precio}</td>
      <td>
        <button class="btn btn-editar" onclick="abrirModalEditar({id:'${id}', nombre: '${p.nombre}',categoria:'${p.categoria}', marca:'${p.marca}', color:'${p.color}', stock:'${p.stock}', precio: ${p.precio},rutaimg:'${p.imagen}', descripcion:'${p.descripcion}' ,})" >
          <span class="material-icons">edit</span>
        </button>
      </td>
      <td><button class="btn btn-eliminar" onclick="eliminarProducto('${id}')"><span class="material-icons">delete</span></button></td>
    `;
    tabla.appendChild(fila);
  });
}








const modalEditar = document.getElementById("modalEditar");
const cerrarModalBtn = document.getElementById("cerrarModal");
//const eliminarBtn = document.getElementById("btn-eliminar");
const guardarBtn = document.getElementById("btn-editar");
const agregarBtn = document.getElementById("btn-agregar");
const tituloEditor = document.getElementById("titulo-editor")


function abrirModalEditar(producto) {
  idSeleccionado = producto.id
  document.getElementById("nombreEditar").value = producto.nombre;
  document.getElementById("marcaEditar").value = producto.marca;
  document.getElementById("colorEditar").value = producto.color;
  document.getElementById("stockEditar").value = producto.stock;
  document.getElementById("precioEditar").value = producto.precio;
  document.getElementById("categoriaEditar").value = producto.categoria;
  document.getElementById("imgEditar").value = producto.rutaimg;
  document.getElementById("descripcionEditar").value = producto.descripcion;
  modalEditar.classList.add("activo");
  
  guardarBtn.classList.remove("eliminar");   
  agregarBtn.classList.add("eliminar"); 
  tituloEditor.innerHTML = "Editar producto"
}


cerrarModalBtn.addEventListener("click", () => {
  modalEditar.classList.remove("activo");
});

function abrirModalAgregarProducto() {
  document.getElementById("nombreEditar").value = " ";
  document.getElementById("marcaEditar").value = " ";
  document.getElementById("colorEditar").value = " ";
  document.getElementById("stockEditar").value = 0;
  document.getElementById("precioEditar").value = 0;
  document.getElementById("categoriaEditar").value = " ";
  document.getElementById("imgEditar").value = " ";
  document.getElementById("descripcionEditar").value = " ";
  
  guardarBtn.classList.add("eliminar");
  agregarBtn.classList.remove("eliminar");    
  modalEditar.classList.add("activo");

  tituloEditor.innerHTML = "Agregar Producto"
}

function agregarProducto(){

  let confirmar = confirm("¿Estas seguro de agregar el producto?")

  if(confirmar){
    let nombre = document.getElementById("nombreEditar").value;
    let marca = document.getElementById("marcaEditar").value;
    let color =document.getElementById("colorEditar").value;
    let stock = document.getElementById("stockEditar").value;
    let precio = document.getElementById("precioEditar").value;
    let categoria = document.getElementById("categoriaEditar").value;
    let imgRuta = document.getElementById("imgEditar").value;
    let descripcion = document.getElementById("descripcionEditar").value;

    let nuevoProducto = {
            nombre: nombre,
            categoria: categoria,
            marca: marca,          
            precio: parseInt(precio),
            stock: stock,
            color: color,
            imagen: imgRuta,
            descripcion: descripcion,        
        };


  addToAirtable(nuevoProducto);
  getProductsAirtable();
  modalEditar.classList.remove("activo");
  alert("¡Producto Agregado!")
  //Swal.fire("¡Producto Agregado!");
  }
  

}

function eliminarProducto(recordId) {
  let confirmar = confirm("¿Estas seguro de eliminar el producto?")

  if(confirmar){
    fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${recordId}`, {
    method: "DELETE",
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      //'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      console.log("Producto eliminado con éxito");
      getProductsAirtable();
      alert("Producto Eliminado")
      //Swal.fire("Producto Eliminado");     
    } else {
      return response.json().then(data => {
        console.error("Error al eliminar:", data);
      });
    }
  })
  .catch(error => {
    console.error("Error de red:", error);
  });

  }
  
}


function actualizarProducto(recordId){


  let confirmar = confirm("¿Estas seguro de actualizar el producto?")

  if(confirmar){
    let nombre = document.getElementById("nombreEditar").value;
  let marca = document.getElementById("marcaEditar").value;
  let color =document.getElementById("colorEditar").value;
  let stock = document.getElementById("stockEditar").value;
  let precio = document.getElementById("precioEditar").value;
  let categoria = document.getElementById("categoriaEditar").value;
  let imgRuta = document.getElementById("imgEditar").value;
  let descripcion = document.getElementById("descripcionEditar").value;

  let productoActualizado = {
          nombre: nombre,
          categoria: categoria,
          marca: marca,          
          precio: parseInt(precio),
          stock: stock,
          color: color,
          imagen: imgRuta,
          descripcion: descripcion,        
      };

      
  fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${recordId}`, {
    method: "PATCH",
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fields: productoActualizado
    })
  })
  .then(response => {
    if (response.ok) {
      console.log("Producto actualizado correctamente");
      getProductsAirtable();
      modalEditar.classList.remove("activo");
      alert("¡Producto Actualizado!")
      //Swal.fire("¡Producto Actualizado!");
    } else {
      return response.json().then(data => {
        console.error("Error en la actualización:", data);
      });
    }
  })
  .catch(error => {
    console.error("Error de red:", error);
  });
    
  }

  







}
