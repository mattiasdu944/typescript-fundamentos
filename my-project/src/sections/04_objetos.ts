// import { saludar } from './02_functions';

//INTERFACE TYPESCRIPT
export interface Persona{
    nombre : string;
    apellido : string;
    status : boolean;
}

export const persona1 : Persona = {
    nombre : 'Juan',
    apellido : 'Perez',
    status : false
}

export const persona2 : Persona = {
    nombre : 'Marta',
    apellido : 'Perez',
    status : false
}

export const persona3 : Persona = {
    nombre : 'Pepe',
    apellido : 'Perez',
    status : false
}

export const personas : Persona[] = [ persona1, persona2, persona3 ]


export interface PersonaCompleta{
    nombre      : string;
    apellido    : string;
    estatura    : string;
    casado      : boolean;
    numeros     : string[];
    familiares  : Familiares[];
    saludar : () => void;
}

export interface Familiares{
    nombre : string;
    apellido : string;
    estatura : string;
}

export const persona : PersonaCompleta = {
    nombre: 'Mattias',
    apellido : 'Duarte',
    estatura : '1.84',
    casado : false,
    numeros : [
        '+591 76543212',
        '+591 76543213',
        '+591 76543214',
    ],
    familiares : [
        {
            nombre : 'Marta',
            apellido : 'Duarte',
            estatura : '1.75'
        },
        {
            nombre : 'Juan',
            apellido : 'Perez',
            estatura : '1.75'
        }
    ],

    saludar: () => {
        console.log('Hola')
    }
}





// import { personas, Persona, persona } from './sections/04_objetos';


// // console.log( persona.familiares[0].nombre );
// // const [ pariente1, pariente2  ] = persona.familiares // ESTA DESESTRUCTURANDO EL ARREGLO NO EL OBJETO
// // console.log(pariente2)



// console.log( personas )

// const nuevaPersona : Persona = {
//     nombre : 'Maria',
//     apellido : 'Perez',
//     status : true,
// }

// personas.push( nuevaPersona )
// // console.log(personas)

// persona.saludar();