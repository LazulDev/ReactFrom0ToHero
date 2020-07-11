import heroes, { owner } from '../data/heroes';
console.log( heroes );

export const getHeroeById = (id) => heroes.find (heroe => heroe.id === id );

console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner );

console.log( getHeroesByOwner('DC') )
console.log( getHeroesByOwner('Marvel') )