const calcular = () => {
    const radio = document.getElementById("inp_radio").value
    
    const area = (Math.pow(radio,2)) * (Math.PI)

    document.getElementById("h3_area").textContent = "el area del circulo es: "+area;

}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",calcular)