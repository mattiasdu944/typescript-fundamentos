

export class Molde{
    tipo   : string;
    nombre : string;

    constructor( tipo : string, nombre : string ){
        this.tipo = tipo;
        this.nombre = nombre;
    }

    ornear():void {
        console.log('Orneando')
    }
}



