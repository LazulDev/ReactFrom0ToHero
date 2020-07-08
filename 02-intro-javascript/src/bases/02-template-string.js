const nombre = 'María';
const apellido = 'Sánchez';

const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );

function getSaludo( nombre ) {
    return `Hola ${nombre}`;
}

console.log( `${ getSaludo( nombre ) }, ¿cómo estás?`)