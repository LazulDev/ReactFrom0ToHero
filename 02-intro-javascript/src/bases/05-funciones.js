

    // Funciones en JS
    // Recomendado asignar la función  a una constante para evitar pisarla
    const saludar = function( nombre ) {
        return `Hola, ${ nombre }`;
    }

    const saludarFlecha = (nombre) => {
        return `Hola, ${ nombre }`;
    }
    const saludarFlechaPro = (nombre) => `Hola, ${ nombre }`;
    // Retornar un objeto en una función de flecha
    const getUserName = () => ({uid: 'ABC123', username: 'Terminator2000'});
    // saludar = 30;

    console.log( saludar );
    console.log( saludarFlecha('Vegeta') );
    console.log( saludarFlechaPro('Vegeta') );
    console.log( getUserName() )

    const getUsuarioActivo = (username) => ({uid: 'ABC567', username});
    const usuario = getUsuarioActivo('Fernando');
    console.log( usuario )