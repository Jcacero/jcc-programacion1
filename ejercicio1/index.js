//creamos una funcion de flecha para calcular el teorema de pitagoras

const calcular = () => {
    //creamos constantes para ingresar los dos datos
    const dato1 = document.getElementById("inp_dato1").value;
    const dato2 = document.getElementById("inp_dato2").value;

        // con el math.pow elevamos los numeros
    const parte1 = Math.pow(dato1,2) + Math.pow(dato2,2);
        //con el math.qrt sacamos la raiz cuadrada
    const resultado = Math.sqrt(parte1); 
        //buscamos el id de resultado y los mostramos en texto
    document.getElementById("h_resultado").textContent = "El resultado es: "+resultado;
}
        //dentro de la const boton , gaudamos el id del boton
const boton = document.getElementById("btn_calcular");
        //creamos un evento para que cuando se clickee el boton, se calcule
boton.addEventListener("click",calcular);