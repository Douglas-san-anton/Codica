import run, { roundsCount } from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Encuentra el máximo común divisor de los números dados.';

const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

const generateRound = () => {
  const number1 = generateNumber(1, 30);
  const number2 = generateNumber(1, 30);

  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));

  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }

  run(description, rounds);
};