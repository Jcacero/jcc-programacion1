const calcular_tiempo = () => {
    const vi = document.getElementById("inp_vi").value
    const vf = document.getElementById("inp_vf").value
    
    const resultado = (vf-vi) / 9.81

    return resultado

}
const mostrar = () => {
    const respuesta = calcular_tiempo()
    document.getElementById("h3_tiempo").textContent = "el tiempo que tarda el cuepo en caer es: "+respuesta;
}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)