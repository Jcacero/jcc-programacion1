import Area from "./area.js";

const mostrar = () =>{

    const a=document.getElementById("inp_baseSup").value;
    const b=document.getElementById("inp_baseInf").value;
    const h=document.getElementById("inp_altura").value;


    const instancia = new Area (a,b,h);

    const Area_Trapecio = instancia.calcularArea();

    document.getElementById("h3_areaTrapecio").textContent="El area del trapecio es = "+Area_Trapecio
}

const boton = document.getElementById("btn_calcular");
boton.addEventListener("click",mostrar);

const mostrar2 = () =>{

    const b_tr=document.getElementById("inp_baseTR").value;
    const a_tr=document.getElementById("inp_alturaTR").value;

    const instancia = new Area ('','','',b_tr,a_tr);

    const Area_Triangulo = instancia.calcularAreaTriangulo();

    document.getElementById("h3_areaTR").textContent="El area del triangulo es = "+Area_Triangulo;
}

const boton2 = document.getElementById("btn_calcular2");
boton2.addEventListener("click",mostrar2);