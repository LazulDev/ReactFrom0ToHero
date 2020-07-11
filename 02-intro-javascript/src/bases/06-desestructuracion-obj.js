
    // Desestructuración
    // Asignación Desestructurante
    const persona = {
        nombre: 'Tony',
        edad: 45,
        clave: 'Ironman',
    };

    const { nombre: nombre2 } = persona;

    console.log( nombre2 );
    // console.log( persona.edad )
    // console.log( persona.clave )

    const retornaPersona = ( { nombre, edad, clave, rango = 'Capitán' } ) => { console.log( nombre, edad, clave, rango )};

    retornaPersona( persona )