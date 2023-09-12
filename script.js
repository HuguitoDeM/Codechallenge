document.addEventListener("DOMContentLoaded", () => {
    
    
    function createRecordDiv(record) {
        const recordDiv = document.createElement('div');
        recordDiv.className = 'record';
    
        const deleteButton = document.createElement('img');
        deleteButton.src = 'delete.png';
        deleteButton.style.cursor = 'pointer';
    
        deleteButton.addEventListener('click', () => {
            fetch(`https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265/${record._id}`, {
                method: 'DELETE'
            })
            .then(() => {
             
                updateRecordList();
            })
            .catch(error => {
                console.error("Hubo un error al eliminar el registro:", error);
            });
        });
    
      
        recordDiv.innerText = `Nombre: ${record.nombre}, Edad: ${record.edad}`;
        recordDiv.appendChild(deleteButton);
    
        return recordDiv;
    }
    

    botonEnviar.addEventListener("click", () => {
        let Nombre = document.getElementById("nombre").value;
        let Apellido = document.getElementById("apellido").value;
        let Grupo = document.getElementById("grupo").value;
        let Sala = document.getElementById("sala").value;

        fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                nombre: Nombre,
                apellido: Apellido,
                grupo: Grupo,
                sala: Sala,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
         
        })
        .catch(error => {
            console.error("Hubo un error al enviar los datos:", error);
        });
    });
});


function pedirDatos() {
    let div = document.getElementById("lista")
    fetch("https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265")
        .then(res => res.json())
        .then(datas =>{
            div.innerHTML = '';
        for(let data of datas){
        div.innerHTML += `<ul><li>${data.nombre}</li> <li>${data.apellido}</li> <li>${data.grupo}</li> 
        <li>${data.sala}</li></ul> <img src="tacho-de-reciclaje.png" id= "cosos"; class="coso">
         `;  
    
}})
}

setTimeout(() => {
pedirDatos()
}, 1500);


