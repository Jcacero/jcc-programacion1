const calcular = () => {

    const dato1 = document.getElementById("inp_dato1").value;
    const dato2 = document.getElementById("inp_dato2").value;

    const parte1 = Math.pow(dato1,2) + Math.pow(dato2,2);

    const resultado = Math.sqrt(parte1); 

    document.getElementById("h_resultado").textContent = "El resultado es: "+resultado;
}

const boton = document.getElementById("btn_calcular");

boton.addEventListener("click",calcular);