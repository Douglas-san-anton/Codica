import readlineSync from 'readline-sync';

export const roundsCount = 3;

export default (descripcion, rondas) => {
    console.log('¡Bienvenido a Brain Games!');
    const nombre = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${nombre}!`);

    console.log(descripcion);

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

