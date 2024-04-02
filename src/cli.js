import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
}