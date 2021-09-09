const solicitar = async () =>{

    //por defecto fetch realiza una solicitud a traves del metodo GET
    
    const lista = await fetch("https://jsonplaceholder.typicode.com/users")
    //esta instruccion tambien requiere algo de tiempo (usar await)
    const usuarios= await lista.json()

    usuarios.forEach(element => {
        
        console.log(`
            Usuario: ${element.username}
            Correo: ${element.email}
        
        `)

    });


}

const boton = document.getElementById("btn_solicitar")
boton.addEventListener("click",solicitar)