const API_TOKEN ='patugb4Wao0DRM7cX.49014db5b029c2ee34bf0d4ead68451c8b80cd78c2cf60684dd6fc3919aec82b';
const BASE_ID= 'apphx0a6IRoL5RvyA';
const TABLE_NAME = 'Products';
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;


const getProductsAirtable = async() => {
  const response = await fetch(API_URL,{
    method: 'GET',
    headers:{
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  publicarTabla(data);
  
}
getProductsAirtable();







function publicarTabla(data) {
  let tabla = document.getElementById("datos-tabla");
  tabla.innerHTML = " "
  tabla.innerHTML = `
        <tr>
          <th>Nombre</th>          
          <th>Color</th>          
          <th>Stock</th>
          <th>Precio</th>          
        </tr>

  `;

  data.records.forEach(producto => {
    const p = producto.fields;
    const id = producto.id;

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><a href="detalleproducto.html?id=${id}">${p.nombre}</a></td>      
      <td>${p.color}</td>
      <td>${p.stock}</td>
      <td>$${p.precio}</td>
      
    `;
    tabla.appendChild(fila);
  });
}






