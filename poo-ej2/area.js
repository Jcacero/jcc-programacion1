export default class Area{
    baseSup;
    baseInf;
    altura;

    baseTR;
    alturaTR;
    constructor(a,b,h,b_tr,a_tr){
        this.baseSup=a;
        this.baseInf=b;
        this.altura=h;

        this.baseTR=b_tr;
        this.alturaTR=a_tr;

    }

    calcularArea(){
        const resultado = ((parseInt(this.baseSup)+parseInt(this.baseInf))/2)*parseInt(this.altura);
        return resultado.toFixed(2);
    }

    calcularAreaTriangulo(){
        const resultado2 = parseInt(this.baseTR) * parseInt(this.alturaTR);
        return resultado2.toFixed(2);

    }


}