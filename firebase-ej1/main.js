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
    //refrescar la tabla
    listar_clientes();
    //vaciar el formulario
    vaciar();
}

const botono= document.getElementById("btn_obtener");
botono.addEventListener("click",guardarCliente)

//funcon para eliminar un cliente

function eliminar(){

    const id = document.getElementById("inp_id").value
    db.collection("clientes").doc(id).delete()
    listar_clientes();

}
//funcion para listar cliente
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
                    <button onclick="llenar_input_oculto ('${element.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal" class= "btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                    <button onclick="editar_cliente('${element.nombre}','${element.apellido}',${element.dni},'${element.id}')" class="btn btn-info btn-sm"> <i class="fa fa-pencil"></i> </button>

                </td>            
            </tr>
        `
        total_filas.push(fila)
    });

    document.getElementById("tbody").innerHTML = total_filas.join('')
}

//ejecutamos la funcion
listar_clientes()

function llenar_input_oculto(id)
{
    document.getElementById("inp_id").value=id
}

//funcion para editar cliente
function editar_cliente(nom,ape,dni,id)
{
    document.getElementById("inp_nom").value = nom;
    document.getElementById("inp_ape").value = ape;
    document.getElementById("inp_dni").value = dni;
    document.getElementById("inp_id").value =id;
}


//funcion para actualizar lo modificado
function actualizar_cliente()
{
    const nom = document.getElementById("inp_nom").value
    const ape = document.getElementById("inp_ape").value
    const dni = document.getElementById("inp_dni").value
    const id = document.getElementById("inp_id").value
    //creamos objeto con los datos recibidos
    const clienteActualizado = {
        nombre:nom,
        apellido:ape,
        dni:dni
    }
    //enviamos los objetos al firebase
    db.collection("clientes").doc(id).update(clienteActualizado)
    listar_clientes()
    vaciar()
}
//funcion para vaciar los inputs
function vaciar()
{
    document.getElementById("inp_nom").value='';
    document.getElementById("inp_ape").value='';
    document.getElementById("inp_dni").value='';
    document.getElementById("inp_id").value='';
}