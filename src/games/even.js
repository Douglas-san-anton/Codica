import run, { roundsCount } from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Responde "yes" si el número es par, de lo contrario responde "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
    const number = generateNumber(1, 100);

    const question = String(number);
    const answer = isEven(number) ? 'yes' : 'no';

    return [question, answer];
};

export default () => {
    const rounds = [];
    for (let i = 0; i < roundsCount; i += 1) {
        rounds.push(generateRound());
    }

    run(description, rounds);
};
