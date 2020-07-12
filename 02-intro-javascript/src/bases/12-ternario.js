
const activo = true;

let mensaje = '';

// if ( activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

// If else
const mensaje = activo ? 'Activo' : 'Inactivo';
// Solo if: devuelve 'Activo' si true y si false devuelve false
const mensaje = activo && 'Activo';

console.log( mensaje )