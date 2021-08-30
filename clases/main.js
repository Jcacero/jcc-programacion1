
import Empleado from './empleados.js'
const mostra_datos = () => {

    const nom = document.getElementById("inp_nombre").value
    const ape = document.getElementById("inp_apellido").value

    const instancia = new Empleado(nom,ape)
    instancia.mostrarDatosEmpleados()

}

const boton = document.getElementById("btn_guardar")
boton.addEventListener("click",mostra_datos)