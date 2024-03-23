import run, { roundsCount } from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';

const isPrime = (number) => {
    if (number < 2) {
        return false;
    }

    const sqrt = Math.sqrt(number);
    for (let i = 2; i <= sqrt; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

const generateRound = () => {
    const number = generateNumber(1, 10);
    const question = String(number);
    const answer = isPrime(number) ? 'yes' : 'no';

    return [question, answer];
};

export default () => {
    const rounds = Array.from({ length: roundsCount }, generateRound);
    run(description, rounds);
};
