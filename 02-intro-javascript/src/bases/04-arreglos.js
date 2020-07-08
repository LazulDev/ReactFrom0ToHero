
    // Arreglos en JavaScript
    // const arreglo = new Array();
    const arreglo = [1, 2, 3, 4];
    // No se recomienda usar push porque modificamos el objeto (array) principal
    // arreglo.push(1);
    // arreglo.push(2);
    // arreglo.push(3);
    // arreglo.push(4);

    // En su lugar usamos el spread operator o el operador map de JS
    let arreglo2 = arreglo;
    // arreglo2.push( 5 );
    arreglo2 = [...arreglo, 5];

    let arreglo3 = arreglo2.map( numero => numero );

    console.log( arreglo );
    console.log( arreglo2 );
    console.log( arreglo3 );