// Dos tipos de componentes:
// * clases
// * funciones (tendencia) AKA (FC) Functional components
import React from 'react';
import PropTypes from 'prop-types';
// import React, {Fragment} from 'react'
const PrimeraApp = ({ 
    saludo, 
    subtitulo /**= 'Soy un subtitulo'  */
}) => {
    // Forma corta de importar un fragment
    // const saludo = 'Hola Mundo const';
    
    const saludoObj = {
        nombre: 'Maria',
        saludo: '¡Hola!'
    }
    // {} 
    // imprime number, string, array,
    // NO imprime: boolean (no imprime nada), objetos (da error) a menos que le hagas JSON.stringify o lo metas en un pre
    return (
        <>
            <h1> { saludo } </h1>
            { <pre> {JSON.stringify( saludoObj, null, 3) }</pre>}
            <p>{ subtitulo }</p>
        </>
    );
    // return (
    //     <Fragment>
    //         <h1>Hola mundo</h1>
    //         <p>Mi primera aplicación</p>
    //     </Fragment>
    // );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;