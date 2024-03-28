import readlineSync from 'readline-sync';

export const roundsCount = 3;

export default (description, rounds) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`¡Hello, ${name}!`);

    console.log(description);

    for (const [question, response] of rounds) {
        console.log(`Question: ${question}`);
        const actual = readlineSync.question('Your answer: ');
        if (actual !== response) {
            console.log(`'${actual}' is wrong answer ;(. Correct answer was '${response}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}!`);
}

