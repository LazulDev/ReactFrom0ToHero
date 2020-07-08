const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
};

console.log( persona )
// En consola aparece el prot del objeto literal (también conocido como diccionario)
console.log ({persona})

// Igual que hacer {persona: persona} esto se puede hacer desde el ES6 :)


// Como NO clonar un objeto (en realidad ambas variables apuntan a la misma posición de memoria)
const persona2 = persona;
persona2.nombre = 'Peter';
console.log( {persona} );
console.log( {persona2} );

// Como SÍ clonar: destructuring
const persona3 = { ...persona };
persona2.nombre = 'Un nombre';
console.log( {persona} );
console.log( {persona3} );

