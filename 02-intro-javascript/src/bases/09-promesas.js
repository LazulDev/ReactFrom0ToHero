import { getHeroeById } from './bases/08-importaciones-exportaciones';


    // const promesa = new Promise( (resolve, reject) => {

    //     setTimeout(() => {
    //         const heroe = getHeroeById(2);
    //         resolve( heroe );
    //     }, 2000);
    // });

    // promesa.then( (heroe) => {
    //     console.log('Then de la promesa', heroe)
    // })
    // .catch( err => console.warn( err ));

    const getHeroeByIdAsync = (id) => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                const heroe = getHeroeById(id);
                heroe ? resolve( heroe ) : reject('No se pudo encontrar al heroe');
            }, 2000);
        });

    }
    getHeroeByIdAsync(1000).then( console.log )
    .catch( console.warn );
