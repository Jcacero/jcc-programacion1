export default class Empleado{
    
    nombre='';
    apellido= '';

    constructor(n,a){
        this.nombre = n;
        this.apellido = a;

    }

    mostrarDatosEmpleados()
    {
        console.log(`
            mi nombre es: ${this.nombre}
            mi apellido es: ${this.apellido}
        `)
    }

}