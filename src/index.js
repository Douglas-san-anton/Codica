// @ts-check
import readlineSync from 'readline-sync';

export const roundsCount = 3;

export default (description, rounds) => {
    console.log('¡Bienvenido a Brain Games!');
    const name = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${name}!`);

    console.log(description);

    for (const [question, response] of rounds) {
        console.log(`Pregunta: ${question}`);
        const actual = readlineSync.question('Tu respuesta: ');
        if (actual !== response) {
            console.log(`'${actual}' es una respuesta incorrecta ;(. La respuesta correcta era '${response}'.`);
            console.log(`¡Intentémoslo de nuevo, ${name}!`);
            return;
        }
        console.log('¡Correcto!');
    }

    console.log(`¡Felicidades, ${name}!`);
}

