import readlineSync from 'readline-sync';

export default () => {
    const name = readlineSync.question('¿Cual es tu nombre? ');
    console.log(`¡Hola, ${name}!`);
}