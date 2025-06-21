
const API_TOKEN ='patugb4Wao0DRM7cX.49014db5b029c2ee34bf0d4ead68451c8b80cd78c2cf60684dd6fc3919aec82b';
const BASE_ID= 'apphx0a6IRoL5RvyA';
const TABLE_NAME = 'Consultas';
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;




const addToAirtableConsulta = async(consulta) => {

  

      const consultaAirTable ={
        records: [
          {
            fields: consulta
          }
        ]
        
      };

  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(consultaAirTable)
  }).then(data => console.log(data))
}





function formularioEnviado(){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
   
    Swal.fire({
    title: "Compra Confirmada ",
    icon: "success",
    draggable: true
    });
    let nuevaconsulta = {
            nombre: nombre,
            correo: email,
            mensaje: mensaje                   
        };
    addToAirtableConsulta(nuevaconsulta);
    
    Swal.fire("Consulta enviada");
}