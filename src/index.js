import readlineSync from 'readline-sync';

export const roundsCount = 3;

// Lógica común de los juegos. Se encarga de la interacción con el usuario y el proceso de juego (algoritmo).
// No sabe nada sobre juegos específicos.
// Solo conoce los conceptos de "pregunta" y "respuesta" proporcionados por el juego.
// Interpolación en lugar de concatenación
export default (descripcion, rondas) => {
    console.log('¡Bienvenido a Brain Games!');
    const nombre = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${nombre}!`);

    console.log(descripcion);

    // Desestructuración - opción
    // Esta tarea se puede resolver utilizando recursión.
    // Los propios datos pueden venir no en forma de un conjunto listo, sino como una función que genera
    // datos bajo demanda. Esto se hacía en versiones anteriores.
    // eslint-disable-next-line no-restricted-syntax
    for (const [pregunta, respuesta] of rondas) {
        console.log(`Pregunta: ${pregunta}`);
        const actual = readlineSync.question('Tu respuesta: ');
        if (actual !== respuesta) {
            console.log(`'${actual}' es una respuesta incorrecta ;(. La respuesta correcta era '${respuesta}'.`);
            console.log(`¡Intentémoslo de nuevo, ${nombre}!`);
            return;
        }
        console.log('¡Correcto!');
    }

    console.log(`¡Felicitaciones, ${nombre}!`);
}

