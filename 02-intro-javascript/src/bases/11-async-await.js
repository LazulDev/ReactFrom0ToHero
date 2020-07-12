

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajsakasdsd.com'));

// getImagenPromesa().then( console.log )

// Con async hacemos que una función devuelva una promesa
// Await ayuda a que trabajemos con el código como si fuera síncrono
const getImagen = async () => {
    try {
        await asyncFunc();

    } catch (err) {
        // Tratamiendo de error
        console.error( err );
    }

};

getImagen().then( console.log );

async function asyncFunc() {
    const apiKey = 'C1khQe3ZR1W2lfT09myKeuShdqFYSGC';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    // Las siguientes líneas de código no se ejecutan hasta que termine el await
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

