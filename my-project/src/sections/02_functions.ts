
export function saludar( nombre : string ){
    return `Hola ${ nombre }, como estas?`;
}


export function suma( n1:number, n2:number ){
    return n1 + n2;
}

export const resta = ( n1:number, n2:number ) : number => {
    return n1 - n2;
}

export const potencia = ( n1:number ) : number =>{ 
    return n1 ** 2;
}

export const multiplicacion = ( n1: number , n2: number = 14 ) : number => {
    return n1 * n2;
}





// // const nombre : string = 'Juan'

// // const saludo = saludar( nombre );
// // console.log(saludo)

// // const resultado =  suma( 2 , 2 )
// // console.log(resultado)

// // const resultadoResta = resta(5 , 3);
// // console.log(resultadoResta)

// const resultadoPotencia = potencia( 3 )
// console.log(resultadoPotencia)

// const resultadoMultiplicacion = multiplicacion( 3, 2 )
// console.log(resultadoMultiplicacion)

