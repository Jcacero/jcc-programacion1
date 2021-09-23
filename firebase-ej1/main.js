//nos conectamos con la base de datos Firestore
const db = firebase.firestore()


const guardarCliente = async () => {

    const nombre = document.getElementById("inp_nom").value
    const apellido = document.getElementById("inp_ape").value
    const dni = document.getElementById("inp_dni").value


    const unCliente = {
        nombre,
        apellido,
        dni

    }
    //se insertan los datos
    await db.collection("clientes").doc().set(unCliente)

    document.getElementById("inp_ape").value='';
    document.getElementById("inp_nom").value='';
    document.getElementById("inp_dni").value='';

    listar_clientes();
}

const botono= document.getElementById("btn_obtener");
botono.addEventListener("click",guardarCliente)

//eliminar un cliente

function eliminar(id){

    db.collection("clientes").doc(id).delete()
    listar_clientes();

}

const listar_clientes = async() => {
    const clientes= await db.collection("clientes").get();
    
    let lista_clientes=[]    
    
    //odrdenamiento de los datos
    const lista = clientes.docs.map(doc => {

        lista_clientes = doc.data()
        lista_clientes.id = doc.id;

        return lista_clientes;

    });

    let total_filas = [];
    lista.forEach(element => {
        let fila= `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.dni}</td>
                <td>
                    <button onclick="eliminar('${element.id}')" class= "btn btn-danger btn-sm">X</button>
                </td>            
            </tr>
        `
        total_filas.push(fila)
    });

    document.getElementById("tbody").innerHTML = total_filas.join('')
}
//ejecutamos la funcion
listar_clientes()